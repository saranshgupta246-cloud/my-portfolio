import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { chatConfig } from "@/data/chat";
import { isRateLimited } from "@/lib/chat/rateLimit";
import { buildSystemPrompt } from "@/lib/chat/systemPrompt";

const messageSchema = z.object({
  message: z.string().trim().min(1).max(800),
});

function getClientId(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function hasHiringIntent(input: string): boolean {
  return /(hire|hiring|freelance|contract|available|work together|project)/i.test(
    input,
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ reply: chatConfig.errorFallback }, { status: 400 });
  }

  const parsed = messageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { reply: "Please send a valid message." },
      { status: 400 },
    );
  }

  const clientId = getClientId(request);
  if (isRateLimited(clientId)) {
    return NextResponse.json(
      { reply: "Too many requests. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reply: chatConfig.errorFallback }, { status: 200 });
  }

  const anthropic = new Anthropic({ apiKey });
  const userMessage = parsed.data.message;

  try {
    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL ?? "claude-3-5-sonnet-latest",
      max_tokens: 300,
      temperature: 0.2,
      system: buildSystemPrompt(),
      messages: [{ role: "user", content: userMessage }],
    });

    const text = response.content
      .map((block) => ("text" in block ? block.text : ""))
      .join(" ")
      .trim();

    let reply = text || chatConfig.errorFallback;

    if (hasHiringIntent(userMessage)) {
      reply = `${reply}\n\n${chatConfig.leadCaptureLine}`;
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch {
    return NextResponse.json({ reply: chatConfig.errorFallback }, { status: 200 });
  }
}


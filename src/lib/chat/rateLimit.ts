type Bucket = {
  count: number;
  windowStart: number;
};

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 12;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || now - existing.windowStart > WINDOW_MS) {
    buckets.set(key, { count: 1, windowStart: now });
    return false;
  }

  if (existing.count >= MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  buckets.set(key, existing);
  return false;
}


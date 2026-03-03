export interface Me {
  name: string;
  roles: string[];
  headline: string;
  bio: string;
  email: string;
  location?: string;
  avatarUrl?: string;
}

export const me: Me = {
  name: "Jane Doe",
  roles: ["Frontend Engineer", "UI Developer", "Design Systems"],
  headline: "Building interfaces that feel right",
  bio: "I build accessible, performant web experiences with React and TypeScript. Previously at startups and product teams.",
  email: "hello@example.com",
  location: "San Francisco, CA",
};

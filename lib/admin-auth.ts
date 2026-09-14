import { getChatGPTUser } from "../app/chatgpt-auth";

export const ADMIN_EMAILS = new Set([
  "dilenaz0057@gmail.com",
  "dilenazozdemir@gmail.com",
]);

export function isPortfolioAdminEmail(email: string) {
  return ADMIN_EMAILS.has(email.trim().toLowerCase());
}

export async function getPortfolioAdmin() {
  const user = await getChatGPTUser();
  if (!user || !isPortfolioAdminEmail(user.email)) return null;
  return user;
}

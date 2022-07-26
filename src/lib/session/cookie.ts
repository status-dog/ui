import { dev } from "$app/env";
import cookie from "cookie";

export const SESSION_COOKIE_NAME = "session_id";

export function createSessionCookie(sessionId: string) {
  return cookie.serialize(SESSION_COOKIE_NAME, sessionId, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: !dev,
    maxAge: 60 * 60 * 24 * 30,
  });
}

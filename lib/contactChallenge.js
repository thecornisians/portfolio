import { createHmac, randomBytes, randomInt, timingSafeEqual } from "crypto";

function signature(value, secret) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createChallenge(secret, now = Date.now()) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const code = Array.from({ length: 6 }, () => alphabet[randomInt(alphabet.length)]).join("");
  const payload = `${randomBytes(16).toString("hex")}.${now}`;
  return {
    code,
    token: `${payload}.${signature(`${payload}.${code}`, secret)}`,
  };
}

export function verifyChallenge(token, answer, secret, now = Date.now()) {
  if (typeof token !== "string" || typeof answer !== "string") return false;
  const normalized = answer.trim().toUpperCase();
  if (!/^[A-HJ-NP-Z2-9]{6}$/.test(normalized)) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [nonce, issuedAt, mac] = parts;
  if (!/^[a-f0-9]{32}$/.test(nonce) || !/^\d{13}$/.test(issuedAt) || !/^[a-f0-9]{64}$/.test(mac)) return false;
  const age = now - Number(issuedAt);
  if (age < 2000 || age > 10 * 60 * 1000) return false;
  const expected = signature(`${nonce}.${issuedAt}.${normalized}`, secret);
  return timingSafeEqual(Buffer.from(mac, "hex"), Buffer.from(expected, "hex"));
}

export function challengeSecret() {
  return process.env.CONTACT_CHALLENGE_SECRET || process.env.RESEND_KEYS || process.env.RESEND_API_KEY;
}

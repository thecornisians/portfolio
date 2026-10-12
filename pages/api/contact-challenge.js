import { challengeSecret, createChallenge } from "../../lib/contactChallenge";
import { randomInt } from "crypto";
import sharp from "sharp";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const secret = challengeSecret();
  if (!secret) {
    return res.status(503).json({ error: "Verification is unavailable. Please reach out by email." });
  }
  try {
    const { code, token } = createChallenge(secret);
    const letters = [...code].map((letter, index) => {
      const x = 30 + index * 38;
      const y = randomInt(47, 59);
      return `<text x="${x}" y="${y}" transform="rotate(${randomInt(-16, 17)} ${x} ${y})" font-family="sans-serif" font-weight="bold" font-size="34" fill="#172c26">${letter}</text>`;
    }).join("");
    const lines = Array.from({ length: 5 }, () => `<path d="M0 ${randomInt(10, 75)} Q140 ${randomInt(0, 85)} 280 ${randomInt(10, 75)}" stroke="#6a9587" stroke-width="1" fill="none" opacity="0.5"/>`).join("");
    const dots = Array.from({ length: 60 }, () => `<circle cx="${randomInt(280)}" cy="${randomInt(85)}" r="1" fill="#72988b" opacity="0.5"/>`).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="85"><rect width="280" height="85" rx="10" fill="#ecf8f2"/>${dots}${letters}${lines}</svg>`;
    // Only return raster pixels and a signed token, never the code or SVG text.
    const png = await sharp(Buffer.from(svg)).png().toBuffer();
    return res.status(200).json({ image: `data:image/png;base64,${png.toString("base64")}`, token });
  } catch (error) {
    console.error("Contact verification image error:", error);
    return res.status(503).json({ error: "Could not load verification. Please try again or reach out by email." });
  }
}

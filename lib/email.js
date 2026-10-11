// Bot-safe email utility that prevents static HTML email scraping
const PARTS = ["thecornisians", "gmail", "com"];

export function getObfuscatedEmail() {
  return `${PARTS[0]}@${PARTS[1]}.${PARTS[2]}`;
}

export async function copyObfuscatedEmail() {
  const email = getObfuscatedEmail();
  if (typeof window !== "undefined" && navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(email);
      return true;
    } catch (e) {
      // Fallback
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      return true;
    }
  }
  return false;
}

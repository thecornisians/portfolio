import { useEffect, useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, AlertCircle, Loader2 } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { copyObfuscatedEmail, getObfuscatedEmail } from "../lib/email";

export default function Form() {
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState("");
  const [challenge, setChallenge] = useState(null);
  const [challengeAnswer, setChallengeAnswer] = useState("");
  const [challengeError, setChallengeError] = useState("");
  const [website, setWebsite] = useState("");

  const loadChallenge = async () => {
    setChallenge(null);
    setChallengeAnswer("");
    setChallengeError("");
    try {
      const res = await fetch("/api/contact-challenge", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not load verification. Please try again.");
      setChallenge(data);
    } catch (err) {
      setChallengeError(err.message || "Could not load verification. Please try again.");
    }
  };

  useEffect(() => {
    loadChallenge();
  }, []);

  const handleCopy = async () => {
    await copyObfuscatedEmail();
    setCopied(true);
    setRevealed(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website, challengeToken: challenge?.token, challengeAnswer }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again or reach out by email.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again or reach out by email.");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 px-4 sm:px-6 py-20 lg:py-24 max-w-5xl mx-auto text-[#F5F5F5]">
      {/* Header (PRD 4.7) */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3 tracking-wider uppercase">
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-4">
          Have something interesting in mind?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
            Let&apos;s talk.
          </span>
        </h2>
        <p className="text-[#A3A3A3] text-base sm:text-lg font-light leading-relaxed">
          Whether it&apos;s an engineering opportunity, a product idea, or a potential collaboration, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Card & Socials */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Direct Email Card */}
          <div
            onClick={handleCopy}
            className="group cursor-pointer rounded-2xl bg-[#0D0D0D] border border-[#252525] hover:border-emerald-500/40 p-6 sm:p-7 transition-all duration-300 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-[#252525] text-emerald-400 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-[#252525] text-[11px] font-mono text-[#A3A3A3] group-hover:text-emerald-400 transition-colors">
                {copied ? "Copied! ✨" : "Click to copy"}
              </span>
            </div>

            <h3 className="text-base font-bold text-[#F5F5F5] mb-1">Get in Touch</h3>
            <p className="text-xs text-[#A3A3A3] mb-4 leading-relaxed font-light">
              Feel free to reach out directly. I&apos;ll get back to you as soon as I can.
            </p>

            <p className="text-sm sm:text-base font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors break-all">
              {revealed ? getObfuscatedEmail() : "thecornisians [at] gmail.com"}
            </p>
          </div>

          {/* Social Links Card */}
          <div className="rounded-2xl bg-[#0D0D0D] border border-[#252525] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <h4 className="text-xs font-mono uppercase text-[#A3A3A3] tracking-wider mb-4">
              Find Me Across the Web
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/thecornisians"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900 border border-[#252525] hover:border-zinc-700 transition-all text-sm group"
              >
                <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white">
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
                  @thecornisians ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/corneliusoa/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900 border border-[#252525] hover:border-zinc-700 transition-all text-sm group"
              >
                <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white">
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
                  in/corneliusoa ↗
                </span>
              </a>

              <a
                href="https://twitter.com/thecornisians"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/40 hover:bg-zinc-900 border border-[#252525] hover:border-zinc-700 transition-all text-sm group"
              >
                <div className="flex items-center gap-3 text-zinc-300 group-hover:text-white">
                  <FaTwitter size={16} />
                  <span>Twitter / X</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
                  @thecornisians ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Send a Message Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0D0D0D] border border-[#252525] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-1">Send a Message</h3>
            <p className="text-xs text-[#A3A3A3]">
              Send a note directly to my inbox with your project, question, or proposal.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 font-bold mb-2 text-base text-white">
                <Check size={20} className="text-emerald-400" />
                <span>Message Delivered!</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Thanks for reaching out! Your message has been sent. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => { setStatus("idle"); loadChallenge(); }}
                className="text-xs font-mono text-emerald-400 hover:text-white underline cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-mono text-[#A3A3A3] mb-1.5">
                    Your name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/70 border border-[#252525] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-mono text-[#A3A3A3] mb-1.5">
                    Your email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/70 border border-[#252525] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-subject" className="block text-xs font-mono text-[#A3A3A3] mb-1.5">
                  What&apos;s this about?
                </label>
                <input
                  id="form-subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/70 border border-[#252525] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all font-sans"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-mono text-[#A3A3A3] mb-1.5">
                  Tell me a little about what you have in mind...
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  required
                  placeholder="Tell me a little about what you have in mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/70 border border-[#252525] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all font-sans resize-none"
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="form-website">Website</label>
                <input id="form-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div className="rounded-xl border border-[#252525] p-4">
                <label htmlFor="form-verification" className="block text-xs font-mono text-[#A3A3A3] mb-2">
                  Quick spam check: enter the six characters in the image
                </label>
                {challenge ? (
                  <>
                  {/* Raster challenge deliberately has no text equivalent of the answer. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={challenge.image} width={280} height={85} alt="Spam verification code" className="mb-3 max-w-full rounded-lg" />
                  <input
                    id="form-verification"
                    type="text"
                    pattern="[A-Ha-hJ-Nj-nP-Zp-z2-9]{6}"
                    maxLength={6}
                    autoComplete="off"
                    required
                    placeholder="Six-character code"
                    value={challengeAnswer}
                    onChange={(e) => setChallengeAnswer(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/70 border border-[#252525] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  />
                  <p className="mt-2 text-xs text-zinc-400">Uppercase or lowercase is fine. Can&apos;t read the image? Try a new code or use the email link.</p>
                  </>
                ) : (
                  <p role="status" className="text-xs text-zinc-400">{challengeError || "Loading question…"}</p>
                )}
                <button type="button" onClick={loadChallenge} disabled={status === "sending"} className="mt-2 text-xs text-emerald-400 underline disabled:opacity-50">
                  {challengeError ? "Retry verification" : "Try a new code"}
                </button>
              </div>

              <button
                type="submit"
                disabled={status === "sending" || !challenge || !challengeAnswer.trim()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#F5F5F5] text-black font-semibold text-sm hover:bg-zinc-200 transition-all cursor-pointer disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

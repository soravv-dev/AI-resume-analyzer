import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import Badge from "../components/Badge";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@resumind.app" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <div className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14 px-4"
      >
        <Badge tone="purple" className="mb-5">
          <MessageSquare className="w-3.5 h-3.5" />
          Get in Touch
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
          Let's <span className="gradient-text">talk</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Have a question, feature request, or just want to say hi? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
        {/* contact info */}
        <div className="space-y-4">
          {CONTACT_INFO.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard glow="purple" hover={false}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple/20 to-pink/20 border border-white/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wide">{info.label}</p>
                    <p className="text-sm text-white/80">{info.value}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* form */}
        <div className="lg:col-span-2">
          <GlassCard glow="orange" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-white/60 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@email.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple/50 focus:bg-white/8 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us what's on your mind..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-purple/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>
              <Button type="submit" className="w-full" disabled={sent}>
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

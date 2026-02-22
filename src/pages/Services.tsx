import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";

const darkCard = { backgroundColor: "rgba(11, 29, 45, 0.85)" };

const packages = [
  {
    tier: "Basic",
    name: "Monitoring & Reviews",
    desc: "Essential package for online reputation control: brand mention tracking and professional review management.",
    features: ["Brand mention monitoring", "Review responses (Google, Trustpilot, Yelp)", "Monthly reputation report", "Negative mention alerts", "Basic analytics"],
    highlight: false
  },
  {
    tier: "Professional",
    name: "Growth & Visibility",
    desc: "Comprehensive package: reputation management enhanced with SEO optimisation and SERM strategy to boost your search presence.",
    features: ["Everything in Basic", "SEO optimisation", "SERM (search reputation management)", "Content marketing (2 articles/month)", "Social media management", "Weekly reporting"],
    highlight: true
  },
  {
    tier: "Enterprise",
    name: "Full Management",
    desc: "Maximum-tier package for businesses, including PR support, extended content marketing, and strategic consulting.",
    features: ["Everything in Professional", "PR & media relations", "Extended content marketing (8+ pieces/month)", "Paid advertising (PPC, targeting)", "Strategic consulting", "Crisis management 24/7", "Dedicated account manager"],
    highlight: false
  }
];

const ContactModal = ({ pkg, onClose }: { pkg: string; onClose: () => void }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase.functions.invoke("trello-lead", {
        body: { ...form, subject: `Service Enquiry: ${pkg}` }
      });
    } catch {}
    toast({ title: "Message Received", description: "We will respond within 24 hours." });
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 p-8 shadow-2xl" style={{ backgroundColor: "rgba(11, 29, 45, 0.97)" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors">
          <X className="h-5 w-5" />
        </button>
        <p className="font-playfair text-xs uppercase tracking-[0.3em] text-primary mb-2">Get Started</p>
        <h3 className="font-cormorant text-2xl text-white font-light mb-1">{pkg}</h3>
        <p className="text-white/50 text-sm mb-8">Fill in your details and we will be in touch within 24 hours.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label className="font-playfair text-xs uppercase tracking-[0.2em] text-white/60 mb-2 block">Full Name</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-primary"
              placeholder="Your name" required />
          </div>
          <div>
            <Label className="font-playfair text-xs uppercase tracking-[0.2em] text-white/60 mb-2 block">Email Address</Label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-primary"
              placeholder="your@email.com" required />
          </div>
          <div>
            <Label className="font-playfair text-xs uppercase tracking-[0.2em] text-white/60 mb-2 block">Message (optional)</Label>
            <Input value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white/5 border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-primary"
              placeholder="Tell us about your situation..." />
          </div>
          <Button type="submit" disabled={loading}
            className="w-full rounded-2xl py-5 font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg mt-2">
            {loading ? "Sending..." : "Send Enquiry"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
};


const ContactModal = ({ pkg, onClose }: { pkg: string; onClose: () => void }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-3xl p-8 border border-white/10 shadow-2xl"
        style={{backgroundColor: 'rgba(11, 29, 45, 0.97)'}}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <>
            <p className="font-playfair text-xs uppercase tracking-[0.3em] text-primary mb-2">{pkg} Package</p>
            <h2 className="font-cormorant text-3xl font-light text-white mb-6">Get Started</h2>
            <div className="space-y-4">
              <div>
                <label className="font-playfair text-xs uppercase tracking-[0.2em] text-white/50 mb-2 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 text-sm"
                />
              </div>
              <div>
                <label className="font-playfair text-xs uppercase tracking-[0.2em] text-white/50 mb-2 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 text-sm"
                />
              </div>
              <div>
                <label className="font-playfair text-xs uppercase tracking-[0.2em] text-white/50 mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your situation..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 text-sm resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground font-playfair text-sm uppercase tracking-wider py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-lg mt-2"
              >
                Send Enquiry <ArrowRight className="inline ml-2 h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-cormorant text-3xl font-light text-white mb-3">Message Received</h2>
            <p className="text-white/60 text-sm leading-relaxed">Thank you for your enquiry. We will respond within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const [modalPkg, setModalPkg] = useState<string | null>(null);
  return (
    <>      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6 font-semibold bg-primary-foreground">Our Service</p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl leading-tight font-medium text-primary-foreground">
              Service Packages
              <br />
              <span className="text-primary-foreground">For Your Business</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 150}>
                <div
                  className={`relative flex flex-col h-full rounded-3xl p-8 lg:p-10 border transition-all duration-500 hover:-translate-y-1 ${pkg.highlight ? "pt-12 border-primary/40 shadow-[0_8px_40px_-12px_rgba(11,29,45,0.4)]" : "border-white/10 hover:border-white/20"}`}
                  style={darkCard}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-playfair uppercase tracking-[0.2em] px-4 py-1 rounded-full">Popular</span>
                    </div>
                  )}
                  <p className="font-playfair text-xs uppercase tracking-[0.3em] text-primary mb-3">{pkg.tier}</p>
                  <h2 className="font-cormorant text-2xl lg:text-3xl font-light text-white mb-4">{pkg.name}</h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">{pkg.desc}</p>
                  <div className="space-y-3 mb-10 flex-grow">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/70">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => setModalPkg(pkg.name)}
                    className={`w-full rounded-2xl py-5 font-playfair tracking-wider uppercase transition-all duration-300 mt-auto ${pkg.highlight ? "hover:scale-105 shadow-lg hover:shadow-xl" : ""}`}
                    variant={pkg.highlight ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">Need a Custom Package?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Every client is unique. Get in touch to discuss a personalised solution tailored to your needs.
            </p>
            <Link to="/contact">
              <Button className="rounded-2xl px-10 py-6 text-base font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {modalPkg && <ContactModal pkg={modalPkg} onClose={() => setModalPkg(null)} />}
    </>
  );
};

export default Services;

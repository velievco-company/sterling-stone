import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30" style={{ backgroundColor: "rgba(11, 29, 45, 0.85)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="font-playfair text-white text-sm">{question}</span>
        <span className={`text-primary text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-5 text-white/65 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  { q: "What results can I expect, and how soon?", a: "Within the first 30 days, you will see measurable movement in search results — positive and neutral content about your firm begins appearing and pushing down unwanted material. By the end of month three, most of our clients in law, real estate, and hospitality see negative content pushed off the first two pages of Google. We start with a free 24-hour audit that gives you a clear picture of what is realistically achievable." },
  { q: "How do you do this — and is it all above board?", a: "Everything we do is fully compliant and transparent. We build and promote high-quality content across authoritative platforms, work with review sites through their official dispute processes, and strengthen your brand's presence on Google, Avvo, Trustpilot, Yelp, TripAdvisor, and others. We do not use bots, fake reviews, or any tactics that could backfire." },
  { q: "How much does this cost and why?", a: "Our starting engagement is $1,500 per month with a recommended minimum of three months. You get a dedicated team: a strategist, content specialists, an SEO professional, and a platform relations manager. Cheaper services almost always mean grey-hat tactics that create more risk than they solve." },
  { q: "What if I am not satisfied — do I get my money back?", a: "Yes, straightforwardly. We do not lock you into annual contracts. You pay month to month, and if at any point you feel the work is not delivering — we stop, and we refund any unused months immediately, no negotiations, no conditions." },
  { q: "How will you keep me informed along the way?", a: "Every two weeks you receive a progress report. At the end of each month a comprehensive report followed by a strategic discussion with our CEO. Every client has a personal direct line to our CEO, available any time, any day — through messaging, on your schedule, no mandatory calls required." },
  { q: "Have you worked with businesses like mine before?", a: "Yes — law firms, real estate agencies, boutique hotels, and fintech companies make up the core of our client base. We will walk you through relevant case studies with real before-and-after examples. If we have not worked in your specific niche, we will tell you upfront." },
  { q: "Can negative reviews actually be removed, or just pushed down?", a: "Both are possible under different conditions. Removal is achievable when a review violates platform terms of service: defamatory content, competitor reviews, fake accounts. If it does not violate policies, we focus on strategic suppression — pushing the negative material to page three or four where most people will never see it." },
  { q: "What happens after the engagement ends — will the results last?", a: "Quality content placed on authoritative domains holds its position for a long time. For most clients in law, hospitality, and real estate, we recommend a lighter maintenance package after the initial engagement to monitor new mentions, respond to fresh reviews, and protect what we have built." },
];

const FAQ = () => {
  return (
    <>
      <SEO
        title="FAQ — Veliev & Co"
        description="Frequently asked questions about reputation management services by Veliev & Co."
      />
      <section className="pt-32 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4 bg-primary-foreground w-full py-2">Common Questions</p>
              <h2 className="font-cormorant text-4xl md:text-5xl text-primary-foreground font-medium">Everything You Need to Know</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FaqItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import ceoPhoto from "@/assets/ceo-photo.jpg";

const darkCard = { backgroundColor: "rgba(11, 29, 45, 0.85)" };

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30" style={darkCard}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
        <span className="font-playfair text-white text-sm">{question}</span>
        <span className={`text-primary text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-5 text-white/65 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  { q: "What results can I expect, and how soon?", a: "Within the first 30 days, you will see measurable movement in search results вЂ” positive and neutral content begins appearing and pushing down unwanted material. By month three, most clients see negative content pushed off the first two pages of Google. We start with a free 24-hour audit." },
  { q: "How do you do this вЂ” and is it all above board?", a: "Everything we do is fully compliant and transparent. We build high-quality content across authoritative platforms, work with review sites through official dispute processes, and strengthen your presence on Google, Avvo, Trustpilot, Yelp, TripAdvisor. No bots, no fake reviews." },
  { q: "How much does this cost and why?", a: "Our starting engagement is $1,500 per month with a recommended minimum of three months. You get a dedicated team: strategist, content specialists, SEO professional, and platform relations manager. Cheaper services almost always mean grey-hat tactics." },
  { q: "What if I am not satisfied вЂ” do I get my money back?", a: "Yes. We do not lock you into annual contracts. You pay month to month вЂ” if at any point the work is not delivering, we stop and refund unused months immediately. No negotiations, no conditions." },
  { q: "How will you keep me informed along the way?", a: "Every two weeks you receive a progress report. At month end вЂ” a comprehensive report and strategic discussion with our CEO. Every client has a personal direct line to our CEO, any time, any day. Messaging only, no mandatory calls." },
  { q: "Have you worked with businesses like mine before?", a: "Yes вЂ” law firms, real estate agencies, boutique hotels, and fintech companies are our core clients. We will walk you through real before-and-after case studies. If we have not worked in your niche, we will say so upfront." },
  { q: "Can negative reviews actually be removed, or just pushed down?", a: "Both are possible. Removal works when a review violates platform terms: defamatory content, competitor reviews, fake accounts. Otherwise we use strategic suppression вЂ” building enough positive content to push negatives to page three or four." },
  { q: "What happens after the engagement ends вЂ” will the results last?", a: "Quality content on authoritative domains holds position for a long time. We recommend a lighter maintenance package after the initial engagement to monitor new mentions and protect what we have built." },
];

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Veliev & Co",
    "description": "Founded on principle, driven by precision. Veliev & Co transforms digital presence into a controlled asset.",
    "url": "https://velievco.com/about"
  };

  return (
    <>
      <SEO
        title="About Us вЂ” Veliev & Co | Reputation Management Agency"
        description="Founded on principle, driven by precision. Learn how Veliev & Co transforms your digital presence into a controlled, compounding asset."
        canonical="https://velievco.com/about"
        schema={schema}
      />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6 bg-primary-foreground font-semibold">About Us</p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl leading-tight text-primary-foreground font-semibold">
              A Legacy of
              <br />
              <span className="text-primary-foreground">Discreet Service</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div>
                <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6">Our Story</p>
                <h2 className="font-cormorant text-3xl md:text-4xl font-light text-foreground mb-8">Founded on Principle. Driven by Precision.</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>I founded Veliev & Co after observing a recurring structural weakness in high-value businesses: companies invest heavily in growth, operations and legal protection yet treat reputation as an afterthought. In competitive industries, that gap becomes a liability. A single unmanaged search result, an outdated profile, a fragmented review ecosystem вЂ” these are not marketing issues. They are risk exposures. We built a structured framework that transforms digital presence into a controlled asset. Not through noise. Not through PR theatrics. Through architecture, measurement and disciplined execution.</p>
                  <p>Because in business, trust compounds or deteriorates. There is no neutral state. So the only question that matters: Is your reputation compounding or eroding while you focus elsewhere?</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border">
                  <img src={ceoPhoto} alt="CEO of Veliev & Co" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-primary/5 border border-primary/10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-12" />
            <blockquote className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-tight italic mb-8 text-primary-foreground bg-inherit border-primary-foreground border-dashed border shadow-md">
              "Control the narrative before it controls you."
            </blockquote>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary-foreground font-bold bg-inherit">KAMIL VELIEV вЂ” FOUNDING PRINCIPLE</p>
            <div className="w-16 h-[1px] bg-primary mx-auto mt-12" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">Our Expertise</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">Why Clients Choose Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Confidentiality First", desc: "Every engagement is protected by strict NDA protocols. Your strategy, your data, your identity вЂ” all safeguarded with institutional-grade security." },
              { title: "Senior-Led Teams", desc: "No juniors managing your account. Every client works directly with partners who have decades of combined experience in reputation and strategic communications." },
              { title: "Measurable Outcomes", desc: "We set clear KPIs, track progress rigorously, and report transparently. If it cannot be measured, we do not promise it." },
              { title: "Global Perspective", desc: "With clients across Australia, Europe, USA and UAE, we understand the nuances of reputation across cultures, jurisdictions, and markets." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-background rounded-3xl p-8 border border-border">
                  <h3 className="font-playfair text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
              <h2 className="font-cormorant text-4xl md:text-5xl text-primary-foreground font-medium">Common Questions</h2>
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

export default About;

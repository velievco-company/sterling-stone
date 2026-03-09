import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Target, ArrowRight, Award, Star, MessageSquareQuote, Search, BarChart3, Megaphone, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const darkCard = { backgroundColor: "rgba(11, 29, 45, 0.85)" };

const Index = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  const questions = [
    { q: "How often do you monitor your online reviews?", options: ["Never", "Rarely", "Monthly", "Weekly"] },
    { q: "Do you have a strategy for responding to negative reviews?", options: ["No strategy", "Sometimes respond", "Template responses", "Professional strategy"] },
    { q: "How visible is your brand on the first page of Google?", options: ["Not visible", "1-2 results", "3-5 results", "Dominant presence"] },
    { q: "Do you actively manage your social media presence?", options: ["No social media", "Rarely post", "Regular posting", "Full strategy"] },
    { q: "Have you experienced a reputation crisis in the last year?", options: ["Major crisis", "Minor issues", "Small complaints", "No issues"] },
  ];

  const getScore = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = questions.length * 3;
    return Math.round((total / max) * 100);
  };

  const getVerdict = (score: number) => {
    if (score < 30) return { label: "Critical", color: "text-red-400", desc: "Your online reputation needs immediate professional attention." };
    if (score < 60) return { label: "At Risk", color: "text-yellow-400", desc: "There are significant gaps that could harm your business." };
    if (score < 80) return { label: "Moderate", color: "text-blue-400", desc: "Good foundation, but room for strategic improvement." };
    return { label: "Strong", color: "text-green-400", desc: "Well managed, but continuous optimization is recommended." };
  };

  const pillars = [
    { icon: Shield, title: "Absolute Discretion", desc: "Your reputation is handled with the confidentiality and care it deserves. Every strategy is tailored, every detail protected." },
    { icon: Target, title: "Precision Strategy", desc: "Data-driven approaches refined over years of experience. We don't guess — we engineer outcomes with surgical accuracy." },
    { icon: Award, title: "Proven Excellence", desc: "A track record of transformative results for clients who accept nothing less than exceptional performance." },
  ];

  const steps = [
    { icon: Search, step: "01", title: "Audit", desc: "Deep analysis of your current online presence, reviews, search results, and digital footprint." },
    { icon: BarChart3, step: "02", title: "Strategy", desc: "Custom roadmap tailored to your goals — reputation repair, growth, or proactive protection." },
    { icon: Megaphone, step: "03", title: "Execution", desc: "Implementation of SEO, content, PR, review management, and paid campaigns." },
    { icon: Users, step: "04", title: "Results", desc: "Transparent reporting with measurable KPIs. Continuous optimization for sustained growth." },
  ];

  const testimonials = [
    { quote: "Within 3 months, the negative press that plagued our firm for years was buried. New clients started flowing in again. The ROI was extraordinary.", role: "Managing Partner, Law Firm", stars: 5 },
    { quote: "They handled a crisis situation with absolute discretion. Our brand came out stronger than before. I cannot recommend them highly enough.", role: "CEO, Real Estate Group", stars: 5 },
    { quote: "Our Google rating went from 2.8 to 4.7 in under 6 months. The strategy was methodical and the results speak for themselves.", role: "Founder, Medical Practice", stars: 5 },
  ];

  const stats = [
    { value: "4", label: "Continents", sub: "Australia, Europe,\nUSA & UAE" },
    { value: "3-12", label: "Weeks", sub: "Visible Results" },
    { value: "+40%", label: "Reputation Growth", sub: "Online Presence" },
    { value: "12+", label: "Months", sub: "Long-Term Programs" },
    { value: "15x", label: "ROI", sub: "Achieved for Clients" },
  ];

  const scrollToCalc = () => {
    const el = document.getElementById("reputation-check");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setCalcOpen(true), 600);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] mb-8 font-serif text-xl text-primary-foreground font-bold">VELIEV & CO</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="font-cormorant text-5xl md:text-7xl leading-[1.1] mb-8 lg:text-5xl font-semibold text-center text-primary-foreground">
              Digital Marketing & Reputation Management Agency
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-secondary">
              Strategic reputation management and growth consulting for discerning businesses that demand precision, discretion, and results.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <Button
              onClick={scrollToCalc}
              className="rounded-2xl px-10 py-6 text-base font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quick Reputation Check
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 shadow">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] mb-4 font-semibold bg-primary-foreground text-primary w-full py-2">Our Commitment</p>
              <h2 className="font-cormorant text-4xl md:text-5xl text-primary-foreground font-medium">Built on Three Pillars</h2>
            </div>
          </ScrollReveal>
          <div className="flex md:hidden gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6" style={{ scrollbarWidth: "none" }}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center group shadow px-5 py-8 bg-primary-foreground rounded-xl opacity-85 flex-shrink-0 w-[80vw] snap-start">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-playfair text-xl text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 150}>
                <div className="text-center group shadow border-primary-foreground px-[5px] py-[10px] bg-primary-foreground rounded-xl opacity-85">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8 group-hover:bg-primary/20 transition-colors duration-500">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-[5px]">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium bg-primary-foreground w-full py-2">OUR PROCESS</p>
              <h2 className="font-cormorant text-4xl md:text-5xl text-primary-foreground font-medium">How We Work</h2>
            </div>
          </ScrollReveal>
          <div className="flex md:hidden gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6" style={{ scrollbarWidth: "none" }}>
            {steps.map((item) => (
              <div key={item.step} className="relative text-center group bg-primary-foreground py-6 px-6 shadow-md rounded-sm opacity-90 flex-shrink-0 w-[75vw] snap-start flex flex-col items-center">
                <div className="text-5xl font-cormorant font-light text-primary/20 mb-4">{item.step}</div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-playfair text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="relative text-center group bg-primary-foreground py-[5px] px-[10px] shadow-md rounded-sm opacity-90">
                  <div className="text-5xl font-cormorant font-light text-primary/20 mb-4">{item.step}</div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reputation Calculator */}
      <section id="reputation-check" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="border border-white/10 rounded-3xl overflow-hidden" style={darkCard}>
              <button
                onClick={() => { setCalcOpen(!calcOpen); setAnswers({}); setShowResult(false); }}
                className="w-full flex items-center justify-between px-8 py-7 text-left"
              >
                <div>
                  <p className="font-playfair text-xs uppercase tracking-[0.3em] text-primary mb-1">Free Assessment</p>
                  <h2 className="font-cormorant text-2xl md:text-3xl text-white font-medium">Reputation Health Check</h2>
                  <p className="text-white/50 text-sm mt-1">5 quick questions — instant result</p>
                </div>
                <ChevronDown className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${calcOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${calcOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-8 pb-8">
                  {!showResult ? (
                    <div className="space-y-6">
                      {questions.map((item, qi) => (
                        <div key={qi}>
                          <p className="font-playfair text-white/80 text-sm mb-3">{qi + 1}. {item.q}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {item.options.map((opt, oi) => (
                              <button
                                key={oi}
                                onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                                className={`text-xs px-3 py-2.5 rounded-xl border transition-all duration-300 ${answers[qi] === oi ? "border-primary bg-primary/10 text-primary" : "border-white/10 text-white/50 hover:border-primary/40"}`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="text-center pt-2">
                        <Button
                          onClick={() => setShowResult(true)}
                          disabled={Object.keys(answers).length < questions.length}
                          className="rounded-2xl px-10 py-5 font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          Get My Score
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-7xl font-cormorant font-light text-primary mb-2">{getScore()}%</div>
                      {(() => {
                        const v = getVerdict(getScore());
                        return (
                          <>
                            <p className={`font-playfair text-2xl ${v.color} mb-3`}>{v.label}</p>
                            <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">{v.desc}</p>
                          </>
                        );
                      })()}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                          <Button className="rounded-2xl px-8 py-5 font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg">
                            Get a Full Audit
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" onClick={() => { setAnswers({}); setShowResult(false); }} className="rounded-2xl px-8 py-5 font-playfair tracking-wider uppercase">
                          Retake
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4 bg-primary-foreground w-full py-2">Client Feedback</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-primary-foreground">What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="flex md:hidden gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6" style={{ scrollbarWidth: "none" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="border border-white/10 rounded-2xl p-6 flex flex-col flex-shrink-0 w-[85vw] snap-start" style={darkCard}>
                <MessageSquareQuote className="h-7 w-7 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} className="h-3 w-3 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-4 flex-grow italic text-sm">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-playfair text-xs text-white/40">— {t.role}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Card className="border-border/50 bg-white/5 backdrop-blur-sm h-full hover:border-primary/30 transition-all duration-500">
                  <CardContent className="p-8 flex flex-col h-full">
                    <MessageSquareQuote className="h-8 w-8 text-primary/30 mb-6" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star key={si} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">&ldquo;{t.quote}&rdquo;</p>
                    <p className="font-playfair text-sm text-foreground/70">— {t.role}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-16 bg-card">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">By The Numbers</p>
              <h2 className="font-cormorant text-4xl md:text-5xl text-primary-foreground font-medium">Results That Speak</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="border border-white/10 rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300" style={darkCard}>
                  <div className="font-cormorant text-3xl md:text-4xl font-light text-primary mb-1">{stat.value}</div>
                  <div className="font-playfair text-xs uppercase tracking-[0.2em] text-white mb-2">{stat.label}</div>
                  <div className="text-white/60 text-xs leading-relaxed whitespace-pre-line">{stat.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-12" />
            <h2 className="font-cormorant text-4xl md:text-5xl mb-8 text-primary-foreground font-semibold">
              Ready to Elevate Your Position?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-normal text-primary-foreground">
              Begin a confidential conversation about how we can protect and enhance what matters most — your reputation.
            </p>
            <Link to="/contact">
              <Button className="rounded-2xl px-10 py-6 text-base font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Begin the Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;

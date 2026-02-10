import { Link } from "react-router-dom";
import { Shield, TrendingUp, Target, Users, ArrowRight, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
const Index = () => {
  return <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-8">VELIEV & CO</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-8">Digital Marketing & Reputation Management
            <br />
              <span className="text-primary"></span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Strategic reputation management and growth consulting for
              discerning businesses that demand precision, discretion, and
              results.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <Link to="/contact">
              <Button className="rounded-2xl px-10 py-6 text-base font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Our Commitment
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                Built on Three Pillars
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[{
            icon: Shield,
            title: "Absolute Discretion",
            desc: "Your reputation is handled with the confidentiality and care it deserves. Every strategy is tailored, every detail protected."
          }, {
            icon: Target,
            title: "Precision Strategy",
            desc: "Data-driven approaches refined over years of experience. We don't guess — we engineer outcomes with surgical accuracy."
          }, {
            icon: Award,
            title: "Proven Excellence",
            desc: "A track record of transformative results for clients who accept nothing less than exceptional performance."
          }].map((pillar, i) => <ScrollReveal key={pillar.title} delay={i * 150}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8 group-hover:bg-primary/20 transition-colors duration-500">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Reputation Management Packages */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Reputation Management
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                Our Packages
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Basic",
                name: "Monitoring & Reviews",
                features: ["Brand mention monitoring", "Review responses (Google, Trustpilot, Yelp)", "Monthly reputation report", "Negative mention alerts"],
                highlight: false,
              },
              {
                tier: "Professional",
                name: "Growth & Visibility",
                features: ["Everything in Basic", "SEO optimisation", "SERM (search reputation management)", "Content marketing (2 articles/month)", "Social media management"],
                highlight: true,
              },
              {
                tier: "Enterprise",
                name: "Full Management",
                features: ["Everything in Professional", "PR & media relations", "Paid advertising (PPC, targeting)", "Crisis management 24/7", "Strategic consulting", "Dedicated account manager"],
                highlight: false,
              },
            ].map((pkg, i) => (
              <ScrollReveal key={pkg.tier} delay={i * 150}>
                <div className={`relative flex flex-col h-full rounded-3xl p-8 lg:p-10 border transition-all duration-500 hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-primary bg-primary/5 shadow-[0_8px_40px_-12px_hsl(30_39%_85%/0.25)]"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_hsl(30_39%_85%/0.15)]"
                }`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-playfair uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  <p className="font-playfair text-xs uppercase tracking-[0.3em] text-primary mb-3">{pkg.tier}</p>
                  <h3 className="font-cormorant text-2xl lg:text-3xl font-light text-foreground mb-6">{pkg.name}</h3>
                  <div className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-auto">
                    <Button
                      className={`w-full rounded-2xl py-5 font-playfair tracking-wider uppercase transition-all duration-300 ${pkg.highlight ? "hover:scale-105 shadow-lg hover:shadow-xl" : ""}`}
                      variant={pkg.highlight ? "default" : "outline"}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">
              Ready to Elevate Your Position?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Begin a confidential conversation about how we can protect and
              enhance what matters most — your reputation.
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
    </>;
};
export default Index;
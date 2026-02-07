import { Link } from "react-router-dom";
import { Shield, TrendingUp, Target, Users, ArrowRight, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-8">
              Ashworth & Sterling
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-8">
              Discreet Excellence.
              <br />
              <span className="text-primary">Measurable Results.</span>
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
            {[
              {
                icon: Shield,
                title: "Absolute Discretion",
                desc: "Your reputation is handled with the confidentiality and care it deserves. Every strategy is tailored, every detail protected.",
              },
              {
                icon: Target,
                title: "Precision Strategy",
                desc: "Data-driven approaches refined over years of experience. We don't guess — we engineer outcomes with surgical accuracy.",
              },
              {
                icon: Award,
                title: "Proven Excellence",
                desc: "A track record of transformative results for clients who accept nothing less than exceptional performance.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 150}>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                What We Do
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                Our Services
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Reputation Management",
                desc: "Comprehensive online reputation protection, monitoring, and enhancement for individuals and organisations.",
              },
              {
                icon: TrendingUp,
                title: "Lead Generation",
                desc: "Sophisticated lead acquisition strategies that deliver qualified prospects through premium channels.",
              },
              {
                icon: Globe,
                title: "Paid Advertising",
                desc: "Strategic media buying and campaign management across premium digital platforms.",
              },
              {
                icon: Users,
                title: "Strategy & Consulting",
                desc: "Executive-level strategic counsel for brands navigating complex reputational landscapes.",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="group bg-card rounded-3xl p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_hsl(30_39%_85%/0.15)] hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button
                  variant="outline"
                  className="rounded-2xl px-8 py-5 font-playfair tracking-wider uppercase border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Results
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                Performance That Speaks
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+340%", label: "Organic Growth" },
              { value: "98%", label: "Client Retention" },
              { value: "£2.4M", label: "Revenue Generated" },
              { value: "150+", label: "Cases Managed" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-cormorant text-4xl md:text-5xl font-light text-primary mb-3">
                    {stat.value}
                  </p>
                  <p className="font-playfair text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-16">
              <Link to="/demo-cases">
                <Button
                  variant="outline"
                  className="rounded-2xl px-8 py-5 font-playfair tracking-wider uppercase border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
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
    </>
  );
};

export default Index;

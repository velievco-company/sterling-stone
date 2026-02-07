import ScrollReveal from "@/components/ScrollReveal";

const milestones = [
  {
    year: "2015",
    title: "Founded in London",
    desc: "Established as a boutique consultancy serving high-net-worth individuals and premium brands.",
  },
  {
    year: "2017",
    title: "European Expansion",
    desc: "Extended operations across major European markets with dedicated teams in key financial centres.",
  },
  {
    year: "2019",
    title: "Digital Innovation",
    desc: "Launched proprietary reputation monitoring and analytics platform for enterprise clients.",
  },
  {
    year: "2021",
    title: "Global Reach",
    desc: "Expanded client base to include Fortune 500 companies and sovereign wealth entities.",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    desc: "Recognised as the leading reputation management consultancy by the Financial Times.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6">
              About Us
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
              A Legacy of
              <br />
              <span className="text-primary">Discreet Service</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div>
                <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6">
                  Our Story
                </p>
                <h2 className="font-cormorant text-3xl md:text-4xl font-light text-foreground mb-8">
                  Founded on Principle. Driven by Precision.
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Ashworth & Sterling was established in 2015 by a team of
                    former strategic advisors from the worlds of private banking,
                    law, and corporate communications. Recognising a gap in the
                    market for truly discreet, results-oriented reputation
                    management, we set out to build a consultancy that operates
                    with the same rigour and confidentiality expected of a
                    private bank.
                  </p>
                  <p>
                    Today, we serve a select portfolio of clients — from
                    prominent individuals and family offices to multinational
                    corporations — each of whom demands excellence without
                    compromise. Our work is never loud, but always effective.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-secondary to-background border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-cormorant text-7xl font-light text-primary mb-2">
                        10+
                      </p>
                      <p className="font-playfair text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        Years of Excellence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-primary/5 border border-primary/10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-12" />
            <blockquote className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight italic mb-8">
              "In the realm of reputation, discretion is not merely a virtue —
              it is the foundation upon which all trust is built."
            </blockquote>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary">
              — Founding Principle
            </p>
            <div className="w-16 h-[1px] bg-primary mx-auto mt-12" />
          </ScrollReveal>
        </div>
      </section>

      {/* Professional Positioning */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Our Expertise
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">
                Why Clients Choose Us
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Confidentiality First",
                desc: "Every engagement is protected by strict NDA protocols. Your strategy, your data, your identity — all safeguarded with institutional-grade security.",
              },
              {
                title: "Senior-Led Teams",
                desc: "No juniors managing your account. Every client works directly with partners who have decades of combined experience in reputation and strategic communications.",
              },
              {
                title: "Measurable Outcomes",
                desc: "We set clear KPIs, track progress rigorously, and report transparently. If it can't be measured, we don't promise it.",
              },
              {
                title: "Global Perspective",
                desc: "With operations across London, Zürich, and Singapore, we understand the nuances of reputation across cultures, jurisdictions, and markets.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-background rounded-3xl p-8 border border-border">
                  <h3 className="font-playfair text-lg text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Our Journey
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                Milestones
              </h2>
            </div>
          </ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:-ml-[0.5px] top-0 bottom-0 w-[1px] bg-border" />

            {milestones.map((milestone, i) => (
              <ScrollReveal key={milestone.year} delay={i * 100}>
                <div
                  className={`relative flex items-start mb-16 last:mb-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop content */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <p className="font-cormorant text-3xl font-light text-primary mb-2">
                      {milestone.year}
                    </p>
                    <h3 className="font-playfair text-lg text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 md:-ml-2 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Mobile content */}
                  <div className="md:hidden pl-20">
                    <p className="font-cormorant text-3xl font-light text-primary mb-2">
                      {milestone.year}
                    </p>
                    <h3 className="font-playfair text-lg text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

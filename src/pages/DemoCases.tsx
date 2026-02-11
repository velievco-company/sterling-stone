import { ArrowRight, Download, Building2, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const caseStudies = [
  {
    icon: Building2,
    title: "Real Estate Investment Firm",
    location: "Seattle, Washington",
    category: "Reputation Management",
    subtitle: "Restoring trust and business vitality in a crisis",
    challenge:
      "A former partner published a highly damaging article accusing the firm of predatory practices and broken promises. It went viral — 100+ LinkedIn likes, Reddit reposts, local blog mentions. Within one week, business enquiries plummeted by 68%. Three current investors requested to withdraw.",
    approach: [
      "Identified and removed 2 of 5 negative top-10 mentions via legal and platform ToS violations",
      "Created 4 positive articles — success stories, ROI reports, industry recognition",
      "Proactively secured 8 new positive Google reviews from satisfied investors",
      "Implemented 24/7 monitoring with rapid-response protocol",
    ],
    results: [
      { label: "Negative Results (Top 10)", before: "50%", after: "10%" },
      { label: "Google Rating", before: "3.4★", after: "4.1★" },
      { label: "Investor Enquiries", before: "8/mo", after: "22/mo" },
      { label: "Recovery Rate", before: "—", after: "88%" },
    ],
    timeline: "4 months",
    pdfUrl: "/cases/Case-Study-Real-Estate-Investment-Firm.pdf",
  },
  {
    icon: Scale,
    title: "Personal Injury Law Firm",
    location: "Tampa, Florida",
    category: "Reputation Recovery",
    subtitle: "From a single negative article to first-page dominance",
    challenge:
      "A successful firm with 15+ years of reputation saw conversion rates drop from 65% to 38%. The cause: a single negative article from years ago dominated Google search results, overshadowing the partner's expertise. 40% of qualified leads were lost — representing up to $1.5M in annual revenue at risk.",
    approach: [
      "Strategic content displacement — filled Google's first page with authoritative positive content",
      "Published expert articles on legal platforms, secured Tampa Bay Business Journal interview",
      "Optimised LinkedIn, Avvo, Martindale-Hubbell, and Google Business profiles",
      "Built a reputation shield with continuous monitoring and ready-to-publish content library",
    ],
    results: [
      { label: "Negative Article Position", before: "#3", after: "Page 2" },
      { label: "Conversion Rate", before: "38%", after: "65%+" },
      { label: "Avvo Reviews", before: "0", after: "15+" },
      { label: "ROI (First Year)", before: "—", after: "15×" },
    ],
    timeline: "12 weeks",
    pdfUrl: "/cases/Case-Study-Law-Firm-Tampa.pdf",
  },
];

const DemoCases = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6">
              Case Studies
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
              Results That
              <br />
              <span className="text-primary">Speak Volumes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
              Real outcomes from real engagements. Names and details protected
              under NDA — the results speak for themselves.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 150}>
              <div className="bg-card rounded-3xl p-10 lg:p-14 border border-border">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <cs.icon className="h-5 w-5 text-primary" />
                      <span className="text-xs font-playfair uppercase tracking-[0.2em] text-primary">
                        {cs.category}
                      </span>
                    </div>
                    <h3 className="font-cormorant text-3xl lg:text-4xl font-light text-foreground">
                      {cs.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {cs.location} · {cs.timeline}
                    </p>
                  </div>
                  <a href={cs.pdfUrl} download>
                    <Button
                      variant="outline"
                      className="rounded-2xl border-border hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Case
                    </Button>
                  </a>
                </div>

                {/* Subtitle */}
                <p className="font-cormorant text-xl text-primary/80 italic mb-10">
                  "{cs.subtitle}"
                </p>

                {/* Challenge & Approach */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                  <div>
                    <p className="font-playfair text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      The Challenge
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-playfair text-xs uppercase tracking-[0.2em] text-primary mb-4">
                      Our Approach
                    </p>
                    <ul className="space-y-3">
                      {cs.approach.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-foreground/90 leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 text-xs">●</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.results.map((m) => (
                    <div
                      key={m.label}
                      className="bg-background rounded-2xl p-6 text-center"
                    >
                      <p className="font-playfair text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                        {m.label}
                      </p>
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-muted-foreground line-through text-sm">
                          {m.before}
                        </p>
                        <ArrowRight className="h-3 w-3 text-primary rotate-90" />
                        <p className="font-cormorant text-2xl text-primary">
                          {m.after}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">
              Ready for Similar Results?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Every successful engagement begins with a confidential
              conversation. Let us understand your challenges and demonstrate
              what's possible.
            </p>
            <Link to="/contact">
              <Button className="rounded-2xl px-10 py-6 text-base font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default DemoCases;

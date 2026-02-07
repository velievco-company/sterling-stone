import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const trafficData = [
  { month: "Jan", before: 1200, after: 1200 },
  { month: "Feb", before: 1300, after: 1800 },
  { month: "Mar", before: 1100, after: 2400 },
  { month: "Apr", before: 1400, after: 3200 },
  { month: "May", before: 1200, after: 4100 },
  { month: "Jun", before: 1350, after: 5280 },
];

const leadsData = [
  { month: "Jan", leads: 12 },
  { month: "Feb", leads: 28 },
  { month: "Mar", leads: 45 },
  { month: "Apr", leads: 67 },
  { month: "May", leads: 89 },
  { month: "Jun", leads: 124 },
];

const caseStudies = [
  {
    title: "Financial Services Firm",
    category: "Reputation Management",
    challenge:
      "Negative press coverage impacting client acquisition and investor confidence across European markets.",
    result:
      "Restored positive sentiment within 90 days. New client enquiries increased by 280%.",
    metrics: [
      { label: "Sentiment Score", before: "2.1/5", after: "4.7/5" },
      { label: "Negative Results (Page 1)", before: "7", after: "0" },
      { label: "Client Enquiries", before: "12/mo", after: "46/mo" },
    ],
  },
  {
    title: "Private Equity Partner",
    category: "Personal Reputation",
    challenge:
      "Outdated and unflattering search results affecting deal flow and partnership opportunities.",
    result:
      "Complete digital profile transformation. Featured in top-tier financial publications.",
    metrics: [
      { label: "Search Sentiment", before: "Negative", after: "Positive" },
      { label: "Media Mentions", before: "3", after: "27" },
      { label: "Deal Pipeline", before: "£4M", after: "£18M" },
    ],
  },
  {
    title: "Luxury Hospitality Group",
    category: "Lead Generation & Advertising",
    challenge:
      "Declining bookings and low digital presence in an increasingly competitive luxury travel market.",
    result:
      "340% increase in organic traffic. Direct bookings surpassed OTA referrals for the first time.",
    metrics: [
      { label: "Organic Traffic", before: "1.2K/mo", after: "5.3K/mo" },
      { label: "Direct Bookings", before: "18%", after: "62%" },
      { label: "Revenue Growth", before: "Flat", after: "+£1.2M" },
    ],
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
              Demo Cases
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
              Results That
              <br />
              <span className="text-primary">Speak Volumes</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 150}>
              <div className="bg-card rounded-3xl p-10 lg:p-14 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-playfair uppercase tracking-[0.2em] text-primary">
                    {cs.category}
                  </span>
                </div>
                <h3 className="font-cormorant text-3xl font-light text-foreground mb-8">
                  {cs.title}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                  <div>
                    <p className="font-playfair text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Challenge
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-playfair text-xs uppercase tracking-[0.2em] text-primary mb-3">
                      Result
                    </p>
                    <p className="text-foreground leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-background rounded-2xl p-6 text-center"
                    >
                      <p className="font-playfair text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                        {m.label}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <p className="text-muted-foreground line-through text-sm">
                          {m.before}
                        </p>
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
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

      {/* Charts */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Growth Metrics
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
                Traffic & Leads Performance
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-background rounded-3xl p-8 border border-border">
                <h3 className="font-playfair text-lg text-foreground mb-8">
                  Organic Traffic Growth
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={trafficData}>
                    <defs>
                      <linearGradient
                        id="colorAfter"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#E7D8C9"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#E7D8C9"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a52" />
                    <XAxis dataKey="month" stroke="#5a7a94" fontSize={12} />
                    <YAxis stroke="#5a7a94" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#13283F",
                        border: "1px solid #1e3a52",
                        borderRadius: "12px",
                        color: "#F5F6F7",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="before"
                      stroke="#5a7a94"
                      strokeWidth={2}
                      fill="transparent"
                      name="Before"
                    />
                    <Area
                      type="monotone"
                      dataKey="after"
                      stroke="#E7D8C9"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorAfter)"
                      name="After"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-background rounded-3xl p-8 border border-border">
                <h3 className="font-playfair text-lg text-foreground mb-8">
                  Monthly Qualified Leads
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={leadsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3a52" />
                    <XAxis dataKey="month" stroke="#5a7a94" fontSize={12} />
                    <YAxis stroke="#5a7a94" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#13283F",
                        border: "1px solid #1e3a52",
                        borderRadius: "12px",
                        color: "#F5F6F7",
                      }}
                    />
                    <Bar
                      dataKey="leads"
                      fill="#E7D8C9"
                      radius={[8, 8, 0, 0]}
                      name="Leads"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollReveal>
          </div>
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

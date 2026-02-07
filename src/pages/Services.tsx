import { Shield, TrendingUp, Globe, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "We deploy sophisticated, multi-channel lead acquisition strategies that deliver qualified prospects through premium channels. Our approach combines advanced targeting with elegant execution.",
    features: [
      "Account-Based Marketing",
      "Premium Content Funnels",
      "Strategic Partnerships",
      "Executive Outreach Programs",
    ],
  },
  {
    icon: Shield,
    title: "Reputation Management",
    desc: "Comprehensive monitoring, protection, and enhancement of your online presence. We ensure your digital footprint reflects the excellence of your real-world standing.",
    features: [
      "24/7 Reputation Monitoring",
      "Crisis Management",
      "Review Strategy",
      "Content Suppression",
    ],
  },
  {
    icon: Globe,
    title: "Paid Advertising",
    desc: "Strategic media buying and campaign management across premium digital platforms. Every pound invested is optimised for maximum return and brand alignment.",
    features: [
      "Premium Platform Management",
      "Programmatic Buying",
      "Performance Analytics",
      "Brand-Safe Environments",
    ],
  },
  {
    icon: Users,
    title: "Strategy & Consulting",
    desc: "Executive-level strategic counsel for organisations and individuals navigating complex reputational and competitive landscapes. We provide the clarity needed for decisive action.",
    features: [
      "Board-Level Advisory",
      "Competitive Analysis",
      "Market Positioning",
      "Risk Assessment",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6">
              Our Services
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
              Tailored Solutions for
              <br />
              <span className="text-primary">Exceptional Clients</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="group bg-card rounded-3xl p-10 lg:p-14 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_40px_-12px_hsl(30_39%_85%/0.15)]">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
                    <div>
                      <div className="flex items-center gap-5 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="font-playfair text-2xl text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                        {service.desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((f) => (
                          <p
                            key={f}
                            className="text-sm text-muted-foreground flex items-center gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {f}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:flex items-center">
                      <div className="w-[1px] h-32 bg-border mr-10" />
                      <div className="text-center">
                        <p className="font-cormorant text-5xl font-light text-primary/40">
                          0{i + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">
              Require a Bespoke Solution?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Each client engagement is unique. Contact us to discuss how we can
              tailor our services to your specific requirements.
            </p>
            <Link to="/contact">
              <Button className="rounded-2xl px-10 py-6 text-base font-playfair tracking-wider uppercase hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Services;

import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const articles = [
  {
    date: "January 2024",
    title:
      "The Art of Digital Discretion: Managing Reputation in an Age of Transparency",
    excerpt:
      "In an era where information travels at the speed of light, the most valuable currency for high-net-worth individuals and premium brands is controlled visibility. Here we explore the paradox of transparency and discretion.",
    readTime: "8 min read",
  },
  {
    date: "December 2023",
    title: "Why Traditional PR Fails High-Net-Worth Individuals",
    excerpt:
      "The playbook that works for consumer brands is fundamentally unsuited to individuals whose reputation requires protection rather than promotion. A new approach is required.",
    readTime: "6 min read",
  },
  {
    date: "November 2023",
    title: "The Hidden Cost of Neglected Search Results",
    excerpt:
      "For every day that negative or outdated search results remain unchallenged, quantifiable damage accumulates across deal flow, partnerships, and personal brand equity.",
    readTime: "5 min read",
  },
  {
    date: "October 2023",
    title:
      "Building Antifragile Reputations: Lessons from Private Banking",
    excerpt:
      "The world's most enduring private banks have maintained impeccable reputations for centuries. What can modern businesses and individuals learn from their approach?",
    readTime: "10 min read",
  },
  {
    date: "September 2023",
    title:
      "Strategic Silence: When Not Speaking is the Most Powerful Statement",
    excerpt:
      "In crisis communications, the instinct to respond immediately is often counterproductive. We examine when strategic restraint outperforms rapid reaction.",
    readTime: "7 min read",
  },
  {
    date: "August 2023",
    title: "The New Rules of Executive Visibility",
    excerpt:
      "LinkedIn, thought leadership, and strategic media placements have replaced the golf course as the primary arena for executive relationship building.",
    readTime: "6 min read",
  },
];

const CeoInsights = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-primary mb-6">
              CEO Insights
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
              Thought
              <br />
              <span className="text-primary">Leadership</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
              Perspectives on reputation, strategy, and the evolving landscape
              of digital presence from our leadership team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div>
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 80}>
                <article className="group py-12 border-b border-border last:border-0 cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-playfair uppercase tracking-[0.2em] text-muted-foreground">
                          {article.date}
                        </span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime}
                        </span>
                      </div>
                      <h2 className="font-cormorant text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-300 mb-4 leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-center">
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CeoInsights;

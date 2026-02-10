import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import articleReputationLaw from "@/assets/article-reputation-law.jpg";
import articleBadReview from "@/assets/article-bad-review.jpg";
import articleDiscipline from "@/assets/article-discipline.jpg";
import articleNamedFamily from "@/assets/article-named-family.jpg";

const articles = [
  {
    date: "January 2026",
    title: "Why the World's Best Companies Are Named After People (And Why I Named Mine After My Family)",
    excerpt:
      "Walk down any major financial district. Look at the agencies behind the biggest deals, the most trusted advisory. You'll see a pattern — McKinsey, Goldman Sachs, Morgan Stanley. Personal names carry weight, trust, and legacy.",
    readTime: "5 min read",
    image: articleNamedFamily,
    url: "https://medium.com/@velievco/why-the-worlds-best-agencies-are-named-after-people-and-why-i-named-mine-after-my-family-f897b13cfbec",
  },
  {
    date: "December 2025",
    title: "How Discipline, Reputation Work, and One Simple Spreadsheet Built My International Agency",
    excerpt:
      "When people imagine someone starting a digital agency, they picture a guy in a glass-walled office. My reality? A tiny room, an empty Google Sheet called 'VELIEV & CO — List of leads', and a stubborn belief that discipline can turn anyone into something.",
    readTime: "3 min read",
    image: articleDiscipline,
    url: "https://medium.com/@velievco/how-discipline-reputation-work-and-one-simple-spreadsheet-built-my-international-agency-2d304da9406d",
  },
  {
    date: "November 2025",
    title: "How One Bad Review Can Cost You Clients and Money",
    excerpt:
      "Imagine this: you spend months building your business — launching websites, running ads, hiring the best talent — only for one client to leave a bad review that wipes out all your efforts. In today's world, online reputation is everything.",
    readTime: "4 min read",
    image: articleBadReview,
    url: "https://medium.com/@velievco/how-one-bad-review-can-cost-you-clients-and-money-797a812e040c",
  },
  {
    date: "November 2025",
    title: "Why Reputation Is the Real Marketing for Law Firms",
    excerpt:
      "Most law firms still think marketing means posting templated social media content or buying ads no one clicks. But in 2025, the real marketing is not your ads — it's your reputation, and if you don't control it, it's controlling you.",
    readTime: "4 min read",
    image: articleReputationLaw,
    url: "https://medium.com/@velievco/why-reputation-is-the-real-marketing-for-law-firms-19a69e1d5671",
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
              of digital presence from our CEO, Camile Veliev.
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
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <article className="group py-12 border-b border-border last:border-0 cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                      <div className="flex-shrink-0 w-full md:w-48 lg:w-56 overflow-hidden rounded-2xl">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-40 md:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
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
                        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-foreground group-hover:text-brown transition-colors duration-300 mb-4 leading-snug">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="flex-shrink-0 self-center hidden md:block">
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-brown group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </article>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CeoInsights;

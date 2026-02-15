import ScrollReveal from "@/components/ScrollReveal";

const privacySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Veliev & Co ("we", "our", "us") is committed to protecting the privacy and personal data of our clients, website visitors, and third parties whose data we may process in the course of our reputation management services.',
      "This Privacy Policy explains how we collect, use, store, and protect personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and other applicable data protection legislation.",
    ],
  },
  {
    title: "2. Data Controller",
    paragraphs: [
      "Veliev & Co acts as a Data Controller in respect of the personal data we collect directly from our clients and website visitors. In the course of providing reputation management services, we may also act as a Data Processor on behalf of our clients.",
    ],
  },
  {
    title: "3. Data We Collect",
    paragraphs: [
      "We may collect and process the following categories of personal data: contact information (name, email address, phone number, postal address), professional information (job title, company name, industry), communication records (correspondence, meeting notes, service-related communications), website usage data (IP addresses, browser information, pages visited, cookies), and publicly available information relevant to our reputation management services.",
      "In the context of our reputation management services, we may also process publicly available information about third parties, including online reviews, social media posts, news articles, and other publicly accessible content. This processing is carried out on the legal basis of legitimate interest.",
    ],
  },
  {
    title: "4. How We Use Your Data",
    paragraphs: [
      "We process personal data for the following purposes: to provide our reputation management, lead generation, paid advertising, and consulting services; to respond to enquiries and communicate with clients; to monitor and manage online reputation on behalf of clients; to comply with legal and regulatory obligations; and to improve our services and website functionality.",
    ],
  },
  {
    title: "5. Legal Basis for Processing",
    paragraphs: [
      "We process personal data on the following legal bases: contractual necessity (to fulfil our service agreements), legitimate interest (for reputation monitoring and management activities), consent (where explicitly provided, such as for marketing communications), and legal obligation (to comply with applicable laws and regulations).",
      "Regarding reputation management activities involving third-party data, we rely on the legitimate interest basis, having conducted appropriate balancing tests to ensure that our processing does not override the fundamental rights and freedoms of data subjects.",
    ],
  },
  {
    title: "6. Data Sharing & Third Parties",
    paragraphs: [
      "We may share personal data with trusted third-party service providers who assist us in delivering our services, including technology platforms, analytics providers, and professional advisors. All third-party processors are contractually bound to protect personal data and process it only in accordance with our instructions.",
      "We do not sell personal data to third parties. Data may be disclosed where required by law, regulation, or court order.",
    ],
  },
  {
    title: "7. Reputation Management — Special Considerations",
    paragraphs: [
      "As a reputation management agency, we handle sensitive reputational data with the highest level of care. This includes monitoring publicly available information, managing online reviews and search results, producing and distributing positive content, and suppressing or addressing harmful or inaccurate content through lawful means.",
      "All reputation management activities are conducted within the bounds of applicable law. We do not engage in unlawful content removal, fabrication of reviews, or any activity that contravenes platform terms of service or applicable regulations.",
      "Client identities and the nature of engagements are treated with absolute confidentiality. We operate under strict non-disclosure agreements and implement information barriers to protect client privacy.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Client data is typically retained for the duration of our engagement plus six years thereafter, in line with UK limitation periods. Website analytics data is retained for a maximum of 26 months.",
    ],
  },
  {
    title: "9. Data Security",
    paragraphs: [
      "We implement appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, access controls and role-based permissions, regular security assessments and penetration testing, staff training on data protection and confidentiality, and secure data disposal procedures.",
    ],
  },
  {
    title: "10. Your Rights",
    paragraphs: [
      "Under applicable data protection legislation, you have the right to: access your personal data, rectify inaccurate data, request erasure of your data (right to be forgotten), restrict processing of your data, object to processing, data portability, and lodge a complaint with the Information Commissioner's Office (ICO).",
      "To exercise any of these rights, please contact us at contact@velievco.com. We will respond to all valid requests within one calendar month.",
    ],
  },
  {
    title: "11. Cookies",
    paragraphs: [
      "Our website uses cookies to enhance your browsing experience and to analyse website traffic. Essential cookies are required for the website to function and cannot be disabled. Analytics cookies help us understand how visitors interact with our website. You can manage your cookie preferences through your browser settings.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable legislation. The latest version will always be available on our website. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "13. Contact Information",
    paragraphs: [
      "For any questions regarding this Privacy Policy or our data protection practices, please contact us at contact@velievco.com.",
    ],
  },
];

const Privacy = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="font-playfair text-sm uppercase tracking-[0.3em] text-brown mb-6">
              Legal
            </p>
            <h1 className="font-cormorant text-5xl md:text-6xl font-light text-foreground">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mt-6">
              Last updated: January 2024
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {privacySections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 50}>
                <div>
                  <h2 className="font-playfair text-xl text-brown mb-4">
                    {section.title}
                  </h2>
                  <div className="text-[hsl(209,60%,11%)] text-sm leading-relaxed space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;

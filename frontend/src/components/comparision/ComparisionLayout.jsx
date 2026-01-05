import React from "react";
import SEO from "../../components/SEO";
import Footer from "../../components/Footer";

import SectionWrapper from "../../components/common/SectionWrapper";
import SectionTitle from "../../components/common/SectionTitle";
import FadeInOnScroll from "../../components/common/FadeInOnScroll";

import ComparisonSection from "./ComparisonSection";
import FAQSection from "../faq/FAQSection";

const ComparisionLayout = ({
  seo,
  hero,
  intro,
  comparisons,
  summary,
  faqs,
}) => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <SEO {...seo} />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A6EA1] via-[#7BBE4B] to-[#0A6EA1] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            {hero.title}
          </h1>
          <p className="text-xl max-w-4xl mx-auto opacity-90">
            {hero.description}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <SectionWrapper>
        <SectionTitle title={intro.title} />
        <FadeInOnScroll>
          <p className="max-w-4xl mx-auto text-center text-lg text-gray-700">
            {intro.description}
          </p>
        </FadeInOnScroll>

        <ComparisonSection comparisons={comparisons} />

        {/* SUMMARY */}
        <FadeInOnScroll>
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Summary</h3>
            {summary.map((text, i) => (
              <p className="text-gray-600 text-lg leading-relaxed mb-6" key={i}>{text}</p>
            ))}
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      <Footer />
    </div>
  );
};

export default ComparisionLayout;

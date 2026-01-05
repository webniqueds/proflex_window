import React from "react";

import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionTitle from "@/components/common/SectionTitle";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";
import FAQItem from "@/components/faq/FAQItem";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, Eye, Leaf } from "lucide-react";
import FeatureCard from "@/components/cards/FeatureCard";
import ProfileCard from "@/components/cards/ProfileCard";

/* ================= FEATURES (CONTENT FROM DOCUMENT ONLY) ================= */
const features = [
  {
    icon: Shield,
    title: "Exceptional Strength and Stability",
    description:
      "Contemporary UPVC profiles are constructed with a multi-chamber structure, which allows greater rigidity and increased load-bearing capacity. When they are reinforced by galvanized steel, they provide remarkable strength and durability even in severe conditions of weather.In the case of window manufacturers, it translates to the possibility of designing larger sliding doors and windows without worrying about their bending or warping or losing form over time. In comparison to conventional materials, UPVC is more durable and long-lasting.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Eye,
    title: "Sleek Design and Aesthetic Appeal",
    description:
      "One of the greatest benefits of the UPVC Profiles for Window Fabricators is their sleek, polished, and sophisticated appearance. Their clean, smooth lines are perfect for both traditional and contemporary architectural designs.Fabricators can also take advantage of the wide variety of colour options, as well as wood-grain and laminated textures, as well as glossy or matte alternatives. This versatility allows customising to meet any need, making UPVC the ideal solution for those who want stylish and practical window systems.",
    color: "bg-[#969798]",
  },
  {
    icon: Zap,
    title: "Superior Thermal and Acoustic Insulation",
    description:
      "Efficiency in energy is a top priority for both builders and homeowners. UPVC profiles are a top choice for thermal insulation because of their multi-chamber design. This helps reduce heat transfer and increases the comfort indoors.This allows window manufacturers to provide products that comply with energy-saving standards, which can result in lower electric costs. In addition, UPVC frames significantly minimise the outside noise, making them perfect for homes as well as hospitals, schools, and offices that are in noisy areas.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Leaf,
    title: "Durability That Outperforms Traditional Materials",
    description: `In you compare UPVC with wood or aluminium, UPVC stands out for its long lifespan and low maintenance needs.
        No corrosion or rust
        No termite attacks
        There is no shrinking or warping.
        Weatherproof and fade-resistant
        For window manufacturers, that means fewer complaints from customers and more reliable installation. A properly designed UPVC window system will last between 20 to 40 years, which makes it an investment that is long-lasting and reliable.
`,
    color: "bg-red-500",
  },
  {
    icon: CheckCircle,
    title: "Easy to Fabricate and Install",
    description:
      "Another benefit that comes with UPVC Profiles for Window Fabricators is the ease with which to used. UPVC profiles are able to be cut and welded, and shaped and then installed precisely by using standard fabrication tools.This not only cuts down on manufacturing time but also decreases the cost of manufacturing overall. Fabricators can create flawless joints, clean seals, and durable frames much more quickly than with other materials.",
    color: "bg-indigo-600",
  },
  {
    icon: CheckCircle,
    title: "Weather Resistance for All Climates",
    description:
      "UPVC profiles are specifically designed to endure severe temperatures, intense rains, coastal winds with salty air, and intense sunlight. The UV-resistant properties of their formulation ensure that they will not fade or change color in time.For those who work in humid or coastal regions, UPVC offers a huge advantage over aluminum, which can become oxidized, or wood, which can expand as moisture.",
    color: "bg-indigo-600",
  },
];

/* ================= PROFILE SECTION (DOCUMENT-CONSISTENT) ================= */
const profiles = [
  {
    description: "Customer satisfaction is higher due to the durability",
  },
  {
    description:
      "More efficient insulation, which results in energy-efficient window systems",
  },
  {
    description: "Minimum requirements for maintenance",
  },
  {
    description:
      "Compatible with multiple-point lock systems to provide greater security",
  },
  {
    description: "Installation and production that is cost-effective.",
  },
];

/* ================= FAQ (DOCUMENT ONLY) ================= */
const faqs = [
  {
    question:
      "What are the reasons UPVC profiles are favored by window fabricators?",
    answer:
      "They provide exceptional durability, insulation, simple fabrication, and elegant appearance, making them highly efficient in window manufacturing.",
  },
  {
    question: "Do UPVC profiles have enough strength to support large windows?",
    answer:
      "Definitely. With reinforcement from steel, UPVC profiles can support large windows and sliding systems without bending or sagging.",
  },
  {
    question: "How long will UPVC window frames last?",
    answer:
      "Good UPVC profiles usually last between 25 and 40 years and require little maintenance.",
  },
  {
    question: "Are UPVC profiles appropriate for humid or coastal areas?",
    answer:
      "Yes, absolutely. UPVC is impervious to corrosion, water, and salt destruction, making it ideal for coastal areas.",
  },
  {
    question: "Are UPVC profiles customized in terms of color and texture?",
    answer:
      "They are available in many colors and wood finishes, as well as textures and laminated designs.",
  },
];

const UpvcProfilesForWindowFabricators = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Upgrade Windows with UPVC Profiles for Window Fabricators"
        description="Read how UPVC profiles for window fabricators deliver long-lasting, stylish, energy-efficient windows. A must-read guide for professional window makers."
        url="/upvc-profiles-for-window-fabricators"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "UPVC Profiles for Window Fabricators",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "India",
          },
          url: "https://proflexwindowprofiles.com/",
        }}
      />

      {/* ================= HERO (UNCHANGED DESIGN) ================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A6EA1] via-[#7BBE4B] to-[#0A6EA1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563"
            alt="UPVC Profiles for Window Fabricators"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            UPVC Profiles for Window Fabricators
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto">
            UUPVC profiles for window fabricators offer the perfect blend of
            strength, style, and energy efficiency. Their durability, sleek
            design, and easy fabrication make them ideal for creating
            high-performance windows. Discover how UPVC helps fabricators
            deliver long-lasting, modern, and reliable window systems that meet
            today’s architectural and customer expectations.
          </p>
        </div>
      </section>

      {/* ================= INTRO (DOCUMENT TEXT) ================= */}
      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            The Secret to Stronger, Sleeker Windows
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            In today's highly competitive window manufacturing industry,
            selecting the right materials is crucial to ensure durable
            performance, modern design, and a high level of customer
            satisfaction. In the midst of all available materials, UPVC profiles
            for window fabricators have emerged as the top choice due to their
            unique combination of durability, strength and insulation, as well
            as design adaptability.
            <br />
            <br />
            When you design windows for homes or commercial structures The
            quality of the profile you select will significantly affect the
            performance of the final product. This blog explains the reason UPVC
            profiles are regarded as the reason behind more durable, sleeker,
            slimmer, and efficient windows.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES (UNCHANGED DESIGN) ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why UPVC Profiles Are Transforming the Fabrication Industry"
          className="text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {features.map((f, i) => (
            <FadeInOnScroll key={i} delay={i * 150}>
              <FeatureCard
                {...f}
                className="bg-white text-gray-800 shadow-xl p-6 rounded-lg w-full h-full"
              />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ================= PROFILE GRID ================= */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Why Fabricators Prefer UPVC Over Other Materials" />

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {profiles.map((p, i) => (
            <FadeInOnScroll
              key={i}
              animation={i % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={i * 200}
            >
              <ProfileCard
                {...p}
                className="p-6 border-l-4 border-blue-600 shadow-md hover:shadow-xl transition-shadow"
              />
            </FadeInOnScroll>
          ))}
        </div>
        <FadeInOnScroll delay={600}>
          <blockquote className="mt-12 max-w-3xl mx-auto p-4 border-l-8 border-blue-600 bg-blue-50 text-gray-700 italic text-lg rounded-lg">
            In general, UPVC profiles for window fabricators offer the perfect
            balance between strength, performance, and aesthetic appeal, making
            them the best option for contemporary architectural requirements.
          </blockquote>
        </FadeInOnScroll>

        {/* SUMMARY */}
        <FadeInOnScroll>
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <SectionTitle title="Summary" />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The increasing use of UPVC Profiles for Window Fabricators shows
              how crucial they are for creating more durable and sleeker as well
              as more energy-efficient window solutions. Their thermal
              efficiency, durability, and contemporary aesthetics make them an
              ideal option for fabricators who want to offer premium-quality
              solutions. If you're looking for premium-quality and
              precision-engineered UPVC profiles, look into the range of premium
              products that is offered by Proflex Window Profiles.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FAQ ================= */}
      <SectionWrapper className="bg-white pb-20">
        <SectionTitle title="Frequently Asked Questions" />

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FadeInOnScroll key={i} animation="slideLeft" delay={i * 150}>
              <FAQItem {...faq} index={i} />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default UpvcProfilesForWindowFabricators;

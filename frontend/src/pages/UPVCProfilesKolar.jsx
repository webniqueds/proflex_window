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

// ======================
// FEATURES
// ======================
const features = [
  {
    icon: Zap,
    title: "Superior Thermal Insulation",
    description:
      "One of the major challenges for Kolar is managing extreme temperatures. Constructions can quickly become overheated, and conventional materials take in heat or release it quickly. This is why UPVC Profiles for builders provide a distinct benefit. UPVC frames can resist heat transfer, ensuring that interior spaces stay cooler. This is not just better for comfort but also lowers energy consumption, especially during the long summer months.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Shield,
    title: "High Resistance to UV Rays",
    description:
      "Kolar gets strong sun almost all year. A lot of materials crack, fade or become weaker due to excessive exposure to UV. UPVC profiles are formulated with UV-resistant substances that ensure they remain stable and supple even after decades in the sunlight. They don't change colour, fade or break down, making them the ideal material for the climate.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Excellent Dust Protection",
    description:
      "Dry weather can bring dusty winds that can make interiors filthy. UPVC doors and windows have airtight sealing options that dramatically minimise dust infiltration. For builders and homeowners who are focused on living spaces with low maintenance, UPVC Profiles for Builders provide great value.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Low Maintenance & Long Life",
    description:
      "In contrast to wood, which requires regular polishing, sanding and painting, UPVC does not require any maintenance. A quick wipe of water suffices to keep it in good condition. It is not likely to get corrosive, rust or become a victim of termites, issues that frequently impact conventional construction materials. Builders appreciate this durability that is easy to maintain, particularly for large commercial and residential projects.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Strong, Stable, and Weatherproof",
    description:
      "UPVC profiles are constructed using steel reinforcement on the inside. This gives the best structural strength. They can withstand strong temperatures, winds and prolonged use without sagging or warping. In Kolar's unpredictable weather-related conditions, UPVC Profiles for Builders have unbeatable stability and dependability.",
    color: "bg-green-600",
  },
];

// ======================
// APPLICATIONS
// ======================
const profiles = [
  {
    title: "Residential Buildings",
    description:
      "Perfect for windows or sliding doors as well as ventilation systems.",
  },
  {
    title: "Commercial Complexes",
    description: "Ideal for noise and energy reduction.",
  },
  {
    title: "Villas & Luxury Projects",
    description: "Chosen for elegant design, security, and durability.",
  },
  {
    title: "Renovation Projects",
    description:
      "Great for upgrading older structures by incorporating modern features.",
  },
];

// ======================
// FAQ
// ======================
const faqs = [
  {
    question: " Are UPVC profiles appropriate for Kolar's temperatures?",
    answer:
      "Yes. They're UV-resistant, and they provide great insulation, which makes them the perfect choice for Kolar's extreme temperatures.",
  },
  {
    question: "When do UPVC windows require maintenance?",
    answer: "Very often. UPVC windows need only periodic cleaning using water.",
  },
  {
    question: "Do UPVC profiles reduce noise?",
    answer:
      "Yes. If installed properly and made of high-quality glass, they can greatly reduce the noise from outside.",
  },
  {
    question: " Are UPVC profiles more durable than aluminium?",
    answer:
      "UPVC profiles that have steel reinforcements provide better insulation and stability for a long time when compared to standard aluminium frames.",
  },
  {
    question:
      "Are there any possibilities for UPVC to be used to create contemporary designs for buildings?",
    answer:
      "Absolutely. UPVC is available in many styles and shades, making it suitable for modern design.",
  },
];

// ======================
// PAGE COMPONENT
// ======================
const UPVCProfilesKolar = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Best UPVC Profiles for Builders in Kolar - Climate Ready"
        description="Read why UPVC Profiles for Builders are perfect for Kolar’s hot, dry climate. Long-lasting, low-maintenance, and energy-efficient building solutions."
        url="https://proflexwindowprofiles.com/upvc-profiles-for-builders"
      />

      {/* ================= HERO ================= */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#0A6EA1] via-[#7BBE4B] to-[#0A6EA1] text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 mb-6">
            Climate-Ready Building Solutions
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            UPVC Profiles for Builders in Kolar
          </h1>

          <p className="text-lg sm:text-xl max-w-4xl mx-auto opacity-90">
            Ideal solutions for Kolar’s hot and dry climate—durable,
            energy-efficient, and low-maintenance profiles designed for modern
            residential and commercial construction.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <SectionWrapper className="bg-blue-50/50">
        <FadeInOnScroll>
          <SectionTitle title="Built to Withstand Kolar’s Harsh Climate" />
          <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
            The hot and dry climate of Kolar demands building materials that can
            withstand intense sunlight, dust, and temperature fluctuations. UPVC
            Profiles for Builders offer a durable, economical, and eco-friendly
            alternative to traditional wood and aluminium—making them a
            preferred choice for modern construction.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
       <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why UPVC Profiles Are Perfect for Kolar"
          className="text-white"
        />

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full">
            {features.map((f, i) => (
              <FadeInOnScroll key={i} delay={i * 150}>
                <FeatureCard
                  {...f}
                  className="bg-white text-gray-800 shadow-xl p-6 rounded-lg w-full h-full"
                />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ================= APPLICATIONS ================= */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Applications of UPVC Profiles in Construction" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((p, i) => (
            <FadeInOnScroll key={i} delay={i * 150}>
              <ProfileCard {...p} />
            </FadeInOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* ================= SUSTAINABILITY ================= */}
      <SectionWrapper className="bg-blue-50/50">
        <FadeInOnScroll>
          <SectionTitle title="Supporting Sustainable & Energy-Efficient Buildings" />
          <p className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
            UPVC profiles help reduce energy consumption by minimizing heat
            transfer, lowering carbon footprints, and supporting green building
            practices. Their long life span also reduces waste, making them a
            future-ready choice for builders.
          </p>
        </FadeInOnScroll>

        {/* SUMMARY */}
        <FadeInOnScroll>
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <SectionTitle title="Summary" />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              If you are a builder looking for a durable and energy-efficient
              solution, UPVC Profiles for Builders are a great choice for
              Kolar's humid and dry climate. Their endurance and insulation
              benefits, as well as their low maintenance requirements, are ideal
              for both commercial and residential projects. To ensure the
              highest quality performance and value for money, look into
              choosing reputable and top-quality items made by Proflex Window
              Profiles, one of the most trusted brands when it comes to UPVC
              solutions.
            </p>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FAQ ================= */}
      <SectionWrapper className="bg-white pb-20">
        <SectionTitle title="Frequently Asked Questions (FAQ)" />

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FadeInOnScroll key={i} animation="slideLeft" delay={i * 150}>
              <FAQItem {...faq} index={i} />
            </FadeInOnScroll>
          ))}
        </div>

        {/* <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mt-12 text-gray-700 px-4">
            Follow us on{" "}
            <span className="font-bold text-blue-600">Facebook</span> and{" "}
            <span className="font-bold text-blue-600">Instagram</span> to stay
            updated with our latest uPVC profiles, designs, and offers.
          </p>
        </FadeInOnScroll> */}
      </SectionWrapper>

      

      <Footer />
    </div>
  );
};

export default UPVCProfilesKolar;

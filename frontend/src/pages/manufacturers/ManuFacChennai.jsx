import React from "react";
import SEO from "../../components/SEO";
import Footer from "../../components/Footer";

import SectionWrapper from "../../components/common/SectionWrapper";
import SectionTitle from "../../components/common/SectionTitle";
import FadeInOnScroll from "../../components/common/FadeInOnScroll";

import FeatureCard from "../../components/cards/FeatureCard";
import ProfileCard from "../../components/cards/ProfileCard";
import FAQItem from "../../components/faq/FAQItem";
import { Badge } from "../../components/ui/badge";

import { CheckCircle, Zap, Shield, Eye, Leaf } from "lucide-react";

// ======================
// Data
// ======================
const features = [
  {
    icon: Shield,
    title: "Extraordinary Weather & Salt-Air Resistance",
    description:
      "Designed for coastal conditions. Our profiles are free from corrosion, rust, warping, and fading. This makes them ideal for Chennai's humidity as well as heat.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "High-Temperate Acoustic and Acoustic Insulation",
    description:
      "Using multi-chamber technology ECOVENT's profile ensures the temperature of your home at a comfortable level and reduce the external sound.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Zero Maintenance Requirements",
    description:
      "Unlike metal or wood, uPVC does not need painting or frequent maintenance. Simple cleaning can keep the appearance fresh for decades.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Customizable Shades and Profiling Options",
    description:
      "The profiles are available in a variety of colors, finishes and designs that are suitable for modern interior designs and architecture.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Lead-Free Production and Eco-Friendly Production",
    description:
      "Responsible uPVC profiles manufacturers in Chennai. We follow eco safe manufacturing procedures using non-toxic materials.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Smooth movement, secure sealing and outstanding dust resistance, ideal for urban areas.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Perfect for maximum airflow, solid locking systems and outstanding security.",
  },
  {
    title: "Door Profiles",
    description:
      "Solid and elegant profiles are perfect for the main entrances, balconies, rooms, as well as corporate spaces.",
  },
  {
    title: "Fixed & Combination Profiles",
    description:
      "Great for contemporary elevations Large glass surfaces as well as architectural designs that require the highest stability.",
  },
];

const faqs = [
  {
    question:
      "What is it that makes uPVC profiles perfect to be used in Chennai?",
    answer:
      "uPVC is highly resistant to heat, humidity, and corrosion, which makes it the ideal option for coastal climates such as Chennai.",
  },
  {
    question:
      "Do you have options for customization? Do you offer customization options?",
    answer:
      "Yes, we provide various colors, finishes and sizes that are tailored to your specifications of the project.",
  },
  {
    question: "How long will uPVC profiles last?",
    answer:
      "Top quality uPVC profiles usually last 30-40 years with little upkeep.",
  },
  {
    question: "Do you provide fabricators and builders in Chennai?",
    answer:
      "Yes, absolutely. As the leading uPVC profiles manufacturers in Chennai, We provide regular bulk supplies to architects, builders and fabricators throughout the entire region.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacChennai = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="#1 Best UPVC Profiles Manufacturers in Chennai - ECOVENT"
        description="ECOVENT is a top UPVC profiles manufacturer in Chennai, offering durable, low-maintenance windows and doors that resist heat and moisture. Call now!"
        url="/manufacturers-in-chennai"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Proflex Window Profiles - Chennai",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          url: "https://proflexwindowprofiles.com/manufacturers-in-chennai",
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A6EA1] via-[#7BBE4B] to-[#0A6EA1] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=srgb&fm=jpg"
            alt="Modern Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-base mb-6">
            Chennai’s Trusted uPVC Manufacturer
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Top Durable uPVC Profiles Manufacturers in <span>Chennai</span>
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            We are the top uPVC profiles manufacturers in Chennai, providing
            premium ECOVENT profiles that are engineered to last for years, with
            durability, thermal efficiency, and stunning aesthetics. We offer
            uPVC profiles that are specifically designed to withstand Chennai's
            abrasive coastal climate while providing superior insulation and
            noise reduction as well as structural integrity. Utilising the
            latest manufacturing techniques and a strict quality control system,
            we offer profiles that are designed to elevate commercial and
            residential spaces.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            High-Quality uPVC Profiles{" "}
            <span className="text-blue-700">Built </span>for Chennai's Climate
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            As one of the top uPVC profiles manufacturers in Chennai, we create
            ECOVENT profiles that combine performance, durability, and modern
            design. When you're renovating your house or planning massive
            construction projects, our uPVC profiles are known for their quality
            and reliability.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose ECOVENT uPVC Profiles?"
          className="text-white"
        />

        <div className="w-full">
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
        </div>
      </SectionWrapper>

      {/* ================= PROFILES ================= */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Our Range of uPVC Profiles in Chennai" />

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
            We have a variety of uPVC window and door profiles made by precision and engineered to provide lasting performance.
          </blockquote>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Trusted uPVC Profile Supplier for Homes & Projects in Chennai"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            Our ECOVENT Window Profiles provide homeowners as well as
            architects, developers, and fabricators with top-quality profiles
            that are backed by prompt delivery and professional service. As
            seasoned uPVC profiles manufacturers in Chennai We are aware of the
            challenges of climate change in the region and offer profiles that
            provide long-term value, efficiency, and aesthetics. <br />
            <br />
            If you require a large order for a residential construction or a
            custom-designed profile for commercial projects, we will ensure that
            you have a smooth and easy experience with our supply. We aim to
            offer sturdy and fashionable uPVC profiles that can be used to
            enhance any type of construction.
          </p>
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

export default ManuFacChennai;

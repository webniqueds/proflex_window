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
    title: "Created to Last",
    description:
      "Profiles are strong and resist sunlight, moisture, and daily wear.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Comfortable & Energy Efficient",
    description:
      "Multiple-chamber insulation helps keep rooms cool, reduces noise, and saves energy.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Easy to Maintain",
    description:
      "No painting or polishing needed; simple cleaning keeps them looking new.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "New Styles",
    description:
      "It is available in a variety of colors and shapes that can be matched to any style of building.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Produced using secure materials and responsible manufacturing methods.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Space-saving design and smooth movement with excellent noise and dust protection.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Secure, sturdy, and designed for a clear, fresh view and air.",
  },
  {
    title: "Door Profiles",
    description:
      "Elegant and durable for balconies, main entrances, and offices.",
  },
  {
    title: "Fixed & Combination Profiles",
    description:
      "Perfect for large glass panels, strong support, and modern designs.",
  },
];

const faqs = [
  {
    question: "How long will a uPVC profile last?",
    answer:
      "They will last for a long time and only require a simple cleaning.",
  },
  {
    question: "Can you modify the profile?",
    answer:
      "Yes, we offer a variety of sizes, colors, and styles to meet your preferences.",
  },
  {
    question: "Do you offer your services to builders as well as fabricators?",
    answer: "Yes, we can provide regular and bulk supplies for every project.",
  },
  {
    question: "Are uPVC profiles simple to keep clean?",
    answer: "Yes, they don't require painting. Simply clean them up regularly.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacCoimbatore = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="Durable and Strong UPVC Profiles Manufacturers in Coimbatore"
        description="As a trusted UPVC profiles manufacturers in Coimbatore, ECOVENT offers premium, eco-safe, durable, and energy-efficient windows & doors. Enquire now!"
        url="/manufacturers-in-coimbatore"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Proflex Window Profiles - Coimbatore",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            addressCountry: "India",
          },
          url: "https://proflexwindowprofiles.com/manufacturers-in-coimbatore",
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
            Coimbatore’s Leading uPVC Manufacturer
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Welcome to{" "}
            <span>
              ECOVENT<sup>TM</sup>
            </span>
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            Proflex is among the most renowned uPVC profiles manufacturers in
            Coimbatore. We specialize in durable, stylish, and modern profiles
            for homes, offices, and commercial spaces. Built to handle heat,
            dust, and rain, our profiles keep interiors peaceful, comfortable,
            and contemporary.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Trusted UPVC Profiles{" "}
            <span className="text-blue-700">Manufacturers </span> in Coimbatore
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            We are among the most renowned upvc profiles manufacturers in
            Coimbatore. Our Product Ecovent is stylish, strong, and durable uPVC
            profiles for both homes and offices. Our profiles are made to resist
            temperatures as well as dust, rain, and heat while still keeping
            your space peaceful, as well as comfortable and contemporary.
            <br /> <br />
            We believe in maintaining simplicity and excellence. Every Ecovent
            profile we design is made from environmentally friendly, sustainable
            materials that have undergone rigorous quality inspections. We are
            here to offer you high-quality, long-lasting products, whether
            you're remodelling your office or building a new house.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Smart uPVC Profiles for{" "}
            <span className="text-blue-700">Modern Living</span>
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            We are the trusted name among UPVC profile manufacturers in
            Coimbatore. We offer our Ecovent UPVC profiles that are designed to
            be tough, durable, and visually attractive. We know the local
            climate and create profiles that are solid in rain, heat, and humid
            conditions.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose ECOVENT uPVC Profiles in Coimbatore?"
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
        <SectionTitle title="Wide Range of uPVC Profiles" />
        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            We offer a diverse range of profiles for doors and windows. As a
            reputable uPVC profiles manufacturers in Coimbatore, our ECOVENT
            Profiles are strong, elegant, practical, and stylish.
          </p>
        </FadeInOnScroll>

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
            All our profiles are made from environmentally-friendly, sustainable
            materials, designed for long-lasting performance and low
            maintenance.
          </blockquote>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Reliable Supply for Homes & Businesses"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            <span className="font-bold">Proflex </span>
            offers builders, homeowners, and architects throughout Coimbatore.
            As one of the top uPVC profiles manufacturers in Coimbatore, we
            guarantee timely delivery and top-quality products. <br /> <br />
            We are focused on easy communications, seamless service, and value
            over the long term. Professionals choose{" "}
            <span className="font-bold text-blue-600">ECOVENT</span> profiles
            for projects of all sizes due to our reliability and quality that is
            consistent.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll animation="slideUp">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center px-4">
            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-tools text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">
                Precision Engineering
              </h4>
              <p className="text-sm text-gray-700">
                Advanced machinery ensures accuracy and consistent performance.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-shield-alt text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Premium Durability</h4>
              <p className="text-sm text-gray-700">
                Designed to withstand extreme weather and daily use.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-truck text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Reliable Delivery</h4>
              <p className="text-sm text-gray-700">
                Fast and dependable supply for residential and commercial
                projects.
              </p>
            </div>
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

export default ManuFacCoimbatore;

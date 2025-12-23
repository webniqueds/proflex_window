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
    title: "Durable and Strong",
    description:
      "The uPVC profiles are made to last and withstand the extreme sun, heavy rain, and wear and tear. They're strong and durable, which will ensure that windows and doors last for a long time, without fading or breaking.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "The multi-chamber design keeps your home or office cool all year round. It helps reduce heat during summer, retains warmth in winter, and helps to lower your electric bills.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Low Maintenance",
    description:
      "In contrast to metal or wood, uPVC profiles don't require polishing or painting. A quick wipe is all it takes to keep them looking clean and fresh for a long period of time.",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Stylish and Modern",
    description:
      "We have a broad selection of shapes, colors, and styles. Our designs enhance the appearance of offices and homes by adding a modern and stylish look to each area.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "Each profile is made of lead-free materials and is manufactured using secure, sustainable manufacturing methods. Selecting ECOVENT Profiles means you will receive premium, safe, and eco-friendly products.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "Easy to use and smooth with great noise and dust protection. Perfect for offices and homes.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Secure, sturdy, and specifically designed to allow for the best airflow and clear views of the outdoors.",
  },
  {
    title: "Door Profiles",
    description:
      "Elegant and durable for balconies, main entrances, and offices.",
  },
  {
    title: "Fixed & Combination Profiles",
    description:
      "Ideal for huge glass windows, contemporary facades, and sturdy structural support.",
  },
];

const faqs = [
  {
    question: "How long will uPVC profiles last?",
    answer: "They can last from 30 to 40 years with minimal maintenance.",
  },
  {
    question: "Are there any custom sizes and colors?",
    answer: "Yes, we provide profiles in a variety of sizes and colors.",
  },
  {
    question: "Do you offer your services to builders as well as architects?",
    answer: "Yes, we provide regular supply and bulk quantities.",
  },
  {
    question: "Are maintenance and repair simple?",
    answer: "Yes, just wipe clean; no painting or polishing is needed.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacHyderabad = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="ECOVENT: #1 Best UPVC Profiles Manufacturers in Hyderabad"
        description="As a leading UPVC profiles manufacturers in Hyderabad, ECOVENT delivers stylish, energy-efficient windows, doors & frames for all weather. Contact us now!"
        url="/manufacturers-in-hyderabad"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Proflex Window Profiles - Hyderabad",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "India",
          },
          url: "https://proflexwindowprofiles.com/manufacturers-in-hyderabad",
        }}
      />

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
            Hyderabad’s Leading uPVC Manufacturer
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Welcome to{" "}
            <span>
              ECOVENT<sup>TM</sup>
            </span>
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            specialize in durable, elegant, and modern uPVC profiles for
            offices, homes, and commercial spaces. Built to handle heat, dust,
            and rain, our profiles ensure quiet, comfortable, and stylish
            interiors.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Best uPVC Profiles{" "}
            <span className="text-blue-700">Manufacturers </span>in Hyderabad
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            We are among the top upvc profiles manufacturers in Hyderabad. Our
            ECOVENT Profiles are robust, elegant, durable, and fashionable. Our
            uPVC profiles for doors and windows are ideal for offices, homes,
            and commercial and residential spaces. Our Profiles can handle heat
            as well as dust, rain, and heat while keeping your rooms quiet,
            modern, comfortable, and stylish.
            <br />
            <br />
            Each profile is constructed using environmentally-friendly, safe
            materials and modern technology to guarantee longevity and low
            maintenance.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Premium uPVC Profiles for{" "}
            <span className="text-blue-700">Strength, Style & Comfort</span>
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            We are one of the trusted upvc profiles manufacturers in Hyderabad,
            blending the strength of steel, energy efficiency, and modern
            design. If you're creating a brand new home or renovating your
            office as well as working on a major construction project, our
            ECOVENT's profiles provide durability for a long time, simple
            upkeep, and a sleek appearance.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose Our uPVC Profiles in Hyderabad?"
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

        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-4xl font-black mt-12 text-center text-gray-900 leading-tight">
            Our Commitment
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            Our mission is simple. We offer our uPVC profiles that are durable
            and stylish, enhancing comfort and style. For your office or your
            home, our products ECOVENT are made to look great, function
            efficiently, and need only minimal maintenance.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= PROFILES ================= */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Our uPVC Profile Range in Hyderabad" />

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
            Our profiles are built by using the latest technology to ensure
            consistency, accuracy, and long-term performance.
          </blockquote>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Trusted Supplier for Homes and Businesses in Hyderabad"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            Our ECOVENT Profiles are a reliable partner for homeowners,
            builders, architects, and fabricators across Hyderabad. As top upvc
            profiles manufacturers in Hyderabad, we ensure timely delivery,
            consistent quality, and solutions for projects of any size. <br /> <br />
            We focus on smooth communication, efficient service, and durable
            products. Many professionals have confidence in ECOVENT Profiles to
            complete commercial and residential projects because of our
            reliability and quality.
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

        <div className="space-y-4 max-w-3xl mx-auto mb-5">
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

export default ManuFacHyderabad;

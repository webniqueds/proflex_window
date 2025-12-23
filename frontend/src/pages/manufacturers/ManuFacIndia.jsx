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
    title: "Long-Lasting and Strong",
    description:
      "We offer uPVC profiles that are made to withstand harsh sunlight, as well as heavy rain and regular wear and tear. They are durable and strong for a long time, ensuring doors and windows are sturdy, without fading, cracking, breaking, or warping.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description:
      "The multi-chamber design allows you to maintain the temperature of your office or home. It makes rooms cooler during the summer months and warmer during winter, which reduces energy costs and creates a relaxing space all season.",
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "Easy to Maintain",
    description:
      "As opposed to metal or wood, we as uPVC Profile Manufacturers in India, guarantee that our uPVC profiles need very minimal maintenance. There's no need for polishing, painting, or regular repairs. Simple wipes keep the surfaces clean and new for years",
    color: "bg-[#969798]",
  },
  {
    icon: CheckCircle,
    title: "Stylish Designs",
    description:
      "We have a wide range of shapes, colors, and finishes that complement contemporary building styles. Our patterns enhance the visual design of offices and homes, as well as providing benefits such as the reduction of noise and improved insulation.",
    color: "bg-indigo-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe",
    description:
      "All profiles are created using safe, lead-free materials and environmentally sustainable methods. Our ECOVENT Profiles are a sustainable choice for construction and provide top-quality, durable, and secure uPVC profiles for your project.",
    color: "bg-red-500",
  },
];

const profiles = [
  {
    title: "Sliding Window Profiles",
    description:
      "A smooth operation, a layout that saves space, and the ability to shield against noise and dust.",
  },
  {
    title: "Casement Window Profiles",
    description:
      "Secure, strong, and perfect for air circulation as well as clear views of the outdoors.",
  },
  {
    title: "Door Profiles",
    description:
      "Elegant and durable for balconies, main entrances, and offices.",
  },
  {
    title: "Fixed & Combination Profiles",
    description:
      "Great to use large panels of glass, contemporary facades, and sturdy structural support.",
  },
];

const faqs = [
  {
    question: "How long will uPVC profiles last?",
    answer: "They could last for 30-40 years with little care.",
  },
  {
    question: "Are there custom sizes and colors?",
    answer:
      "Yes, we have profiles in a variety of sizes, as well as colors and finishes.",
  },
  {
    question: "Do you offer your services to builders as well as architects?",
    answer: "Yes, we supply regular and bulk supplies throughout India.",
  },
  {
    question: "Is maintenance simple?",
    answer:
      "Yes, you can just clean it up. No polishing or painting is required.",
  },
];

// ==========================
// Page Component
// ==========================
const ManuFacIndia = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="ECOVENT - India's No.1 UPVC Profiles Manufacturers"
        description="ECOVENT is India’s largest UPVC profiles manufacturers and supplier, offering strong, energy-efficient windows and doors for homes and offices. Call now!"
        url="/manufacturers-in-india"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Proflex Window Profiles - India",
          url: "https://proflexwindowprofiles.com/manufacturers-in-india",
          logo: "https://proflexwindowprofiles.com/static/media/main.b0e923d03afb449528ed.png",
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
            ECOVENT - India's No.1 UPVC Profiles Manufacturers
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Proflex – Premium uPVC Profiles for Homes & Offices
          </h1>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            Proflex creates robust, stylish, and durable uPVC profiles ideal for
            offices, homes, and commercial projects across India. Built to
            withstand heat, rain, and dust while keeping spaces comfortable,
            modern, and energy-efficient.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-6xl font-black mb-6 text-center text-gray-900 leading-tight">
            Leading uPVC Profile Manufacturers{" "}
            <span className="text-blue-700">in India</span>
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            We are among the leading upvc profile manufacturers in India. Our
            ECOVENT Profiles are robust, elegant, durable, and fashionable uPVC
            profiles for doors and windows, ideal for offices, homes, and
            commercial structures. Our profiles are built to resist heat, rain,
            and dust, all while making your space cool, peaceful, and
            contemporary.
            <br />
            <br />
            Each profile is designed with the most advanced equipment and
            sustainable materials that ensure longevity, minimal maintenance,
            and top quality.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      <SectionWrapper className="bg-blue-50/50 pb-16">
        <FadeInOnScroll animation="slideUp">
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-center text-gray-900 leading-tight">
            Premium uPVC Profiles for Homes and Offices
          </h1>

          <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full"></div>

          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            As one of the most trusted uPVC Profile Manufacturers in India we
            focus on makingour ECOVENT profiles that blend durability, energy
            efficiency, and modern style. When you're creating a brand new home
            or renovating your office and working on a huge project, our uPVC
            profiles are durable and provide long-lasting reliability as well as
            a polished, neat appearance.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= FEATURES ================= */}
      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why Choose ECOVENT uPVC Profiles"
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
          <h1 className="text-2xl sm:text-2xl font-black mt-12 mb-0 text-center text-gray-900 leading-tight">
            Our Goal
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            At Proflex, we offer our ECOVENT uPVC profiles that are durable,
            stylish, elegant, and long-lasting while enhancing the aesthetics,
            comfort, and efficiency of any space.
          </p>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= PROFILES ================= */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Our uPVC Profile Range" />

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
            Each profile is manufactured with modern machinery to ensure
            accuracy, consistency, and long-lasting performance.
          </blockquote>
        </FadeInOnScroll>
      </SectionWrapper>

      {/* ================= SUPPLIER SECTION ================= */}
      <SectionWrapper className="py-20">
        <SectionTitle
          title="Trusted Supplier Across India"
          className="text-gray-900"
        />

        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            We are the trusted partner for builders, homeowners, architects, and
            fabricators across India. As one of the top upvc profile
            manufacturers in india we offer prompt delivery, consistent quality,
            and customized solutions for construction projects of all kinds.{" "}
            <br />
            <br />
            Professionals select ECOVENT Profiles for commercial and residential
            projects due to our top-quality products, effective service, and
            reliability over time.
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

export default ManuFacIndia;

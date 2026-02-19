import React from "react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

import SectionWrapper from "@/components/common/SectionWrapper";
import SectionTitle from "@/components/common/SectionTitle";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";

import FeatureCard from "@/components/cards/FeatureCard";
import ProfileCard from "@/components/cards/ProfileCard";
import FAQItem from "@/components/faq/FAQItem";
import { Badge } from "@/components/ui/badge";

import { CheckCircle, Zap, Shield, Eye, Leaf, Coins } from "lucide-react";


const features = [
  {
    icon: Shield,
    title: "They Last a Long Time",
    description:
      "Many windows will be damaged or broken over time. However, it's not the case with ECOVENT. They're made of high-quality materials that aren't damaged by rain or sun. You don't have to worry about repairing or replacing them over the course of many years.",
    color: "bg-[#0A6EA1]",
  },
  {
    icon: Zap,
    title: "They Save Electricity",
    description: `ECOVENT keeps your home at the correct temperature.In summer, the cooling effect helps keep the heat out of your room, keeping it cool. In winter it holds the warmth within. This means that you don't have to run an AC and heater nearly as often, and this makes your electric bill less!`,
    color: "bg-[#7BBE4B]",
  },
  {
    icon: Eye,
    title: "They Look Beautiful",
    description: `There's no need to pick between "strong" and "pretty." Ecovent offers both. No matter if you're looking for sliding doors or traditional windows, they can make your home appear bright, large, and contemporary.`,
    color: "bg-[#969798]",
  },
];

const profiles = [
  {
    title: "Super Quiet",
    description:
      "These windows block out loud sounds of the streets. If there's a lot of noise outside, ECOVENT can make it quiet inside so that you can sleep or work.",
  },
  {
    title: "Easy to clean",
    description:
      "There is no need to paint them, or even use expensive soaps. Simply wipe them clean with an old cloth, and they'll appear brand new!",
  },
  {
    title: "Weatherproof",
    description:
      "It's irrelevant if the weather is hot or pouring down rain outside. The windows will not rust or be consumed by bugs (like termites).",
  },
  {
    title: "Safety and Fire-Proof",
    description:
      "These are made to be extremely strong and therefore, intruders aren't able to gain entry easily. They also aren't able to allow fire to spread easily, keeping your family members safe.",
  },
];

const faqs = [
  {
    question: "Why is ECOVENT superior to regular windows?",
    answer:
      "A regular window may become unstable or break easily. Ecovent remains strong, stylish, and isn't damaged because of bad weather.",
  },
  {
    question: "Is my house secured through ECOVENT?",
    answer:
      "Yes! Ecovent products are tough to break; they won't burn easily, and bugs such as termites won't be able to eat them. Your family is safe in.",
  },
  {
    question: "How will ECOVENT make me more money?",
    answer:
      "The ECOVENT serves as a blanket for your home. It blocks the heat during the summer, and lets warmth inside during winter. This means that you'll require less electricity to run heaters or fans!",
  },
  {
    question: "Will I need to wash ECOVENT often?",
    answer:
      "Absolutely not! There is no need to paint the ECOVENT frames. If they are soiled, you can clean them with soapy water, and they'll appear brand new.",
  },
  {
    question:
      "What is the possibility that ECOVENT manages really severe storms?",
    answer:
      "Definitely. If it's extremely windy or pouring down rain, ECOVENT stays solid and keeps water away from your home.",
  },
  {
    question: "What is ECOVENT good for the environment?",
    answer:
      "Yes! Ecovent is lead-free, and 100 100% recyclable. The choice of Ecovent is an excellent method of being a good friend to the environment.",
  },
];

const products = [
  {
    title: "Windows",
    items: [
      {
        name: "Casement Windows",
        description:
          "These open like a book. They let in lots of fresh air and look very stylish.",
      },
      {
        name: "Sliding Windows",
        description:
          "They slide back and forth. Perfect for saving space and allowing sunlight.",
      },
    ],
  },
  {
    title: "Doors",
    items: [
      {
        name: "Casement Doors",
        description:
          "Sturdy doors that block bugs and dust while making your entrance elegant.",
      },
      {
        name: "Sliding Doors",
        description:
          "Great for large openings. They slide smoothly and expand your space visually.",
      },
    ],
  },
];


const EcoventIndia = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <SEO
        title="ECOVENT uPVC Windows & Doors – Strong, Stylish, Durable"
        description="Upgrade your home with ECOVENT uPVC windows and doors that are durable, secure, and energy efficient. Get a quote today and transform your space."
        url="/ecovent-upvc-windows-doors-india"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Proflex Window Profiles - Bangalore",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "India",
          },
          url: "https://proflexwindowprofiles.com/ecovent-upvc-windows-doors-india",
        }}
      />

      {/* ================= HERO ================= */}
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
            ECOVENT
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
            Strong and Stylish Windows and Doors
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
            Do you need doors and windows that are stunning and last for a long
            time? ECOVENT produces windows and doors made of uPVC that ensure
            your home is secure, peaceful, quiet, and gorgeous. They're designed
            to be modern and are sturdy, but they still look stunning!
          </p>
        </div>
      </section>

      <SectionWrapper className="text-white py-20">
        <SectionTitle
          title="Why ECOVENT is Great for Your Home"
          className="text-white"
        />

        <FadeInOnScroll animation="slideUp">
          <p className="text-xl text-gray-600 max-w-4xl mt-5 mx-auto text-center leading-normal">
            <span className="font-bold text-blue-600">ECOVENT</span>
            is an ideal superhero for your home. It's more than creating a hole
            in your wall. It makes you feel more comfortable and can save you
            money.
          </p>
        </FadeInOnScroll>

        <div className="w-full mt-10">
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

      <SectionWrapper className="bg-white">
        <SectionTitle title="Cool Features You Will Love" />

        <div className="grid md:grid-cols-2  gap-x-12 gap-y-8 max-w-5xl mx-auto">
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
      </SectionWrapper>

      {/* products */}
      <SectionWrapper className="bg-white">
        <SectionTitle title="Different Types of ECOVENT Products" />

        <div className="grid md:grid-cols-1  gap-x-12 gap-y-8 max-w-5xl mx-auto">
          <FadeInOnScroll >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {products.map((product, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg border p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        {product.title}
      </h3>

      <div className="space-y-6">
        {product.items.map((item, i) => (
          <div key={i}>
            <Badge className="mb-2 bg-blue-600">
              {item.name}
            </Badge>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

          </FadeInOnScroll>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20">
        <SectionTitle
          title="Why You Can Trust ECOVENT"
          className="text-gray-900"
        />

        {/* 🔥 Heading Underline Added */}
        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        {/* Cards */}
        <FadeInOnScroll animation="slideUp">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center px-4">
            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-tools text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Made in India</h4>
              <p className="text-sm text-gray-700">
                These are top-quality products that are made by hand, right here
                in India.
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-shield-alt text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">Eco-friendly</h4>
              <p className="text-sm text-gray-700">
                ECOVENT products are "Lead-Free" and recyclable. When we use
                these products instead of wood products, we help save trees!
              </p>
            </div>

            <div className="bg-white shadow-xl p-6 rounded-lg transition-transform hover:scale-[1.02]">
              <i className="fas fa-truck text-4xl mb-3"></i>
              <h4 className="text-xl font-semibold mb-2">
                Tested for Strength
              </h4>
              <p className="text-sm text-gray-700">
                Each window and door is tested in order to be sure that it
                functions perfectly in the most severe conditions.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </SectionWrapper>

      <SectionWrapper className="py-20">
        <SectionTitle
          title="Tested to be Super Strong"
          className="text-gray-900"
        />

        {/* 🔥 Heading Underline Added */}
        <div className="w-24 h-1 bg-[#0A6EA1] mx-auto rounded-full mb-10"></div>

        {/* Intro */}
        <FadeInOnScroll animation="fadeIn">
          <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed mb-12 text-gray-700 px-4">
            The company doesn't simply declare that Ecovent is sturdy; we
            actually demonstrate that it is! Each Ecovent window and doors are
            tested in order to be sure that it functions properly in the midst
            of terrifying severe storms or hot, humid days. If you decide to go
            with ECOVENT, you're selecting an environment that is calm,
            beautiful, safe, and secure for a long time.
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

export default EcoventIndia;

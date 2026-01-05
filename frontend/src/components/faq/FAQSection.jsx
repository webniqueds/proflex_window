import React from 'react'
import SectionWrapper from '../common/SectionWrapper'
import SectionTitle from '../common/SectionTitle'
import FadeInOnScroll from '../common/FadeInOnScroll'
import FAQItem from './FAQItem'

const FAQSection = ({ faqs }) => {
  return (
    <SectionWrapper className="bg-white">
      <SectionTitle title="Frequently Asked Questions" />
      <div className="space-y-5 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FadeInOnScroll key={index} delay={index * 120}>
            <FAQItem {...faq} index={index} />
          </FadeInOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default FAQSection
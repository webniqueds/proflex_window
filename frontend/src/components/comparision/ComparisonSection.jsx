import React from "react";
import FadeInOnScroll from "../common/FadeInOnScroll";
import { Badge } from "../ui/badge";

const ComparisonSection = ({ comparisons }) => {
  return (
    <div className="space-y-14 max-w-6xl mx-auto mt-16">
      {comparisons.map((item, index) => {
        const Icon = item.icon;
        return (
          <FadeInOnScroll key={index} delay={index * 120}>
            <div className="rounded-3xl bg-white shadow-lg border overflow-hidden">
              <div className="flex items-center gap-4 px-8 py-6 bg-gray-50 border-b">
                <div className="p-3 rounded-xl bg-blue-100">
                  <Icon className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="p-8 border-r bg-blue-50">
                  <Badge className="mb-4 bg-blue-600">
                    {item.leftLabel}
                  </Badge>
                  <p className="text-gray-700 leading-loose">
                    {item.leftContent}
                  </p>
                </div>

                <div className="p-8 bg-amber-50">
                  <Badge className="mb-4 bg-amber-600">
                    {item.rightLabel}
                  </Badge>
                  <p className="text-gray-700 leading-loose">
                    {item.rightContent}
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        );
      })}
    </div>
  )
}

export default ComparisonSection
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About AriseFunds
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Who We Are
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AriseFunds is an innovative student finance and workforce transition platform designed to remove barriers to education and employment. We facilitate loans, mobilize capital, ensure student welfare, and coordinate career transition programs for learners across Africa—especially those enrolled in TrainingSol and partner institutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To drive inclusive access to education, provide financial tools that unlock opportunity, and empower students to transition successfully into the global workforce.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage partnerships, capital flows, and data insights to build an ecosystem where students don't just study—they succeed.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/annual01.jpg"
                  alt="AriseFunds Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const partners = [
  {
    name: "Kallmania",
    description: "AriseFunds collaborates with Kallmania, a global job placement and BPO outsourcing provider, to place successful trainees in real job roles. This partnership guarantees that education leads to employment.",
    goals: [
      "Secure Business Process Outsourcing (BPO) assignments",
      "Facilitate global job placements",
      "Create work-integrated learning opportunities"
    ],
    image: "/project01.jpg"
  },
  {
    name: "TrainingSol",
    description: "AriseFunds works closely with TrainingSol to ensure that all funded programs align with current job market needs, especially those demanded by Kallmania and other international employers.",
    goals: [
      "Tailored training curricula",
      "Cohort monitoring",
      "Certification pipelines linked to job-readiness"
    ],
    image: "/project02.jpg"
  }
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategic Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with industry leaders to create opportunities for students across Africa
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{partner.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">Strategic Partner</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Joint Goals:</h4>
                  <ul className="space-y-2">
                    {partner.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
import Image from "next/image";

const partners = [
  {
    name: "Kallmania",
    description: "AriseFunds collaborates with Kallmania, a global job placement and BPO outsourcing provider, to place successful trainees in real job roles. This partnership guarantees that education leads to employment.",
    icon: "🤝",
    goals: [
      "Secure Business Process Outsourcing (BPO) assignments",
      "Facilitate global job placements",
      "Create work-integrated learning opportunities"
    ],
    image: "/work02.jpg"
  },
  {
    name: "TrainingSol",
    description: "AriseFunds works closely with TrainingSol to ensure that all funded programs align with current job market needs, especially those demanded by Kallmania and other international employers.",
    icon: "🏫",
    goals: [
      "Tailored training curricula",
      "Cohort monitoring",
      "Certification pipelines linked to job-readiness"
    ],
    image: "/work03.jpg"
  }
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategic <span className="text-blue-600">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading institutions to create a comprehensive ecosystem for student success
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-4xl">{partner.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      With {partner.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partner.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Joint Goals:</h4>
                    <div className="space-y-2">
                      {partner.goals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Active Partnership</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Global Reach</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={`Partnership with ${partner.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Partner Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-gray-700">Partner</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Countries Reached</div>
            </div>
          </div>
        </div>

        {/* Data Collection Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Impact through Data Collection & Reporting
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            We collect and analyze critical data on student performance, training outcomes, and employment success. These insights are used to refine educational programs, evaluate financial efficiency, inform stakeholders and investors, and drive transparency in outcome-based funding.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">📊</div>
              <div className="font-semibold text-gray-900">Performance Tracking</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">📈</div>
              <div className="font-semibold text-gray-900">Outcome Analysis</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">🎯</div>
              <div className="font-semibold text-gray-900">Program Refinement</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">📋</div>
              <div className="font-semibold text-gray-900">Transparency Reports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Loan Facilitation & Management",
    description: "We help students secure the funding they need to pursue professional and vocational training. AriseFunds manages the loan lifecycle—from initial assessment and disbursement to structured repayment plans—ensuring transparency and accountability at every stage.",
    icon: "📘",
    features: [
      "Pre-qualified funding options",
      "Transparent repayment terms",
      "Credit support services",
      "Collaboration with financial institutions"
    ],
    image: "/project01.jpg"
  },
  {
    id: 2,
    title: "Capital Mobilization",
    description: "We work with investors, philanthropists, and institutions to raise funds dedicated to student education and career development. This financial pool sustains training programs and job pipelines, ensuring a stable funding base for all participants.",
    icon: "💰",
    features: [
      "Impact investing networks",
      "Public-private funding structures",
      "Education financing portfolios"
    ],
    image: "/project02.jpg"
  },
  {
    id: 3,
    title: "Student Welfare & Risk Management",
    description: "Student success goes beyond funding. AriseFunds provides a comprehensive welfare and risk support framework that includes psychological support, emergency funding, and performance tracking.",
    icon: "❤",
    features: [
      "Academic risk assessments",
      "Emergency aid & hardship funds",
      "Referral to wellness services",
      "Continuous monitoring of at-risk students"
    ],
    image: "/project03.jpg"
  },
  {
    id: 4,
    title: "Job Transition & Workforce Development",
    description: "Our workforce transition unit helps graduates step confidently into employment. We coordinate job readiness training, resume workshops, soft-skills development, and direct placement into job opportunities—especially in the BPO sector.",
    icon: "💼",
    features: [
      "Job matching and placement",
      "Interview prep and soft skill training",
      "Employment data tracking",
      "Ongoing career development support"
    ],
    image: "/work01.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Core Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support to ensure student success from funding to employment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their lives through AriseFunds. Apply today and take the first step towards your future.
            </p>
            <a
              href="#apply"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, DollarSign, Heart, Briefcase } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Loan Facilitation & Management",
    description: "We help students secure the funding they need to pursue professional and vocational training. AriseFunds manages the loan lifecycle—from initial assessment and disbursement to structured repayment plans—ensuring transparency and accountability at every stage.",
    features: [
      "Pre-qualified funding options",
      "Transparent repayment terms",
      "Credit support services",
      "Collaboration with financial institutions"
    ]
  },
  {
    icon: DollarSign,
    title: "Capital Mobilization",
    description: "We work with investors, philanthropists, and institutions to raise funds dedicated to student education and career development. This financial pool sustains training programs and job pipelines, ensuring a stable funding base for all participants.",
    features: [
      "Impact investing networks",
      "Public-private funding structures",
      "Education financing portfolios"
    ]
  },
  {
    icon: Heart,
    title: "Student Welfare & Risk Management",
    description: "Student success goes beyond funding. AriseFunds provides a comprehensive welfare and risk support framework that includes psychological support, emergency funding, and performance tracking.",
    features: [
      "Academic risk assessments",
      "Emergency aid & hardship funds",
      "Referral to wellness services",
      "Continuous monitoring of at-risk students"
    ]
  },
  {
    icon: Briefcase,
    title: "Job Transition & Workforce Development",
    description: "Our workforce transition unit helps graduates step confidently into employment. We coordinate job readiness training, resume workshops, soft-skills development, and direct placement into job opportunities—especially in the BPO sector.",
    features: [
      "Job matching and placement",
      "Interview prep and soft skill training",
      "Employment data tracking",
      "Ongoing career development support"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for students throughout their educational journey and career transition
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
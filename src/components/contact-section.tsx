import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const faqs = [
  {
    question: "Who is eligible to apply for AriseFunds support?",
    answer: "Anyone enrolling in a qualified TrainingSol program or participating in a partner initiative."
  },
  {
    question: "How much financial support can I receive?",
    answer: "Loan amounts vary depending on program type and applicant profile."
  },
  {
    question: "Are jobs guaranteed after training?",
    answer: "We facilitate job placements in partnership with Kallmania, but participation and completion of required tracks are necessary."
  },
  {
    question: "Can I apply from anywhere in Africa?",
    answer: "Yes, the program is open to students across the continent where partner training hubs or virtual tracks are available."
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@arisefunds.org",
    href: "mailto:info@arisefunds.org"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234-XXX-XXX-XXXX",
    href: "tel:+234-XXX-XXX-XXXX"
  },
  {
    icon: MapPin,
    title: "Regional Office",
    value: "[Insert Address]",
    href: "#"
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.arisefunds.org",
    href: "https://www.arisefunds.org"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to support you! Get in touch with our team for any questions or assistance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <info.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <a 
                        href={info.href} 
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-gray-600">Complete the central application form (managed by AriseFunds)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-gray-600">Submit required academic and financial documents</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-gray-600">Receive funding decision within days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <p className="text-gray-600">Begin training with full support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <p className="text-gray-600">Access job placement services after graduation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* FAQ */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 
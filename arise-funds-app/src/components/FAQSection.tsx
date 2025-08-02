"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ApplicationModal from "./ApplicationModal";

const faqs = [
  {
    id: 1,
    question: "Who is eligible to apply for AriseFunds support?",
    answer: "Anyone enrolling in a qualified TrainingSol program or participating in a partner initiative is eligible. We primarily serve African students who demonstrate financial need and academic potential. Applicants must be at least 18 years old and have completed secondary education."
  },
  {
    id: 2,
    question: "How much financial support can I receive?",
    answer: "Loan amounts vary depending on program type and applicant profile. Typically, we provide funding ranging from $1,000 to $10,000 USD, covering tuition fees, training materials, and living expenses during the program duration. The exact amount is determined based on your program costs and financial assessment."
  },
  {
    id: 3,
    question: "Are jobs guaranteed after training?",
    answer: "We facilitate job placements in partnership with Kallmania and other global employers, but participation and completion of required tracks are necessary. Our 95% job placement rate is achieved through our comprehensive training programs and strong industry partnerships. We provide ongoing support to ensure successful employment."
  },
  {
    id: 4,
    question: "Can I apply from anywhere in Africa?",
    answer: "Yes, the program is open to students across the continent where partner training hubs or virtual tracks are available. We currently operate in 15+ African countries and are expanding our reach. Virtual training options are available for students in remote areas."
  },
  {
    id: 5,
    question: "What documents do I need to apply?",
    answer: "Required documents include: valid government-issued ID, educational certificates/transcripts, recent passport photograph, proof of address, and a letter of motivation (optional but recommended). Additional documents may be requested based on your specific program and circumstances."
  },
  {
    id: 6,
    question: "How long does the application process take?",
    answer: "The initial application review takes 3-5 business days. Once approved, funding is typically disbursed within 1-2 weeks. The entire process from application to program start usually takes 2-4 weeks, depending on program start dates and document verification."
  },
  {
    id: 7,
    question: "What are the repayment terms?",
    answer: "We offer flexible repayment plans that begin after employment placement. Repayment typically starts 3 months after securing a job, with terms ranging from 12-36 months. Interest rates are competitive and designed to be affordable for graduates."
  },
  {
    id: 8,
    question: "What training programs are available?",
    answer: "We offer programs in BPO Training, Technology Training, Business Administration, Customer Service, Data Entry & Processing, and other in-demand skills. Programs range from 3-12 months and are designed to meet current market demands."
  },
  {
    id: 9,
    question: "Do you provide career guidance and support?",
    answer: "Yes, we provide comprehensive career guidance including resume workshops, interview preparation, soft skills training, and ongoing mentorship. Our career development team works closely with students throughout their training and job placement journey."
  },
  {
    id: 10,
    question: "What happens if I can't complete the program?",
    answer: "We understand that circumstances can change. We offer support services and may adjust repayment terms based on individual situations. Our goal is to help you succeed, and we work with students facing challenges to find solutions."
  },
  {
    id: 11,
    question: "Are there any hidden fees or charges?",
    answer: "No, we maintain complete transparency in our fee structure. All costs are clearly outlined in your funding agreement. There are no hidden fees, and we provide detailed breakdowns of all charges before you accept funding."
  },
  {
    id: 12,
    question: "How do you ensure the quality of training programs?",
    answer: "We partner with accredited training institutions and conduct regular quality assessments. All programs are designed in collaboration with industry experts and employers to ensure they meet current market standards and requirements."
  }
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, application process, and support programs.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="border-gray-200 hover:border-blue-300 transition-colors duration-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  <Button
                    variant="ghost"
                    className="w-full text-left p-0 h-auto font-semibold text-gray-900 hover:text-blue-600"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openFaq === faq.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </Button>
                </CardTitle>
              </CardHeader>
              {openFaq === faq.id && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
                         Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplicationModal
              trigger={
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
              }
            />
            <Button variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 
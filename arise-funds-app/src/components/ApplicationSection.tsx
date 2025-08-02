"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Complete Application",
    description: "Fill out the central application form managed by AriseFunds with your personal and academic information."
  },
  {
    number: "02",
    title: "Submit Documents",
    description: "Provide required academic and financial documents for assessment and verification."
  },
  {
    number: "03",
    title: "Receive Decision",
    description: "Get your funding decision within days with transparent terms and conditions."
  },
  {
    number: "04",
    title: "Begin Training",
    description: "Start your training program with full support and access to all resources."
  },
  {
    number: "05",
    title: "Job Placement",
    description: "Access job placement services after graduation through our partner network."
  }
];

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

const whoWeServe = [
  "Students in need of tuition support",
  "Graduates seeking job placement",
  "Youth transitioning into tech or BPO careers",
  "Donors and funders seeking social impact",
  "Governments and institutions supporting educational access"
];

export default function ApplicationSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application & <span className="text-blue-600">Enrollment Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Applying for financial aid through AriseFunds is simple and integrated with our partner systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Process Steps */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Application Steps</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who We Serve */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Serve</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {whoWeServe.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-8 bg-blue-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Ready to Apply?</h4>
              <p className="text-blue-100 mb-4">
                This process is integrated with TrainingSol's registration and Kallmania's placement systems.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Application
              </button>
            </div>
          </div>
        </div>

        {/* Process Integration */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Integrated Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our application process seamlessly integrates with TrainingSol's registration and Kallmania's placement systems for a smooth experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AriseFunds</h4>
              <p className="text-sm text-gray-600">Central application management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">TrainingSol</h4>
              <p className="text-sm text-gray-600">Registration & training</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Kallmania</h4>
              <p className="text-sm text-gray-600">Job placement services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationModal from "./ApplicationModal";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mwangi",
    role: "BPO Specialist",
    company: "Global Call Center",
    image: "/testimonial01.jpg",
    quote: "AriseFunds gave me the opportunity to pursue my dreams. The training was world-class, and I now have a stable career in the BPO industry. I'm grateful for their support throughout my journey.",
    rating: 5,
    location: "Nairobi, Kenya"
  },
  {
    id: 2,
    name: "David Okechukwu",
    role: "Customer Service Manager",
    company: "Tech Solutions Ltd",
    image: "/testimonial02.jpg",
    quote: "The financial support and career guidance I received from AriseFunds were life-changing. I went from struggling to pay for education to managing a team of 15 people.",
    rating: 5,
    location: "Lagos, Nigeria"
  },
  {
    id: 3,
    name: "Amina Hassan",
    role: "Data Entry Specialist",
    company: "International BPO",
    image: "/testimonial03.jpg",
    quote: "Thanks to AriseFunds, I was able to complete my training and secure a job within 3 months. The placement process was smooth and professional.",
    rating: 5,
    location: "Dar es Salaam, Tanzania"
  },
  {
    id: 4,
    name: "Kwame Asante",
    role: "Business Process Analyst",
    company: "Global Solutions",
    image: "/work01.jpg",
    quote: "The comprehensive support system at AriseFunds is unmatched. They didn't just provide funding; they ensured my success through mentorship and ongoing support.",
    rating: 5,
    location: "Accra, Ghana"
  },
  {
    id: 5,
    name: "Fatima Zahra",
    role: "Team Lead",
    company: "Customer Care Solutions",
    image: "/work02.jpg",
    quote: "I'm proud to say that AriseFunds helped me build a successful career. The training was practical and the job placement exceeded my expectations.",
    rating: 5,
    location: "Casablanca, Morocco"
  },
  {
    id: 6,
    name: "John Mutua",
    role: "Operations Manager",
    company: "BPO Excellence",
    image: "/work03.jpg",
    quote: "The investment AriseFunds made in my education has paid off tremendously. I now earn 3x more than before and have a stable, fulfilling career.",
    rating: 5,
    location: "Mombasa, Kenya"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our <span className="text-blue-600">Graduates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni who have successfully transitioned from students to professionals in the global workforce.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 italic">
                                     &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                    <div className="text-xs text-blue-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Job Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2,500</div>
            <div className="text-sm text-gray-600">Average Salary Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3 Months</div>
            <div className="text-sm text-gray-600">Average Time to Employment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Ready to start your success story?
          </p>
          <ApplicationModal
            trigger={
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Apply Now
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
} 
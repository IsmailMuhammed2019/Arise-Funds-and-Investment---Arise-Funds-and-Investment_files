"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ApplicationModal from "./ApplicationModal";

const slides = [
  {
    id: 1,
    title: "Empowering the Future, One Student at a Time",
    subtitle: "AriseFunds is committed to transforming access to quality education and global job placement through financial management, strategic partnerships, and holistic student support.",
    image: "/about01.jpg",
    cta: "Apply Now",
    stats: {
      students: "500+",
      placement: "85%",
      partners: "15+"
    }
  },
  {
    id: 2,
    title: "Breaking Barriers to Education",
    subtitle: "We provide comprehensive financial support, mentorship, and career guidance to help African students achieve their dreams in technology and business process outsourcing.",
    image: "/work01.jpg",
    cta: "Learn More",
    stats: {
      students: "1000+",
      placement: "90%",
      partners: "25+"
    }
  },
  {
    id: 3,
    title: "From Education to Employment",
    subtitle: "Our integrated approach connects students with world-class training, financial resources, and guaranteed job placements in the global BPO industry.",
    image: "/work02.jpg",
    cta: "Partner With Us",
    stats: {
      students: "2000+",
      placement: "92%",
      partners: "30+"
    }
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    {slide.cta === "Apply Now" ? (
                      <ApplicationModal
                        trigger={
                          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                            {slide.cta}
                          </button>
                        }
                      />
                    ) : (
                      <Link
                        href={slide.cta === "Learn More" ? "#about" : "#partners"}
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                      >
                        {slide.cta}
                      </Link>
                    )}
                    <Link
                      href="#about"
                      className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-105 text-center"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 max-w-md">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{slide.stats.students}</div>
                      <div className="text-sm text-gray-300">Students Funded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{slide.stats.placement}</div>
                      <div className="text-sm text-gray-300">Job Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{slide.stats.partners}</div>
                      <div className="text-sm text-gray-300">Partner Institutions</div>
                    </div>
                  </div>
                </div>

                {/* Image Placeholder for mobile */}
                <div className="hidden lg:block">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 
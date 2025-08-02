"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ApplicationModalProps {
  trigger?: React.ReactNode;
}

export default function ApplicationModal({ trigger }: ApplicationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    country: "",
    city: "",
    address: "",
    
    // Educational Background
    highestEducation: "",
    institution: "",
    graduationYear: "",
    gpa: "",
    fieldOfStudy: "",
    
    // Program Information
    programInterest: "",
    trainingDuration: "",
    startDate: "",
    fundingAmount: "",
    
    // Additional Information
    workExperience: "",
    skills: "",
    careerGoals: "",
    motivation: "",
    
    // Documents
    hasDocuments: false,
    documentList: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Application submitted successfully! We'll contact you within 24 hours.");
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "",
      nationality: "", country: "", city: "", address: "", highestEducation: "",
      institution: "", graduationYear: "", gpa: "", fieldOfStudy: "",
      programInterest: "", trainingDuration: "", startDate: "", fundingAmount: "",
      workExperience: "", skills: "", careerGoals: "", motivation: "",
      hasDocuments: false, documentList: ""
    });
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <Input
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <Input
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nationality *
          </label>
          <Input
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            placeholder="Enter your nationality"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country *
          </label>
          <Input
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="Enter your country"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <Input
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="Enter your city"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address *
        </label>
        <Textarea
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Enter your full address"
          rows={3}
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Highest Education Level *
          </label>
          <Select value={formData.highestEducation} onValueChange={(value) => handleChange("highestEducation", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="diploma">Diploma</SelectItem>
              <SelectItem value="bachelor">Bachelor&apos;s Degree</SelectItem>
              <SelectItem value="master">Master&apos;s Degree</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institution *
          </label>
          <Input
            value={formData.institution}
            onChange={(e) => handleChange("institution", e.target.value)}
            placeholder="Enter institution name"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Graduation Year *
          </label>
          <Input
            type="number"
            value={formData.graduationYear}
            onChange={(e) => handleChange("graduationYear", e.target.value)}
            placeholder="YYYY"
            min="1950"
            max="2030"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GPA (if applicable)
          </label>
          <Input
            type="number"
            step="0.01"
            min="0"
            max="4"
            value={formData.gpa}
            onChange={(e) => handleChange("gpa", e.target.value)}
            placeholder="e.g., 3.5"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Field of Study *
        </label>
        <Input
          value={formData.fieldOfStudy}
          onChange={(e) => handleChange("fieldOfStudy", e.target.value)}
          placeholder="e.g., Computer Science, Business Administration"
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Program of Interest *
          </label>
          <Select value={formData.programInterest} onValueChange={(value) => handleChange("programInterest", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bpo-training">BPO Training</SelectItem>
              <SelectItem value="tech-training">Technology Training</SelectItem>
              <SelectItem value="business-training">Business Administration</SelectItem>
              <SelectItem value="customer-service">Customer Service</SelectItem>
              <SelectItem value="data-entry">Data Entry & Processing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Training Duration *
          </label>
          <Select value={formData.trainingDuration} onValueChange={(value) => handleChange("trainingDuration", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-months">3 Months</SelectItem>
              <SelectItem value="6-months">6 Months</SelectItem>
              <SelectItem value="12-months">12 Months</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Start Date *
          </label>
          <Input
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Funding Amount Needed (USD) *
          </label>
          <Input
            type="number"
            value={formData.fundingAmount}
            onChange={(e) => handleChange("fundingAmount", e.target.value)}
            placeholder="e.g., 5000"
            min="1000"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Work Experience (if any)
        </label>
        <Textarea
          value={formData.workExperience}
          onChange={(e) => handleChange("workExperience", e.target.value)}
          placeholder="Describe your work experience..."
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Skills & Certifications
        </label>
        <Textarea
          value={formData.skills}
          onChange={(e) => handleChange("skills", e.target.value)}
          placeholder="List your skills, certifications, or relevant experience..."
          rows={3}
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Career Goals *
        </label>
        <Textarea
          value={formData.careerGoals}
          onChange={(e) => handleChange("careerGoals", e.target.value)}
          placeholder="Describe your career goals and how this program will help you achieve them..."
          rows={4}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Motivation Statement *
        </label>
        <Textarea
          value={formData.motivation}
          onChange={(e) => handleChange("motivation", e.target.value)}
          placeholder="Why do you want to join this program? What motivates you?"
          rows={4}
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="hasDocuments"
            checked={formData.hasDocuments}
            onChange={(e) => handleChange("hasDocuments", e.target.checked.toString())}
            className="rounded"
          />
          <label htmlFor="hasDocuments" className="text-sm font-medium text-gray-700">
            I have the required documents ready
          </label>
        </div>

        {formData.hasDocuments && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              List of Documents
            </label>
            <Textarea
              value={formData.documentList}
              onChange={(e) => handleChange("documentList", e.target.value)}
              placeholder="List the documents you have (ID, certificates, transcripts, etc.)"
              rows={3}
            />
          </div>
        )}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-blue-900 mb-2">Required Documents:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Valid government-issued ID</li>
            <li>• Educational certificates/transcripts</li>
            <li>• Recent passport photograph</li>
            <li>• Proof of address</li>
            <li>• Letter of motivation (optional but recommended)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            AriseFunds Application Form
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Complete your application for educational funding and career support. Step {currentStep} of 4.
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6"
            >
              Previous
            </Button>

            <div className="flex space-x-3">
              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 px-6"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-6"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 
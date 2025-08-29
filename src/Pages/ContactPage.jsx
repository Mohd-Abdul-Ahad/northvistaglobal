import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroBannerImg from "../assets/Images/herobannerr.webp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    programInterest: "",
    contactPreference: [],
    specificQuestion: "",
    salutation: "",
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
    nationality: "",
    currentCountry: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updated = checked
        ? [...formData.contactPreference, value]
        : formData.contactPreference.filter((v) => v !== value);

      setFormData((prev) => ({ ...prev, [name]: updated }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "programInterest",
      "salutation",
      "firstName",
      "lastName",
      "telephone",
      "email",
      "nationality",
      "currentCountry",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });

    if (formData.contactPreference.length === 0) {
      newErrors.contactPreference = "Select at least one option";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      alert("Your message has been submitted successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="text-white min-h-screen">
        <section className="relative text-white text-center py-24 px-6 md:px-8 overflow-hidden">
          {/* BG Image Layer */}
          <img
            src={HeroBannerImg}
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
          />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl interbold">
              Let us help you today
            </h1>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Complete the form below and our experts will reach out to assist
              you.
            </p>
          </div>
        </section>

        <section className="bg-white text-primary py-16 px-6 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* LEFT COLUMN */}
            <div className="space-y-6 animate-fade-in-left">
              <div>
                <label className="block intersemibold mb-2">
                  Program of interest*
                </label>
                <select
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.programInterest
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select a program</option>
                  <option value="residency-citizenship">
                    Residency & Citizenship
                  </option>
                  <option value="digital-nomad">Digital Nomad Programs</option>
                  <option value="retiree-residency">Retiree Residency</option>
                  <option value="business-expansion">Business Expansion</option>
                  <option value="legacy-planning">Legacy Planning</option>
                </select>
                {errors.programInterest && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.programInterest}
                  </p>
                )}
              </div>

              <div>
                <label className="block intersemibold mb-2">
                  Contact preference*
                </label>
                <div className="space-y-2">
                  {["email", "phone"].map((method) => (
                    <label key={method} className="flex items-center">
                      <input
                        type="checkbox"
                        name="contactPreference"
                        value={method}
                        onChange={handleChange}
                        checked={formData.contactPreference.includes(method)}
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <span className="ml-2 capitalize">{method}</span>
                    </label>
                  ))}
                  {errors.contactPreference && (
                    <p className="text-red-500 text-sm">
                      {errors.contactPreference}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block intersemibold mb-2">
                  Specific question
                </label>
                <textarea
                  name="specificQuestion"
                  value={formData.specificQuestion}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Share any specific needs or questions..."
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm intersemibold mb-1">
                    Salutation*
                  </label>
                  <select
                    name="salutation"
                    value={formData.salutation}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg ${
                      errors.salutation ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                    <option value="dr">Dr.</option>
                  </select>
                  {errors.salutation && (
                    <p className="text-red-500 text-sm">{errors.salutation}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label className="block text-sm intersemibold mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm intersemibold mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm intersemibold mb-1">
                  Telephone*
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Include country code"
                  className={`w-full p-3 border rounded-lg ${
                    errors.telephone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.telephone && (
                  <p className="text-red-500 text-sm">{errors.telephone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm intersemibold mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm intersemibold mb-1">
                    Nationality*
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg ${
                      errors.nationality ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.nationality && (
                    <p className="text-red-500 text-sm">{errors.nationality}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm intersemibold mb-1">
                    Country you currently reside in*
                  </label>
                  <input
                    type="text"
                    name="currentCountry"
                    value={formData.currentCountry}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg ${
                      errors.currentCountry
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.currentCountry && (
                    <p className="text-red-500 text-sm">
                      {errors.currentCountry}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-[#1E453E] interbold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

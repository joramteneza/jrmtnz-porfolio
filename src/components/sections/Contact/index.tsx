import React, { useState } from "react";
import SectionTitle from "@/components/commons/SectionTitle";
import { AiFillMail } from "react-icons/ai";
import { socials } from "@/data/socials";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Send email with form data using your preferred method (e.g., API call, server-side implementation)
    // Replace the following console.log with your actual email sending logic

    console.log(formData);
    // Add your email sending logic here
  };

  return (
    <form
      className="flex flex-col mb-10 sm:mb-0 md:grid w-full sm:grid-cols-2 lg:flex gap-6 px-0 sm:p-6 lg:p-10"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="py-2 px-4 border border-gray-300 rounded-md"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="py-2 px-4 border border-gray-300 rounded-md"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number (optional)"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="py-2 px-4 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="py-2 px-4 border border-gray-300 rounded-md"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="py-2 px-4 border border-gray-300 rounded-md"
        required
      ></textarea>
      <button
        type="submit"
        className="py-2 px-4 bg-primary-100 text-white rounded-md hover:bg-primary-200"
      >
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <div className="h-screen relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="CONTACT" display={{ icon: AiFillMail }} />
      <div className="flex flex-col lg:items-center lg:justify-center gap-6 px-0 sm:p-6 lg:p-10 h-full min-h-96 overflow-hidden overflow-y-auto scrollbar-hide">
        <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center">
          Let's Work <span className="text-primary-100">Together!</span>
        </p>
        <ContactForm />
        <div className={`flex items-start justify-center gap-4`}>
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              title={social.title}
              className="flex text-white hover:text-primary-100 rounded-full border-white border w-10 h-10 hover:border-primary-100 items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon && <social.icon className={social.className} />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaMap,
  FaMobile,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa6";
import { IconBaseProps } from "react-icons/lib";

interface contactSourceItem {
  key: string;
  label?: string;
  value: string;
  icon: IconBaseProps;
  isLink?: boolean;
}

const contactSource: contactSourceItem[] = [
  {
    key: "address",
    value: "10303 NW 62nd Street. Doral FL 33178",
    icon: <FaMap />,
  },
  { key: "mobile", value: "7866201586", icon: <FaMobile /> },
  { key: "office", value: "7863071513", icon: <FaPhone /> },
  { key: "email", value: "groberfloors@gmail.com", icon: <FaEnvelope /> },
  {
    key: "instagram",
    label: "Groberfloors",
    value: "https://instagram.com/groberfloors",
    icon: <FaInstagram />,
    isLink: true,
  },
];

interface FormData {
  name: string;
  company: string;
  email: string;
  number: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    number: "",
    message: "",
  });

  const [errMessage, setErrMessage] = useState<string | null>(null);

  const validateForm = (formValues: FormData) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage("Please fill in all fields");
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage("Name must be at least 5 characters");
      return false;
    }
    if (isNaN(Number(formValues.number)) || formValues.number.length < 10) {
      setErrMessage("Number is not valid");
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage("Message must be at least 10 characters");
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage("Email is invalid");
      return false;
    }
    return true;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData)) return;

    setErrMessage(null);

    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="bg-base-alt py-10 md:py-24 mt-20"
      data-scroll-index="4"
    >
      <div className="container mx-auto px-4">
        <div className="mb-24">
          <h6 className="badge-text">Get In Touch</h6>
          <h2 className="section-title alt">
            Want to make the interior of your home more extraordinary?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h6 className="mb-8 text-xl font-bold text-white">
              Grober Floors LLC
            </h6>
            <ul className="space-y-4">
              {contactSource.map((item: contactSourceItem) => {
                return item.isLink && item.isLink === true ? (
                  <li key={item.key} className="flex items-center">
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-gray-300 hover:text-accent transition-colors"
                    >
                      <span className="mr-2 text-lg text-accent">
                        {item.icon as any}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ) : (
                  <li key={item.key} className="flex items-start">
                    <span className="mt-1.5 mr-2 text-lg text-accent">
                      {item.icon as any}
                    </span>
                    <span className="text-gray-300">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <form id="contact-form" onSubmit={handleSubmit} className="w-full">
              {errMessage && (
                <div className="mb-6 rounded bg-red-500/10 p-4 text-sm text-red-500">
                  {errMessage}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="mb-2">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                    className="form-input"
                  />
                </div>

                <div className="mb-2">
                  <input
                    id="form_company"
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    onChange={handleChange}
                    value={formData.company}
                    className="form-input"
                  />
                </div>

                <div className="mb-2">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="form-input"
                  />
                </div>

                <div className="mb-2">
                  <input
                    id="form_number"
                    type="text"
                    name="number"
                    placeholder="Your Number"
                    required
                    onChange={handleChange}
                    value={formData.number}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="mt-6 mb-12">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  onChange={handleChange}
                  value={formData.message}
                  className="form-input"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="button">
                  Let&apos;s Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

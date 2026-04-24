"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactForm } from "@/types";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9971788808",
    iconBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@foxenterprises.co.in",
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "239, Gurukul Industrial Area, Sector 39, Opposite SS Global School, Near Sarai Metro Station\nFaridabad, Haryana 121010",
    iconBg: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed",
    iconBg: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
];

export function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange =
    (field: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (!response.ok) {
        let errorMessage = "Failed to send message";
        try {
          const errorData = await response.json();
          // Pydantic/FastAPI often returns validation errors as a list in 'detail'
          if (Array.isArray(errorData.detail) && errorData.detail.length > 0) {
            errorMessage = errorData.detail[0].msg || errorMessage;
          } else if (typeof errorData.detail === "string") {
            errorMessage = errorData.detail;
          } else if (errorData.detail) {
            errorMessage = JSON.stringify(errorData.detail);
          }
        } catch (_e) {
          // Fallback if response isn't JSON
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.";
      alert(`Submission Error: ${message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-background border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to discuss your fabrication requirements? Our team in
            Faridabad is ready to assist. We'll get back to you promptly with a
            detailed quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactDetails.map(
              ({ icon: Icon, label, value, iconBg, iconColor }) => (
                <div
                  key={label}
                  className="bg-card rounded-xl border border-border/50 shadow-card p-5 flex gap-4 items-start hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${iconBg} border flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {label}
                    </div>
                    <div className="text-sm text-foreground whitespace-pre-line">
                      {value}
                    </div>
                  </div>
                </div>
              ),
            )}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl border border-border/50 shadow-large p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  data-ocid="contact-success"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thank you for reaching out. Our team in Faridabad will get
                    back to you with a detailed quote within 24 business hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 border-border hover:border-primary/40 hover:text-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Rajesh Kumar"
                        value={form.name}
                        onChange={handleChange("name")}
                        required
                        className="bg-muted/30 border-border/60 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                        data-ocid="contact-input-name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="rajesh@company.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                        className="bg-muted/30 border-border/60 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                        data-ocid="contact-input-email"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-phone"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className="bg-muted/30 border-border/60 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                        data-ocid="contact-input-phone"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="contact-company"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Company Name
                      </Label>
                      <Input
                        id="contact-company"
                        placeholder="Your Automotive Company"
                        value={form.company}
                        onChange={handleChange("company")}
                        className="bg-muted/30 border-border/60 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50"
                        data-ocid="contact-input-company"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-medium text-foreground/80"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Describe your manufacturing requirements — part type, quantities, material specifications..."
                      value={form.message}
                      onChange={handleChange("message")}
                      required
                      rows={5}
                      className="bg-muted/30 border-border/60 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50 resize-none"
                      data-ocid="contact-input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full metallic-gradient text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-300 group border-0"
                    data-ocid="contact-submit"
                  >
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={16}
                          className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

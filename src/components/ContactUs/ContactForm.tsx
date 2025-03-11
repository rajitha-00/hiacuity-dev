"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

const countries = [
  "USA",
  "UK",
  "Denmark",
  "Germany",
  "Canada",
  "France",
  "India",
  "Australia",
  "Japan",
  "China",
  "Brazil",
  "South Africa",
  "Mexico",
  "Italy",
  "Sri Lanka",
  "Spain",
];

const industries = [
  "Software",
  "Business",
  "HR",
  "Healthcare",
  "Finance",
  "Marketing",
  "Retail",
  "Education",
  "Manufacturing",
  "Construction",
  "Entertainment",
  "Automotive",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyName: "",
    industry: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "New Contact Inquiry",
          message: `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.companyName}
Industry: ${formData.industry}
Country: ${formData.country}
Description: ${formData.description}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Email sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          companyName: "",
          industry: "",
          description: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error(`${error} occurred. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full justify-center lg:text-start mx-auto mt-10 max-w-[1000px]">
      <form
        className="form backdrop-blur-md flex flex-col gap-5 bg-white bg-opacity-30 p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between">
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <Select
            onValueChange={(value) => handleSelectChange("country", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-5 md:gap-10 md:flex-row justify-between">
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
          <Select
            onValueChange={(value) => handleSelectChange("industry", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {industries.map((i) => (
                  <SelectItem key={i} value={i}>
                    {i}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter details..."
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="mt-4 w-[200px] mx-auto relative rounded-xl bg-primary-dark px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out"
        >
          {loading ? "Sending..." : "Contact Our Team"}
        </Button>
      </form>
    </div>
  );
}

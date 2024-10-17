"use client";
import React from "react";
import Input from "../ui/form/input";
import Select from "../ui/form/select";
import TextArea from "../ui/form/text-area";
import GradientButton from "../ui/form/gradient-button";

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-5">
        <Input
          label="First Name*"
          placeholder="Name"
          className="col-span-1 w-full"
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          className="col-span-1"
        />
      </div>
      <Input
        label="Organization or Facility Name"
        placeholder="Write your organization name"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input label="Title" placeholder="Title" />
        <Input label="Email" placeholder="Email address" type="email" />
      </div>
      <Select
        label="Interested in :"
        // placeholder="Select your intrested"
        options={
          [
            // Add your options here
          ]
        }
      />
      <TextArea label="Message" placeholder="Write you message" rows={5} />
      <div className="mt-6">
        <GradientButton>
          <span>Contact Us</span>
        </GradientButton>
      </div>
    </form>
  );
}

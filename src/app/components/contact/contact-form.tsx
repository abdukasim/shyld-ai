"use client";
import React from "react";
import Input from "../ui/form/input";
import Select from "../ui/form/select";

export default function ContactForm() {
  return (
    <form>
      <Input label="Name" />
      <Select
        label="Name"
        options={[
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ]}
      />
    </form>
  );
}

"use client";

import { useState } from "react";
import FaqSection from "@/components/unoloft/sections/FaqSection";

export default function FaqPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <FaqSection
      openIndex={openFaqIndex}
      onToggle={(index) => {
        setOpenFaqIndex((previous) => (previous === index ? null : index));
      }}
    />
  );
}

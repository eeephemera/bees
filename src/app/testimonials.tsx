"use client";

import React from "react";
import { Typography } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Jessica Devis",
    title: "CEO @ MARKETING DIGITAL LTD.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Mary Joshiash",
    title: "MARKETING @ APPLE INC.",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Marcell Glock",
    title: "CFO @ APPLE INC..",
    img: "/image/avatar3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <GroupIcon sx={{ height: 24, width: 24 }} />
          </div>
          <Typography variant="h4" color="text.primary" sx={{ marginBottom: 2 }}>
            What Clients Say
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 10, maxWidth: 384, textAlign: 'center', color: '#4a5568' }}
          >
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;

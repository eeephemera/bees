"use client";

import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via [mention preferred support channels, e.g., live chat, email, or phone], and we'll get back to you promptly.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h3" color="text.primary" sx={{ marginBottom: 4 }}>
            Frequently asked questions
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginX: 'auto', marginBottom: 24, color: '#718096', width: { lg: '60%' } }}
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} elevation={0} sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography color="text.primary" sx={{ paddingBottom: 6 }} variant="h5">
                  {title}
                </Typography>
                <Typography sx={{ fontWeight: 400, color: '#718096' }}>
                  {desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

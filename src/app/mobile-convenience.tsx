"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography } from "@mui/material";

const OPTIONS = [
  {
    title: "1000 м²",
    description: "1 колония шмелей",
  },
  {
    title: "2500-3000 м²",
    description: "2-3 колонии шмелей",
  },
  {
    title: "6-8 недель",
    description: "Длительность эффективности одной колонии",
  },
  {
    title: "50-150",
    description: "Рабочих шмелей в колонии",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center px-8 sm:px-12 lg:px-16">
        <Image
          width={500}
          height={500}
          src="/image/greenhouse.jpg"
          className="col-span-1 w-full mx-auto lg:w-10/12"
          alt="greenhouse-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg">
          <Typography variant="h4" color="text.primary" sx={{ marginBottom: 4 }}>
            Опыление Теплиц Шмелями
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 5, textAlign: 'left', fontSize: '1.25rem', color: '#718096' }}
          >
            Использование шмелиных колоний для опыления в теплицах зависит от нескольких факторов, включая тип и размер теплицы, плотность посадок и виды растений.
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-1 sm:grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;

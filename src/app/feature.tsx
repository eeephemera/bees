"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
  TruckIcon, // For ease of transport
  AdjustmentsHorizontalIcon, // For ease of control
  SunIcon, // For less demanding/weather resistance
  SparklesIcon, // For best pollinators
  ChartBarIcon, // For increased yield
  CurrencyDollarIcon // For economic benefit
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: TruckIcon,
    title: "Легкость Перевозки",
    children:
      "Шмелиные ульи (бомбидарии) легко транспортировать в специальных контейнерах, что позволяет доставлять их в любую точку мира без стресса для насекомых.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Простота Контроля",
    children:
      "Шмели предсказуемы в поведении. Небольшие семьи остаются в теплице, если пищи достаточно, и не улетают на большие расстояния, обеспечивая эффективное опыление. Ульи шмелей однолетние, что упрощает управление.",
  },
  {
    icon: SunIcon,
    title: "Меньшая Требовательность",
    children:
      "Бомбидариям требуется в десятки раз меньше пищи, чем пчелиным ульям. Шмели более устойчивы к перепадам температур (от +5°C до +40°C), что делает их идеальными опылителями в различных условиях.",
  },
  {
    icon: SparklesIcon,
    title: "Лучшие Опылители",
    children:
      "Благодаря длинным хоботкам, шмели могут опылять широкий спектр культур, включая паслёновые и тыквы. Их уникальный метод вибрации (жужжащее опыление) повышает эффективность опыления.",
  },
  {
    icon: ChartBarIcon,
    title: "Увеличение Урожайности",
    children:
      "Присутствие 1-2 семей шмелей на огромную промышленную теплицу увеличивает производство овощей или фруктов на 30-40% без особых затрат.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Экономическая Выгода",
    children:
      "Использование шмелей значительно снижает затраты на ручное опыление, сокращает трудозатраты и повышает качество урожая, обеспечивая быструю окупаемость инвестиций.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Почему Выбирают Шмелей?
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4 text-2xl sm:text-4xl md:text-5xl" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Преимущества Опыления Шмелями
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Шмели являются незаменимыми помощниками в современном сельском хозяйстве, обеспечивая высокую эффективность опыления и способствуя значительному увеличению урожайности. Узнайте о ключевых преимуществах использования шмелей для вашего бизнеса:
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;

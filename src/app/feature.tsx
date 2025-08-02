"use client";

import React from "react";
import { Typography } from "@mui/material";

import {
  LocalShipping as TruckIcon,
  Tune as AdjustmentsHorizontalIcon,
  WbSunny as SunIcon,
  Stars as SparklesIcon,
  BarChart as ChartBarIcon,
  AttachMoney as CurrencyDollarIcon
} from "@mui/icons-material";

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
        <Typography sx={{ color: 'text.secondary', marginBottom: 2, fontWeight: 700, textTransform: 'uppercase' }}>
          Почему Выбирают Шмелей?
        </Typography>
        <Typography variant="h3" color="text.primary" sx={{ marginBottom: 4, fontSize: { xs: '1.5rem', sm: '2.25rem', md: '3rem' } }}>
          Преимущества Опыления Шмелями
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginX: 'auto', width: { xs: '100%', lg: '91.666667%' }, paddingX: { xs: 4, lg: 8 }, color: '#718096' }}
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

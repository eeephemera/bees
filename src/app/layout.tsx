import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Шмелиные колонии для опыления теплиц и сельскохозяйственных культур",
  description:
    "Предлагаем высококачественные шмелиные колонии для эффективного опыления теплиц, садов и сельскохозяйственных культур. Узнайте о преимуществах биологического опыления, увеличении урожайности и устойчивом развитии с нашими шмелями.",
  keywords: "шмели, шмелиные колонии, опыление, теплицы, сельскохозяйственные культуры, биологическое опыление, опылители, увеличение урожайности, пчеловодство для теплиц",
  openGraph: {
    title: "Шмелиные колонии для опыления теплиц и сельскохозяйственных культур",
    description:
      "Предлагаем высококачественные шмелиные колонии для эффективного опыления теплиц, садов и сельскохозяйственных культур. Узнайте о преимуществах биологического опыщения, увеличении урожайности и устойчивом развитии с нашими шмелями.",
    url: "https://bees-lemon.vercel.app/og-image.jpg", // Replace with your actual Open Graph image URL
    siteName: "Пчелы",
    images: [
      {
        url: "https://bees-lemon.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Шмелиные колонии - Опыление теплиц",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://bees-lemon.vercel.app", // Replace with your actual website URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Шмелиная Ферма",
              "url": "https://bees-lemon.vercel.app/",
              "logo": "https://bees-lemon.vercel.app/favicon.png", // Consider adding a more appropriate logo URL
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7 (928) 528-85-98", // Replace with your actual phone number
                "contactType": "customer service",
                "email": "shmel-info-farm@ya.ru"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Москва", // Replace with actual city
                "addressCountry": "RU" // Replace with actual country (e.g., RU)
              }
            }),
          }}
        />
      </head>
      <body className={roboto.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

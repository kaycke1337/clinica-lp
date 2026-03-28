import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clínica Vitalis | Saúde & Bem-Estar",
  description:
    "Clínica Vitalis — Cuidado médico completo com cardiologia, dermatologia, pediatria, nutrição e exames. Agende sua consulta e cuide da sua saúde com quem entende.",
  keywords: [
    "clínica médica",
    "saúde",
    "bem-estar",
    "consultas",
    "exames",
    "cardiologia",
    "dermatologia",
    "pediatria",
    "nutrição",
  ],
  openGraph: {
    title: "Clínica Vitalis | Saúde & Bem-Estar",
    description:
      "Cuidado médico completo. Agende sua consulta na Clínica Vitalis.",
    type: "website",
    locale: "pt_BR",
    siteName: "Clínica Vitalis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Clínica Vitalis",
              description:
                "Clínica médica moderna com consultas, exames e programas de bem-estar.",
              url: "https://clinicavitalis.com.br",
              telephone: "+55-11-99999-9999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Paulista, 1000 - Sala 801",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01310-100",
                addressCountry: "BR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              medicalSpecialty: [
                "Cardiology",
                "Dermatology",
                "Pediatrics",
                "Nutrition",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

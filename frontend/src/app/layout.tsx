import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Providers } from "@/components/providers/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fox Enterprises | EV & Commercial Fabrication",
  description:
    "Quality fabrication and cargo box manufacturing for electric vehicles. Serving Delhi NCR's EV industry from Faridabad, Haryana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
          <WhatsAppButton />
        </Providers>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Needed for BigInt polyfill
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof BigInt !== 'undefined') {
                BigInt.prototype.toJSON = function () {
                  return this.toString();
                };
              }
            `,
          }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Provider } from "@/components/UI/provider";
import { Toaster } from "@/components/UI/toaster";

import "./globals.scss"
import LabsNavbar from "@/components/Navigation/LabsNavbar/LabsNavbar";

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Skunky Fit",
  description: "Your friendly fit app.",
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider>
          <LabsNavbar />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}

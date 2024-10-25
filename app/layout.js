import "./globals.css"

export const metadata = {
  title: "Catalyst for Climate: Collaborations for Climate Resilience",
  description:
    "Catalyst for Climate is a global collective equipped with community-centred solutions to climate change for building environmental resilience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

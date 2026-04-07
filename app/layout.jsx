import './globals.css'

export const metadata = {
  title: 'Appearance Aesthetics | Professional Aesthetic Treatments',
  description: 'Premium aesthetic clinic offering Botox, skin boosters, dermal fillers, and professional beauty treatments.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}

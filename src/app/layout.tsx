import { Providers } from './providers'
import "./globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body className='bg-slate-100'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
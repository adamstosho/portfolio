import '@/styles/globals.css'
import { FormspreeProvider } from '@formspree/react'

export default function App({ Component, pageProps }) {
  return(
    <FormspreeProvider project='2227980699841855144'>
     <Component {...pageProps} />
     </FormspreeProvider>
  )
}
// 697dcf1f9e494c3da05c97eaca9a1c16

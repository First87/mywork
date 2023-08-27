import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './component/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App;

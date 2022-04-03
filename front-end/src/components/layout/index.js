import { Header } from './header.js'
import { Footer } from './footer.js'


export function MainLayout({ children }){
    return (
      <>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
      </>
    )
  }


import { Header } from './header.js'
import { Footer } from './footer.js'
import { MainHome } from '../../pages/home'


export function MainLayout(){
    return (
      <>
      <Header />
      <main>
        <MainHome />
      </main>
      <Footer />
      </>
    )
  }


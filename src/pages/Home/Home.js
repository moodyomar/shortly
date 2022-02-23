import { Header, Shortner,Footer,BoostLinks,AdvancedTactics } from '../../components'

const Home = () => { 

return(

  <div className="App">
    <header>
      <Header />
    </header>
    <main>
      <Shortner />
      <AdvancedTactics />
      <BoostLinks />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>

)
}

export default Home
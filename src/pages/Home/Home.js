import { Header, Shortner,Footer,BoostLinks,AdvancedTactics }
 from '../../components'
 import working_man from '../../images/illustration-working.svg'


const Home = () => { 

return(

  <div className="App">
    <header>
      <Header image={working_man} 
      heading={'More than just shorter links'} 
      para={"Build your brand’s recognition and get detailed insights on how your links are performing."} />
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
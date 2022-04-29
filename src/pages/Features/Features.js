// import './Features.css'
import working_man from '../../images/Chat-pana.svg'
import {AdvancedTactics,Header } from "../../components"
import Whatsapp from '../../components/Whatsapp/Whatsapp'


const Features = () => { 
  
return(

<div className='Features'>
  <header>
<Header image={working_man} 
      heading={'Generate whatsapp message links'} 
      para={"Build your brand’s recognition and get detailed insights on how your links are performing."} />
</header>
    <main>
      <Whatsapp/>
      <AdvancedTactics/>
    </main>
</div>

)
}

export default Features
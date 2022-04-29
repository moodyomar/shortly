import {Plans, Header } from "../../components"
import subscriptions from '../../images/subscriptions.svg'

const Pricing = () => { 

return(

<div className='Pricing'>
<header>
<Header image={subscriptions} 
      heading={'Pick the best plan for your budget '} 
      para={"Pick the best plan the suits you well without any commitment, you can cancel anytime you wish."} />
</header>
<main>
    <Plans/>
</main>
</div>

)
}

export default Pricing
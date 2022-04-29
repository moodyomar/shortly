import { useState } from 'react';
import Card from './Card'
import monthlyPlan from './monthly.json'
import yearlyPlan from './yearly.json'
import './Plans.css'


const Plans = () => {

    const [yearly,setYearly] = useState(false);
    const [monthly,setMonthly] = useState(true);

    const changePlan = () => {
        setYearly(n => !n);
        setMonthly(n => !n);
    }

    return (

        <div className='Plans'>
            <h1>Choose your plan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita doloribus, dignissimos quaerat.</p>
            <div className="period-btns">
                <button onClick={() => changePlan()} className={`btn round-max ${monthly && 'btn-primary'}`}>Monthly</button>
                <button onClick={() => changePlan()} className={`btn round-max ${yearly && 'btn-primary'}`}>Yearly</button>
            </div>
            <div className="plans-cards">
                {(monthly ? monthlyPlan : yearlyPlan).map(item => (
                <Card cost={item.cost} price={item.price} 
                btnBg={item.btnBg} color={item.color}>
                    {item.items.map(liContent => (
                        <li>{liContent}</li>
                    ))}
                </Card>
                ))}
            </div>  
            <div className="shape"></div>
        </div>

    )
}

export default Plans
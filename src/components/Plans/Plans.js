import Card from './Card'
import './Plans.css'


const Plans = () => {

    return (

        <div className='Plans'>
            <h1>Choose your plan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita doloribus, dignissimos quaerat.</p>
            <div className="period-btns">
                <button className="monthly-btn btn btn-primary round-max">Monthly</button>
                <button className="yearly-btn btn round-max">Yearly</button>
            </div>
            <div className="plans-cards">
                <Card cost={'Free'} price={'$0'} btnBg={'white'}>
                    <li>250 Shortens</li>
                    <li>150 whatsapp links</li>
                    <li>1 Month Support</li>
                </Card>
                <Card cost={'Standard'} price={'$9.99'} btnBg={'#2ACFCE'} color={'white'}>
                    <li>500 Shortens</li>
                    <li>300 whatsapp links</li>
                    <li>6 Months Support</li>
                </Card>
                <Card cost={'Business'} price={'$19.99'} btnBg={'white'}>
                    <li>1000 Shortens</li>
                    <li>500 whatsapp links</li>
                    <li>Unlimited Support</li>
                </Card>
            </div>
        </div>

    )
}

export default Plans
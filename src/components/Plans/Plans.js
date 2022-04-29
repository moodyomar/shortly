import './Plans.css'


const Plans = () => {

    return (

        <div className='Plans'>
            <h1>Choose your plan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis expedita doloribus, dignissimos quaerat.</p>
            <div className="period-btns">
                <div className="monthly-btn">Monthly</div>
                <div className="yearly-btn">Yearly</div>
            </div>
            <div className="plans-cards">
                <div className="plan-card">
                    <h3 className='plan-status'>Free</h3>
                    <h2 className='plan-price'>$0</h2>
                    <ul className='plan-list'>
                        <li>250 Shortens</li>
                        <li>150 Whatsapp Links</li>
                        <li>Extended free trial</li>
                    </ul>
                    <button>Create Account</button>
                </div>
            </div>
        </div>

    )
}

export default Plans
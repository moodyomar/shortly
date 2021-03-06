import './Plans.css'

const Card = ({children,cost,price,btnBg,color}) => { 

return(

<div className="plan-card scale-eff" data-aos="fade-up" data-aos-duration="1000">
                    <span className='plan-status'>{cost}</span>
                    <h2 className='plan-price'>{price}</h2>
                    <ul className='plan-list'>
                        {children}
                    </ul>
                    <button style={{backgroundColor:btnBg,color:color}}>Create Account</button>
                </div>
)
}

export default Card
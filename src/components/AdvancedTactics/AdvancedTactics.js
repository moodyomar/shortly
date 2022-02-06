import React from 'react';
import './advancedTactics.css'
import fullyCustomizableIcon from '../../images/icon-fully-customizable.svg';
import detailedRecordsIcon from '../../images/icon-detailed-records.svg';
import brandRecognitionIcon from '../../images/icon-brand-recognition.svg';
import Card from './Card';



const AdvancedTactics = () => { 

return(

<div className='AdvancedTactics'>
<h2>AdvancedTactics</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore pariatur quam est quaerat laudantium autem facere.</p>
<div className="cards">
  <div className="line"></div>
  <Card title={'Brand Recognition'} icon={brandRecognitionIcon}
   desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus inventore possimus odit accusamus quibusdam.'} />
  <Card title={'Detailed Records'} icon={detailedRecordsIcon}
   desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus inventore possimus odit accusamus quibusdam.'} />
  <Card title={'Fully Customizable'} icon={fullyCustomizableIcon}
   desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus inventore possimus odit accusamus quibusdam.'} />
</div>

</div>
)
}

export default AdvancedTactics
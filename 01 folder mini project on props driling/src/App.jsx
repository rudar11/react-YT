import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='flex flex-wrap'>
       <Card company = 'NIKE' role = 'Senior Backend Dev' price = '$450/hr' location = 'NYZ ' time = '20days ago' availblity='Part-Time' availblity2='fulltime' />

      <Card company = 'TCS' role = 'Junier Backend Dev' price = '$150/hr' location = 'noida india ' time = '1days ago' availblity='2monts' availblity2='fulltime' />
  
    </div>
  )
}

export default App

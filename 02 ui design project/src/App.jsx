
import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://cdn.pixabay.com/photo/2026/04/02/15/17/regencygirl123-forest-10205699_1280.jpg',
      intro: '',
      tag: 'satisfied'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2022/12/01/14/46/city-buildings-7629245_1280.jpg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2026/01/19/17/42/cartoon-10077168_1280.png',
      intro: '',
      tag: 'underBanked'
    }
  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App

import React from 'react'

const App = () => {
  const submithandler = ()=>{
    e.preventDefault()
    console.log("for submited")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}></form>
    </div>
  )
}

export default App

import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    // <div className='py-10  flex items-center gap-8 h-[90vh] bg-mauve-900  px-18'>
    <div className='py-10  flex items-center gap-8 h-[90vh]   px-18'>
      <LeftText/>
      <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content

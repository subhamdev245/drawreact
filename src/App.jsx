import React from 'react'
import SideUI from './comp/SideUI'
import TopUI from './comp/TopUI'

const App = () => {
  return (
    <div className='realtive h-screen'>
      <TopUI />
      <SideUI />
    </div>
  )
}

export default App
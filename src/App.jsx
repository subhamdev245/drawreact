import React from 'react'
import Board from './comp/Board'
import SideUI from './comp/SideUI'
import TopUI from './comp/TopUI'

const App = () => {
  return (
    <div className='realtive h-screen'>
      <Board />
      <TopUI />
      <SideUI />
    </div>
  )
}

export default App
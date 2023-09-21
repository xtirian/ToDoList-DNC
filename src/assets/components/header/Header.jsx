import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <header>
     <div><p>Organização</p></div>

     <div className='active'><p>Tarefas</p></div>
    </header>
  )
}

export default Header
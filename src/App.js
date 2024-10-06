import React from 'react'
import "./App.css"
// import { Header } from './Header'
// import MemeGenerator from './MemeGenerator'
// import { Hook } from './Hook'
// import { Forms } from './Forms'
import { Movie } from './Movie'

export const App = () => {
  return (
    <div  className='container'>
      <h1 className='title' >React Movie Search</h1>
      <Movie></Movie>
    </div>
  )
}

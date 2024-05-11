import { useState, useEffect } from 'react'
import DiscoverMovies from './components/DiscoverMovies';

import './App.css'



function App() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('bg-slate-300')

  const numberHandler = () =>{
    const newNumber = number+1
    setNumber(newNumber)
}  

const colors = [
  'bg-red-200',
  'bg-orange-200',
  'bg-yellow-200',
  'bg-green-200',
  'bg-teal-200',
  'bg-blue-200',
  'bg-indigo-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-gray-200',
  'bg-trueGray-200',
  'bg-warmGray-200',
  'bg-coolGray-200',
  'bg-blueGray-200',
];
  const colorHandler= () =>{
    const rndColor = Math.floor(Math.random()*(colors.length))
    const newColor = colors[rndColor];
    setColor(newColor);
}
  
  return (
    <main className={`container ${color} h-screen w-screen`}>
      <h1>
        The number is {number}
      </h1>
      <button 
        onClick={numberHandler}>Click me!</button>
      <button 
        onClick={colorHandler} 
        className='border-2'
        >Click Color</button>
        <DiscoverMovies/>
    </main>
  )
}

export default App

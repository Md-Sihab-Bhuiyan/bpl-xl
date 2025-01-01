// import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import Players from './components/Players/Players'

function App() {

  return (
    <>

      <div className='bg-white'>
        <nav className="flex items-center justify-between bg-white text-gray-800 p-4">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-10 w-10 mr-4"
            />
            <span className="text-xl font-bold hidden">BPL</span>
          </div>

          {/* Right Side: Links and Button */}
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#fixture" className="hover:text-blue-400">
              Fixture
            </a>
            <a href="#teams" className="hover:text-blue-400">
              Teams
            </a>
            <a href="#schedule" className="hover:text-blue-400">
              Schedule
            </a>

            {/* Coin Button */}
            <button className="flex items-center bg-white-600 border-black px-4 py-2 rounded hover:bg-blue-500">
              <span>0 Coins</span>
              <img src="/public/assets/icons8-coin-16.png" className="h-6 w-6 mr-2" />
            </button>
          </div>
        </nav>
        <Header></Header>
        <div className='flex justify-between pt-5 px-5'>
          <p className='text-3xl'>Available Players </p>
          <div>
            <button className='btn btn-warning'>Available</button>
            <button className='btn'>Selected()</button>
          </div>
        </div>
        <Players></Players>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App;
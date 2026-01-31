import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function MenuBar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const nav = useNavigate()

  useEffect(() => {
    if (isDark) {
      document.documentElement.style.backgroundColor = "#121212";
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      document.documentElement.style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    document.documentElement.style.transition = "background-color 0.5s ease";
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
  }, [isDark]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-500" 
         style={{ backgroundColor: isDark ? "#121212" : "white" }}>
      <div className="flex flex-row justify-between items-center p-8 px-6 md:px-12">
        <h1 className="text-[24px] md:text-[40px] font-bold transition-all duration-300 hover:[text-shadow:0_0_7px_#4ade80,0_0_15px_#22c55e,0_0_30px_#16a34a] cursor-pointer" onClick={() => {nav('./MainContent')}}>GOAL-<span className='text-green-600'>ORIENTED</span> ACADEMY</h1>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-25 text-[28px]">
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./Courses')}}>Courses</button>
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./About')}}>About</button>
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./Register')}}>Register</button>
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./Mentors')}}>Mentors</button>
          <div className="flex gap-5">
            <button onClick={() => setIsDark(true)} className="text-[30px] transition-all duration-300 hover:scale-130 cursor-pointer">☽</button>
            <button onClick={() => setIsDark(false)} className="text-[30px] transition-all duration-300 hover:scale-130 cursor-pointer">☀️</button>
          </div>
        </div>

        {/* burgir buton :) */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[35px] cursor-pointer z-50">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-8 pb-10 text-[28px] animate-fadeIn">
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./Courses')}}>Courses</button>
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./About')}}>About</button>
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./Register')}}>Register</button>
          <button className="transition-all duration-300 hover:scale-120 cursor-pointer" onClick={() => {nav('./Mentors')}}>Mentors</button>
          <div className="flex gap-10">
            <button onClick={() => setIsDark(true)} className="text-[35px] transition-all duration-300 hover:scale-130 cursor-pointer">☽</button>
            <button onClick={() => setIsDark(false)} className="text-[35px] transition-all duration-300 hover:scale-130 cursor-pointer">☀️</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MenuBar;
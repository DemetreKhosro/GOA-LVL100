import batoniDaviti from '/batonidato.png'
import batoniLuka from '/batoniluka.png'
import batoniGabrieli from '/batonigabrieli.png'

function Courses() {
  return (
    <>
      <div className="p-20">
        <div className="flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2.5 hover:[text-shadow:0_0_7px_#4ade80,0_0_15px_#22c55e,0_0_30px_#16a34a]">
          <h1 className="text-[65px] text-[green] max-[587px]:text-[55px] mt-10" id='courses'>COURSES</h1>
          <p className="text-[25px] text-green-400">Here are some of the courses that you can learn in GOA.</p>
        </div>
        <div className='flex flex-row justify-around gap-20 mt-10 max-[1340px]:flex-col max-[1340px]:items-center'>
          <div className='p-10 bg-[black] text-[green] w-200 rounded-2xl flex flex-col gap-5 mt-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(34,197,94,0.4)] max-[850px]:w-180 max-[800px]:w-150 max-[650px]:w-130 max-[520px]:w-110 max-[450px]:w-90 max-[370px]:w-75'>
            <h1 className='text-[50px] text-center max-[370px]:text-[35px]'>Web Development</h1>
            <img src={batoniDaviti} alt="batoni daviti" className='w-200 rounded-2xl'/>
            <h1 className='text-[35px] text-center'>By David Shavidze & Others</h1>
            <p className='text-[green] text-[30px] text-center'>290₾/Month</p>
            <p className='text-[25px]'>In this course, we will teach you everything you need to master front-end and back-end technologies to become a high-level Full-Stack Web Developer.</p>
          </div>

          <div className='p-10 bg-[black] text-[green] w-200 rounded-2xl flex flex-col gap-5 mt-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(34,197,94,0.4)] max-[850px]:w-180 max-[800px]:w-150 max-[650px]:w-130 max-[520px]:w-110 max-[450px]:w-90 max-[370px]:w-75'>
            <h1 className='text-[50px] text-center max-[370px]:text-[35px]'>Game Development</h1>
            <img src={batoniLuka} alt="batoni luka" className='w-200 rounded-2xl'/>
            <h1 className='text-[35px] text-center'>By Luka Gurgenidze</h1>
            <p className='text-[green] text-[30px] text-center'>190₾/Month</p>
            <p className='text-[25px]'>In this course, we will teach you everything you need to master Lua coding and 3D design to become a professional Roblox Game Developer.</p>
          </div>

          <div className='p-10 bg-[black] text-[green] w-200 rounded-2xl flex flex-col gap-5 mt-10 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(34,197,94,0.4)] max-[850px]:w-180 max-[800px]:w-150 max-[650px]:w-130 max-[520px]:w-110 max-[450px]:w-90 max-[370px]:w-75'>
            <h1 className='text-[50px] text-center max-[370px]:text-[35px]'>Robotics & Engineering</h1>
            <img src={batoniGabrieli} alt="batoni gabrieli" className='w-200 rounded-2xl'/>
            <h1 className='text-[35px] text-center'>By Gabriel Molodini</h1>
            <p className='text-[green] text-[30px] text-center'>190₾/Month</p>
            <p className='text-[25px]'>In this course, we will teach you everything you need to know about circuit design, mechanics, and programming to become a versatile Robotics Engineer.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses;
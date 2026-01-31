import fbIcon from '/facebook.png';
import gitIcon from '/github.png';
import goaImage from '/goa.png';
import { useNavigate } from 'react-router-dom'

function MainContent() {
  const nav = useNavigate()
  return (
    <>
      <div className='bg-[url(/goalesson.png)] h-305 bg-no-repeat bg-cover bg-center w-full mt-15 flex flex-row max-[1024px]:flex-col justify-around items-center pt-40 max-[500px]:pt-24 px-12 max-[500px]:px-4 max-[1220px]:flex-col max-[345px]:bg-cover max-[1220px]:text-[black]'>
        <div className='max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:text-center'>
          <h1 className='text-[85px] leading-23 max-[1024px]:text-[60px] max-[500px]:text-[35px] max-[350px]:text-[28px] max-[500px]:leading-tight' id='main'>
            WELCOME TO<br/> GOAL-ORIENTED ACADEMY.
          </h1>
          <p className='text-[22px] mt-8 max-[500px]:text-[18px] max-[350px]:text-[16px] max-[500px]:mt-4'>
            We are a programming academy based in Tbilisi, where you will learn everything you need to know to become a full-stack developer.
          </p>
          <div className='flex flex-row gap-10 mt-10 justify-baseline items-center max-[500px]:gap-4 max-[350px]:flex-col max-[350px]:gap-6'>
            <button className='px-7 py-4 bg-green-700 text-[20px] rounded-3xl transition-all duration-300 hover:scale-110 hover:bg-green-500 cursor-pointer max-[500px]:px-5 max-[500px]:py-3 max-[500px]:text-[16px] font-bold' onClick={() => {nav('/Register')}}>
              CONTACT US
            </button>
            <div className='flex gap-5'>
              <a href="https://www.facebook.com/nika11keshelava"><img src={fbIcon} alt="FB" className='w-10 h-10 bg-[white] rounded-full transition-all duration-300 hover:scale-120 cursor-pointer max-[500px]:w-8 max-[500px]:h-8' /></a>
            </div>
          </div>
        </div>

        <div className='mt-10 min-[1025px]:mt-0'>
          <img 
            src={goaImage} alt="" className='rounded-3xl h-220 w-auto object-cover transition-all duration-300 max-[1024px]:h-150 max-[500px]:h-120 max-[350px]:h-90  max-[850px]:h-120 max-[850px]:w-auto max-[1220px]:h-150' />
        </div>
      </div>

      <hr/>
    </>
  )
}

export default MainContent;
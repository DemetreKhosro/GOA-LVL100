import goaPic from '/goagoa.png'

function About() {
  return (
    <div className="p-10 max-[450px]:p-5 mb-40">
      <h1 className="text-[65px] text-[green] text-center mt-15 mb-20 transition-all duration-300 hover:-translate-y-2.5 hover:[text-shadow:0_0_7px_#4ade80,0_0_15px_#22c55e,0_0_30px_#16a34a] max-[1120px]:text-[55px] max-[800px]:text-[45px] max-[500px]:text-[35px]">
        ABOUT GOA
      </h1>

      <div className="flex flex-row justify-center items-center gap-15 max-[1300px]:flex-col max-[1300px]:gap-10">
        <div className="flex justify-center w-full max-w-300 max-[1500px]:max-w-200 max-[1300px]:max-w-150 max-[500px]:max-w-full">
          <img 
            src={goaPic} 
            alt="goa landscape" 
            className="w-full rounded-3xl border-4 border-green-900 shadow-[0_0_20px_rgba(0,128,0,0.5)] object-cover" 
          />
        </div>

        <div className="flex flex-col items-center text-center w-full max-w-250">
          <h2 className="text-[50px] text-green-400 mb-5 font-bold max-[1120px]:text-[45px] max-[850px]:text-[35px] max-[500px]:text-[30px]">
            Learn from the Best
          </h2>
          <p className="text-[32px] text-green-500 leading-normal max-[1120px]:text-[28px] max-[850px]:text-[22px] max-[500px]:text-[18px] px-5">
            Our mentors know exactly how it feels to start from zero. They are experts in 
            <span className="text-white" id='about2'> Web Development </span> and 
            <span className="text-white"> Game Development </span> 
            who are here to support you every day. 
            <br /><br />
            At GOA, we don't just give you lessons. We give you a team that wants you to succeed. 
            Our crew leaders will help you in everything you might have a problem in, 
            they will help you reach the programming peak.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
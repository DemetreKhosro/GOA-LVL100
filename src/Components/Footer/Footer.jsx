import { useNavigate } from 'react-router-dom'

function Footer() {
  const nav = useNavigate()
  return (
    <footer className="bg-[#050505] border-t border-green-900/30 py-15 px-10 flex flex-col items-center">
      <div className="w-full max-w-300 flex flex-row justify-between items-start gap-10 max-[1100px]:grid max-[1100px]:grid-cols-2 max-[650px]:flex max-[650px]:flex-col max-[650px]:items-center max-[650px]:text-center">
        
        <div className="flex flex-col gap-2 max-w-80">
          <h2 className="text-[28px] text-[green] font-bold tracking-wider hover:[text-shadow:0_0_10px_#22c55e] transition-all cursor-default">GOAL-ORIENTED ACADEMY</h2>
          <p className="text-green-900 text-[16px]">Building the next generation of digital leaders.</p>
        </div>

        <div className="flex flex-col gap-4 text-green-500 text-[18px]">
          <div className="flex flex-col"><span className="text-green-800 uppercase text-[14px] font-bold">📍 Location</span><p>Delisi Coworking Hub, Tbilisi</p></div>
          <div className="flex flex-col"><span className="text-green-800 uppercase text-[14px] font-bold">📞 Phone</span><p>+995 595 11 22 33</p></div>
          <div className="flex flex-col"><span className="text-green-800 uppercase text-[14px] font-bold">Email</span><p>goalorientedacademy@gmail.com</p></div>
        </div>

        <div className="flex flex-col gap-4 max-[1100px]:col-span-2 max-[1100px]:items-center">
          <span className="text-green-800 uppercase text-[14px] font-bold text-right max-[1100px]:text-center">Quick Links</span>
          <div className="flex flex-row gap-6 text-green-400 text-[18px]">
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => {nav('/About')}}>About</button>
            <button className="hover:text-white transition-colors cursor-pointer" onClick={() => {nav('/Courses')}}>Courses</button>
          </div>
        </div>

        <div>
          <h1 className="text-green-800 uppercase text-[14px] font-bold text-center mb-2 max-[1100px]:text-center">Our Location</h1>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d526.3973247091257!2d44.74370175502273!3d41.725849703813694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473a591fe4ea3%3A0xe17e6028c2b0458b!2sCoworking%20Delisi%20Hub!5e0!3m2!1ska!2sge!4v1768593170908!5m2!1ska!2sge" width="450" height="300" className="max-[450px]:w-100 max-[400px]:w-80 max-[320px]:w-60"></iframe>
          </div>
        </div>
      </div>

      <div className="mt-15 text-green-950 text-[14px] border-t border-green-900/10 pt-5 w-full text-center" id="contact">
        &copy; {new Date().getFullYear()} Goal-Oriented Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
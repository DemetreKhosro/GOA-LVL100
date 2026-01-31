import batoniAleqsi from '/batonialeqsi2.png'
import batoniAndria from '/batoniandria.png'
import batoniDato from '/batonidato.png'
import batoniGabrieli from '/batonigabrieli.png'
import batoniGrdzelo from '/batonigrdzelo.png'
import batoniGurami from '/batonigurami.png'
import batoniKvara from '/batonikvara.png'
import batoniLuka from '/batoniluka.png'
import batoniVano from '/batonivano.png'
import qalbatoniLika from '/qalbatonilika.png'
import batoniTezela from '/batonidata.png'
import batoniBibila from '/batonibibila.png'
import batoniLasha from '/batonilasha.png'
import batoniQevxo from '/batoniqevxo.png'
import batoniCxvara from '/batonicxvara.png'

const MentorCard = ({ image, name, role }) => (
  <div className='flex flex-col bg-black text-[green] w-90 p-10 text-center gap-3 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(34,197,94,0.4)] hover:[text-shadow:0_0_7px_#4ade80,0_0_15px_#22c55e,0_0_30px_#16a34a] rounded-3xl max-[400px]:w-70 max-[400px]:p-5'>
    <img src={image} className='h-70 w-auto rounded-3xl object-cover max-[400px]:h-50' alt={name} />
    <h1 className='text-[30px] max-[400px]:text-[22px]'>{name}</h1>
    <p className='text-[25px] max-[400px]:text-[18px]'>{role}</p>
  </div>
);

function Mentors() {
  const mentors = [
    { name: "Luka Gurgenidze", role: "Web/Game Development", image: batoniLuka },
    { name: "Aleksandre Dzukaevi", role: "Web Development", image: batoniAleqsi },
    { name: "Andria Kobakhidze", role: "Web Development", image: batoniAndria },
    { name: "David Shavidze", role: "Web Development", image: batoniDato },
    { name: "Gabriel Molodini", role: "Web Development & Robotics", image: batoniGabrieli },
    { name: "Guram Papunashvili", role: "Web Development", image: batoniGurami },
    { name: "Nika Kvaratskhelia", role: "Web Development", image: batoniKvara },
    { name: "Vano Motiashvili", role: "Web Development", image: batoniVano },
    { name: "Lika Chkhikvadze", role: "Web Development", image: qalbatoniLika },
    { name: "David Grdzelishvili", role: "Web Development", image: batoniGrdzelo },
    { name: "Data Tezelashvili", role: "Web Development", image: batoniTezela },
    { name: "Giorgi Bibilashvili", role: "Web Development", image: batoniBibila },
    { name: "Lasha Lomidze", role: "Web Development", image: batoniLasha },
    { name: "Luka Tskhvaradze", role: "Web Development", image: batoniCxvara },
    { name: "Giorgi Kevkhishvili", role: "Web Development", image: batoniQevxo },
  ];

  return (
    <>
      <div className='flex flex-col mt-35 mb-20'>
        <div className="flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2.5 hover:[text-shadow:0_0_7px_#4ade80,0_0_15px_#22c55e,0_0_30px_#16a34a] px-5">
          <h1 className="text-[65px] text-[green] text-center max-[1850px]:text-[60px] max-[587px]:text-[45px] max-[350px]:text-[35px]">MEET YOUR MENTORS</h1>
          <p className="text-[25px] text-green-400 text-center max-w-350 max-[1220px]:text-[20px] max-[610px]:text-[18px]">These are the people who will help you learn to code. They aren't just teachers—they are your big brothers and sisters in the world of programming. Whether you want to build websites or create games, they will show you the way. They worked hard to get here, and now they are ready to help you do the same!</p>
        </div>
        
        <div className='grid grid-cols-5 gap-10 mt-15 px-10 justify-items-center max-[1850px]:grid-cols-4 max-[1500px]:grid-cols-3 max-[1150px]:grid-cols-2 max-[750px]:grid-cols-1 max-[400px]:px-2'>
          {mentors.map((mentor, index) => (
            <MentorCard 
              key={index}
              image={mentor.image}
              name={mentor.name}
              role={mentor.role}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Mentors;
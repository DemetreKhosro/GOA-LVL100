import React, { useState } from 'react';

function Register() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "9315691e-81c5-45e6-893c-2e80333bea39");

    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();

    if (data.success) {
      setResult("Success!");
      event.target.reset();
      localStorage.setItem('userRegistration', JSON.stringify(Object.fromEntries(formData)));
    } else {
      setResult("Error: " + data.message);
    }
  };

  return (
    <div className="flex flex-col items-center py-20 px-5 bg-[#0a0a0a] mt-30">
      <div className="w-full max-w-200 p-12 rounded-[50px] bg-[#111] border border-green-900/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
        <h1 className="text-[60px] text-[green] mb-2 font-bold transition-all duration-300 hover:[text-shadow:0_0_15px_#22c55e] max-[800px]:text-[45px]">REGISTER</h1>
        <p className="text-green-800 text-[20px] mb-12 uppercase tracking-[4px]">Goal-Oriented Academy</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
          <input type="text" name="name" placeholder="Full Name" className="w-full p-5 bg-[#1a1a1a] border-2 border-green-900/50 rounded-2xl text-green-400 text-[20px] outline-none focus:border-green-500 transition-all placeholder:text-green-900/50" required />
          
          <div className="flex flex-row gap-5 max-[600px]:flex-col">
            <input type="number" name="age" placeholder="Age" className="w-1/3 max-[600px]:w-full p-5 bg-[#1a1a1a] border-2 border-green-900/50 rounded-2xl text-green-400 text-[20px] outline-none focus:border-green-500 transition-all placeholder:text-green-900/50" required />
            <input type="email" name="email" placeholder="Email Address" className="w-2/3 max-[600px]:w-full p-5 bg-[#1a1a1a] border-2 border-green-900/50 rounded-2xl text-green-400 text-[20px] outline-none focus:border-green-500 transition-all placeholder:text-green-900/50" required />
          </div>

          <select name="course" className="w-full p-5 bg-[#1a1a1a] border-2 border-green-900/50 rounded-2xl text-green-400 text-[20px] outline-none focus:border-green-500 transition-all cursor-pointer">
            <option value="Web Development">Web Development</option>
            <option value="Game Development">Game Development</option>
            <option value="Robotics">Robotics</option>
          </select>

          <textarea name="message" placeholder="Tell us about your goals..." className="w-full p-5 bg-[#1a1a1a] border-2 border-green-900/50 rounded-2xl text-green-400 text-[20px] outline-none focus:border-green-500 transition-all placeholder:text-green-900/50 h-40 resize-none" required></textarea>

          <button type="submit" className="p-5 bg-[green] mt-6 cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-green-400 text-black font-black text-[22px] shadow-[0_0_20px_rgba(0,128,0,0.2)]">REGISTER</button>
        </form>
        {result && <p className="mt-5 text-green-400 text-xl font-bold animate-pulse">{result}</p>}
      </div>
    </div>
  );
}

export default Register;
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen min-w-screen bg-gray-800 flex flex-col justify-center items-center gap-4 select-none">
      <div className='fixed animate-fade-in-right-delayed top-0 right-0 bg-linear-to-t from-yellow-700 to-yellow-600 px-12 py-4 text-2xl rounded-bl-2xl text-yellow-400'>
        <h1>Coins: {localStorage.getItem("coins")}</h1>
      </div>
      <h1 className='animate-fade-in text-4xl sm:text-5xl lg:text-6xl text-blue-600'>Play a Quiz and get rich!</h1>
      <div className="grid grid-rows-1 grid-cols-2 gap-x-4 m-16">
        <button onClick={() => navigate("/quiz")}
        className="animate-fade-in-delayed w-[8rem] h-[4rem] lg:w-[10rem] lg:h-[5rem] text-gray bg-white rounded-2xl text-2xl 
        bg-gradient-to-t from-blue-600 to-blue-300 hover:bg-blue-500 hover:cursor-pointer hover:from-blue-700 hover:to-blue-400">New game</button>
        <button onClick={() => navigate("/rules")}
        className="animate-fade-in-delayed w-[8rem] h-[4rem] lg:w-[10rem] lg:h-[5rem] text-gray bg-white rounded-2xl 
        text-2xl bg-gradient-to-t from-yellow-600 to-yellow-300 hover:bg-yellow-500 hover:cursor-pointer hover:from-yellow-700 hover:to-yellow-400">Rules</button>
      </div>
    </div>
  )
}

export default Home
const Rules = () => {
  return (
    <div className="min-h-[100dvh] min-w-sm max-w-screen bg-gray-800 text-yellow-600 grid grid-rows-4 grid-cols-1 place-items-center">
        <h1 className="text-5xl lg:text-6xl animate-fade-in">Rules</h1>
        <div className="bg-yellow-400 w-[75vw] lg:w-[65vw] h-full min-h-fit row-start-2 row-end-4 rounded-2xl
        border-4 border-yellow-700 p-16 text-2xl flex flex-col justify-start gap-4 animate-fade-in-delayed">
            <h3>You will be asked a maximum of <b>10 questions</b>.</h3>
            <h3>Answer <b>right</b>, and you will get <b>coins</b>. Answer <b>wrong</b>, and <b>you are out of the game</b>.</h3>
            <h3>You will get <b>more coins the further you go down the questions</b>.</h3>
            <h3><b>After answering the second question</b>, you can decide whether you want to <b>stop playing</b> - and <b>get the coins you collected</b> - or to <b>continue the quiz</b> - and have the chance to <b>get more coins</b>, but also <b>risk losing all of them</b>.</h3>
            <h3><b>Have fun!</b></h3>
        </div>
    </div>
  )
}

export default Rules
const Rules = () => {
  return (
    <div className="max-h-fit py-8 min-h-screen w-screen bg-gray-800 grid place-items-center">
      <div className="h-full min-w-sm max-w-screen text-yellow-600 grid grid-rows-[10%_90%] w-[75vw] lg:w-[65vw] gap-4">
        <h1 className="text-5xl lg:text-6xl animate-fade-in text-center">Rules</h1>
        <div className="bg-yellow-400 h-full max-h-fit rounded-2xl w-full
        border-4 border-yellow-700 p-6 sm:p-8 md:p-12 lg:p-16 text-2xl flex flex-col justify-start gap-4 animate-fade-in-delayed">
            <h3>You will be asked a maximum of <b>50 questions</b>.</h3>
            <h3>Answer <b>right</b>, and you will get <b>coins</b>. Answer <b>wrong</b>, and <b>you lose all your coins</b>.</h3>
            <h3>You will get <b>more coins the further you go down the questions</b>.</h3>
            <h3><b>After answering the second question</b>, you can decide whether you want to <b>stop playing</b> - and <b>get the coins you collected</b> - or to <b>continue the quiz</b> - and have the chance to <b>get more coins</b>, but also <b>risk losing all of them</b>.</h3>
            <h3><b>Have fun!</b></h3>
        </div>
      </div>
    </div>
  )
}

export default Rules
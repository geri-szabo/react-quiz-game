import { useNavigate } from "react-router-dom"
import { questionData } from "../data/questions";
import { useEffect } from "react";

const FinalScreen = ({ answers, stop }) => {
    const navigate = useNavigate();
    const questions = [...questionData];

    let isQuizCompleted = false;

    if (answers === questions.length) {
        isQuizCompleted = true;
    }

    if (!stop && !isQuizCompleted) {
        useEffect(() => {
            localStorage.setItem("coins", "0")
        })
    }

    const coins = localStorage.getItem("coins");
    
    return (
        <div className="h-screen w-screen bg-gray-800 select-none">
            {(isQuizCompleted && !stop) ? 
                <div className="bg-gray-600 h-1/2 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-2xl
                grid text-center rounded-4xl animate-fade-in">
                    <h1 className="text-green-300 font-medium animate-fade-in-delayed">You completed the quiz!</h1>
                    <h1 className="text-green-200 animate-fade-in-delayed">You got all the questions right! ({answers})</h1>
                    <h1 className="text-yellow-200 animate-fade-in-delayed">Coins: {parseInt(coins) + (answers * 50)}</h1>
                    <div className="grid">
                        <button onClick={() => navigate("/")}
                        className="h-full w-full bg-yellow-500 text-gray-200 text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium rounded-2xl
                        animate-fade-in-delayed">Back to menu</button>
                    </div>
                </div>
            : (stop ?
                    <div className="bg-gray-600 h-1/2 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-2xl
                    grid text-center rounded-4xl border-2 border-orange-500 animate-fade-in">
                        <h1 className="text-orange-200 font-medium animate-fade-in-delayed">You stopped after question {answers}!</h1>
                        <h1 className="text-orange-300 animate-fade-in-delayed lg:text-2xl xl:text-3xl">I know you would have been able to answer the next question too...</h1>
                        <h1 className="text-yellow-200 animate-fade-in-delayed lg:text-2xl xl:text-3xl">Coins saved: {coins}</h1>
                        <div className="grid">
                            <button onClick={() => navigate("/")}
                            className="h-full w-full bg-yellow-500 text-gray-200 text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium rounded-2xl
                            animate-fade-in-delayed">Back to menu</button>
                        </div>
                    </div>
                :
                    <div className="bg-gray-600 h-1/2 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-2xl
                    grid text-center rounded-4xl border-2 border-red-500 animate-fade-in">
                        <h1 className="text-red-200 font-medium animate-fade-in-delayed">Wrong answer! You lost all your coins!</h1>
                        <h1 className="text-green-200 animate-fade-in-delayed">Questions answered right: {answers}</h1>
                        <h1 className="text-yellow-200 animate-fade-in-delayed">Coins lost: {coins}</h1>
                        <div className="grid">
                            <button onClick={() => navigate("/")}
                            className="h-full w-full bg-yellow-500 text-gray-200 text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium rounded-2xl
                            animate-fade-in-delayed">Back to menu</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default FinalScreen
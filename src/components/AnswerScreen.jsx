import { useNavigate } from 'react-router-dom';

const AnswerScreen = ({ onNext, onStop, coins, answerCount }) => {
    return (
        <div className='bg-gray-800 h-screen w-screen select-none'>
            <div className={`border-green-500 border-4 bg-gray-600 p-4 
            rounded-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-3/4 grid ${answerCount > 1 ? "grid-rows-4" : "grid-rows-3"} text-2xl
            text-gray-200 font-medium text-center gap-2 animate-fade-in`}>
                <h1 className='animate-fade-in-delayed'>Correct answer!</h1>
                <div className='animate-fade-in-delayed grid'>
                    <h1 className='text-yellow-400'>Coins: {coins}</h1>
                    <h1 className='text-green-500'>Right answers: {answerCount}</h1>
                </div>
                {answerCount > 1 && <AnswerScreenButtonStop onStop={onStop} />}
                <AnswerScreenButtonQuestion onNext={onNext} />
            </div>
        </div>
    )
}

const AnswerScreenButtonQuestion = ({ onNext }) => {
    return (
        <button onClick={onNext}
        className='h-full w-full bg-green-700 rounded-2xl text-gray-200 text-2xl font-medium animate-fade-in-delayed'>Next question</button>
    )
}

const AnswerScreenButtonStop = ({ onStop }) => {
    return (
        <button onClick={onStop}
        className='h-full w-full bg-yellow-500 rounded-2xl text-gray-200 text-2xl font-medium animate-fade-in-delayed'>Stop</button>
    )
}

export default AnswerScreen
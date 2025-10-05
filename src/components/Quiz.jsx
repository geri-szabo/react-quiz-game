import AnswerScreen from './AnswerScreen';
import FinalScreen from './FinalScreen';
import { useState, useEffect } from 'react';
import { questionData } from '../data/questions';

const Quiz = () => {
    const [rightAnswers, setRightAnswers] = useState(0);

    const [coins, setCoins] = useState(() => {
        const savedCoins = localStorage.getItem("coins");
        return savedCoins ? parseInt(savedCoins) : 0;
    });

    useEffect(() => {
        localStorage.setItem("coins", coins.toString());
    }, [coins]);

    const [questions, setQuestions] = useState(() => [...questionData]);

    const [currentIndex, setCurrentIndex] = useState(() =>
        Math.floor(Math.random() * questionData.length)
    );

    const [isAnswerScreenVisible, setIsAnswerScreenVisible] = useState(false);

    const [hasPlayerStopped, setHasPlayerStopped] = useState(false);

    const [isFinalScreenVisible, setIsFinalScreenVisible] = useState(false);

    const currentQuestion = questions[currentIndex];
    
    const goToNextQuestion = (answer) => {
        const isAnswerCorrect = answer === currentQuestion.rightAnswer;
        
        const updatedQuestions = [...questions];
        updatedQuestions.splice(currentIndex, 1);

        if (isAnswerCorrect) {
            setIsAnswerScreenVisible(true);
            setQuestions(updatedQuestions);
            setCurrentIndex(Math.floor(Math.random() * updatedQuestions.length));
            setRightAnswers((prev) => prev + 1);
            setCoins((prev) => prev + (50 * (rightAnswers + 1)));
        } else {
            setIsFinalScreenVisible(true);

            return
        }

        if (updatedQuestions.length === 0) {
            setIsFinalScreenVisible(true);
            return
        }
    };

    const onQuizStop = () => {
        setIsFinalScreenVisible(true);
        setHasPlayerStopped(true);
    }

    return isFinalScreenVisible ? (
        <FinalScreen answers={rightAnswers} stop={hasPlayerStopped} />
    ) : ( isAnswerScreenVisible ? (
            <AnswerScreen onNext={() => setIsAnswerScreenVisible(false)} onStop={onQuizStop} coins={coins} answerCount={rightAnswers}/>
        ) : (
            <div className="h-screen select-none w-screen grid grid-cols-1 grid-rows-[10%_10%_1fr_1fr_10%] gap-y-[5%]
            place-items-center bg-gray-800
            text-gray-200">
                <div className="h-full w-[75vw]"></div>
                <div className="h-full w-[75vw] flex justify-center items-center rounded-4xl bg-yellow-600
                border-2 border-yellow-400 animate-fade-in">
                    <h3 className="text-2xl">Coins: {coins}</h3>
                </div>
                <div className="h-full min-h-fit w-[75vw] bg-gray-600 flex flex-col justify-around p-4 text-lg font-medium
                text-center rounded-4xl border-2 border-gray-400 animate-fade-in">
                    <h1 className='text-2xl'>Question {rightAnswers + 1}:</h1>
                    <h1>{currentQuestion.question}</h1>
                </div>
                <div className="h-full w-[75vw] min-h-fit grid grid-cols-2 grid-rows-2 rounded-2xl gap-1 md:gap-2 lg:gap-3">
                    <Option text={currentQuestion.a} background="bg-red-600" border="border-red-400" value="a" onClick={() => goToNextQuestion("a")} />
                    <Option text={currentQuestion.b} background="bg-yellow-400" border="border-yellow-200" value="b" onClick={() => goToNextQuestion("b")} />
                    <Option text={currentQuestion.c} background="bg-green-600" border="border-green-400" value="c" onClick={() => goToNextQuestion("c")} />
                    <Option text={currentQuestion.d} background="bg-blue-600" border="border-blue-400" value="d" onClick={() => goToNextQuestion("d")} />
                </div>
                <div className="h-full w-[75vw]"></div>
            </div>
        )
    )
}

const Option = ({ text, background, border, value, onClick }) => {
    return (
        <div onClick={onClick}
        className={`grid place-items-center min-h-fit text-gray-900 font-medium ${background}
        rounded-[inherit] hover:cursor-pointer hover:brightness-80 border-2 ${border} animate-fade-in-${value}`}>
            <h1>{value}: {text}</h1>
        </div>
    )
}



export default Quiz
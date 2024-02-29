import { useEffect, useState } from "react";

const Choice = ({handleChoice, computerMove, playerMove, start, startGame, result}) => {
    const [intervalId, setIntervalId] = useState(null);

    const [player, setPlayer] = useState('')
    const [computer, setComputer] = useState('')
    useEffect(()=>{
        if(start){
            const idInterval = setInterval(() => {
            const randomMath = Math.random();
            if(randomMath >= 0 && randomMath < 1/3){
                setComputer('✌')
            }else if(randomMath >= 1/3 && randomMath < 2/3){
                setComputer('✊')
            }else if(randomMath >= 2/3 && randomMath < 1 ){
                setComputer('🤚')
            }
            }, 50);
            setIntervalId(idInterval);
        }else{
            if(playerMove === 'rock'){
                setPlayer('✊')
            }else if(playerMove === 'scissor'){
                setPlayer('✌')
            }else if(playerMove === 'paper'){
                setPlayer('🤚')
            }
            if(computerMove === 'rock'){
                setComputer('✊')
            }else if(computerMove === 'scissor'){
                setComputer('✌')
            }else if(computerMove === 'paper'){
                setComputer('🤚')
            }
            clearInterval(intervalId);
            // console.log(computerMove);
        }
    }, [start]);

    return ( 
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-[50px]">
            {
            start && 
            (<div className="flex flex-col w-full">
                <h2 className="rounded-lg bg-gray-200 px-4 py-2 mb-2 w-fit mx-auto shadow-md">You</h2>
                <div className="grid w-full grid-cols-3 h-[140px] gap-x-5">
                    <div onClick={() => handleChoice('scissor')} draggable="false" className="flex flex-col items-center text-2xl justify-center cursor-pointer hover:bg-gray-300 rounded-full active:bg-white  bg-gray-200">
                    ✌
                    </div>
                    <div onClick={() => handleChoice('rock')} draggable="false" className="flex flex-col items-center text-2xl justify-center cursor-pointer hover:bg-gray-300 rounded-full active:bg-white  bg-gray-200">
                    ✊
                    </div>
                    <div onClick={() => handleChoice('paper')} draggable="false" className="flex flex-col items-center text-2xl justify-center cursor-pointer hover:bg-gray-300 rounded-full active:bg-white  bg-gray-200">
                    🤚
                    </div>
                </div>
            </div>)
            }
                <div className="flex flex-col gap-y-3">
                    <button className={`px-4 py-2 w-fit mx-auto bg-green-400 shadow-lg rounded-md text-white font-semibold cursor-pointer hover:translate-y-[-3px] ${start ? 'hidden' : 'block'}`} onClick={() => startGame(true)}>Start</button>
                    <div className="grid grid-cols-2 text-center">
                        <span className="capitalize border-r-2 flex flex-row justify-end px-2">You - { player || ''  } { playerMove || '' }</span>
                        <span className="capitalize border-l-2 px-2">{ computerMove || '' } { computer || '' } - Computer</span>
                    </div>
                    <p className="text-center"><span className={`capitalize text-xl font-bold ${result === 'lose' ? 'text-red-400' : ''} ${result === 'tie' ? 'text-yellow-400' : ''} ${result === 'win' ? 'text-green-400' : ''}` }>{ result || 'Result'}</span> </p>
                </div>
            <div className="flex flex-col w-full">
                <div className="grid w-full grid-cols-1 h-[140px] gap-x-5">
                    <div className="flex flex-col items-center text-2xl justify-center rounded-full bg-gray-200">
                        { 
                            computer || '🤚'
                        }
                    </div>
                </div>
                <h2 className="rounded-lg bg-red-200 px-4 py-2 mt-2 w-fit mx-auto shadow-md">Computer</h2>
            </div>
        </div>
     );
}
 
export default Choice;
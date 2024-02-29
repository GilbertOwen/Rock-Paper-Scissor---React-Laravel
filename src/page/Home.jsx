import { useEffect, useState } from "react";
import Choice from "../component/Choice";
import axios from "axios";

const Home = () => {
    const [start, setStart] = useState(false);
    const [playerMove, setPlayerMove] = useState(null);
    const [computerMove, setComputerMove] = useState('rock');
    const [result, setResult] = useState(null);

    const startGame = () => {
        setStart(!start);
    }
    const saveScore = async (computerMove, playerMove, condition) => {
        try{
            const data = {
                condition,
                "computer_move" : computerMove,
                "user_move" : playerMove
            }
            const res = await axios.post('http://127.0.0.1:8000/api/histories', data);
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
    const handleChoice = (choice) => {
        let computerMove = ''; 
        let nowResult = ''; 
        
        const randomMath = Math.random();
        if(randomMath >= 0 && randomMath < 1/3){
            computerMove = 'scissor';
        }else if(randomMath >= 1/3 && randomMath < 2/3){
            computerMove = 'rock';
        }else if(randomMath >= 2/3 && randomMath < 1 ){
            computerMove = 'paper';
        }
        
        if(choice === 'scissor'){
            if( computerMove === 'rock'){
                nowResult = 'lose';
            }else if( computerMove === 'paper'){
                nowResult = 'win';
            }else if( computerMove === 'scissor'){
                nowResult = 'tie';
            }
        }else if(choice === 'paper'){
            if( computerMove === 'rock'){
                nowResult = 'win';
            }else if( computerMove === 'paper'){
                nowResult = 'tie';
            }else if( computerMove === 'scissor'){
                nowResult = 'lose';
            }
        }else if(choice === 'rock'){
            if( computerMove === 'rock'){
                nowResult = 'tie';
            }else if( computerMove === 'paper'){
                nowResult = 'lose';
            }else if( computerMove === 'scissor'){
                nowResult = 'win';
            }
        }
        // console.log(result);
        setPlayerMove(choice);
        setComputerMove(computerMove);
        setResult(nowResult);
        saveScore(computerMove, choice, nowResult);
        startGame(!start);
        console.log(nowResult);
    };
    useEffect(()=>{
        if(result === null){
            console.log('lol');
        }else{
            console.log(playerMove)
            console.log(computerMove)
            console.log(result)
            console.log('done');
        }
    }, [result])

    return ( 
        <div className="grid grid-cols-1 flex-grow h-full w-full md:w-8/12 px-4 mx-auto">
            <Choice handleChoice={handleChoice} startGame={startGame} computerMove={computerMove} playerMove={playerMove} result={result} start={start}/>
        </div>
     );
}
 
export default Home;
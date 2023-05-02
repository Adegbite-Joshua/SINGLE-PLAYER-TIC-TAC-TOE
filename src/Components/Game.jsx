import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Game = () => {
    // const [navigate, setnavigate] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.tictactoePlayerDetails || !localStorage.currentTictactoePlayer) {
            navigate('/')
        } else{
            let newallTictactoePlayer = JSON.parse(localStorage.getItem('tictactoePlayerDetails'))
            setallTictactoePlayer(newallTictactoePlayer)
            showPlayers()
            console.log(allTictactoePlayer);
        }
    }, [])
    // const goback =()=>{
        
    // }
    const [allTictactoePlayer, setallTictactoePlayer] = useState(JSON.parse(localStorage.getItem('tictactoePlayerDetails')))
    const [currentPlayer, setcurrentPlayer] = useState(Number(localStorage.getItem('currentTictactoePlayer')))
    const [player, setplayer] = useState(allTictactoePlayer[currentPlayer]) 
    // useEffect(() => {
            

        // }, [])
        // let details = localStorage.getItem('tictactoePlayerDetails')
        let players = []
        let nextPlayer = '';
        const showPlayers =()=>{
            players = [ allTictactoePlayer[currentPlayer].name, 'computer']
            let score = player.score
            fPSN.innerText = 1
            sPSN.innerText = 2
            firstSign.innerText = "X"
            secondSign.innerText = "O"
            firstScore.innerText = score[0]
            secondScore.innerText = score[1] 
            firstPlayer.innerText = players[0]
            secondPlayer.innerText = players[1]
            // console.log(player);
            // nextPlayer = player.nextPlayer
            nextPlayerToPlay.innerText = `It is ${players[0]}'s turn to play, playing as "X"`
            for (let i = 1; i <= 9; i++) {
                document.getElementById(`box${i}`).innerText = player.tableDisplay[`box${i}`]
            }
        }
        const playGame =(e)=>{
            if (box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box2.innerText=="X" && box2.innerText=="X" && box2.innerText=="X" || box3.innerText=="X" && box2.innerText=="X" && box1.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box1.innerText=="X" && box1.innerText=="X" || box3.innerText=="X" && box3.innerText=="X" && box3.innerText=="X" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box2.innerText=="O" && box2.innerText=="O" && box2.innerText=="O" || box3.innerText=="O" && box2.innerText=="O" && box1.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box1.innerText=="O" && box1.innerText=="O" || box3.innerText=="O" && box3.innerText=="O" && box3.innerText=="O") {
                alert("Click on continue")
            } else {
                if (nextPlayer=="X" && e.target.innerText=="") {
                e.target.innerText = "X"
                nextPlayer = "O"
                nextPlayerToPlay.innerText = `It is ${players[1]}'s turn to play, playing as "O"`
                } else if (nextPlayer=="O" && e.target.innerText=="") {
                    e.target.innerText = "O"
                    nextPlayer = "X"
                    nextPlayerToPlay.innerText = `It is ${players[0]}'s turn to play, playing as "X"`
                }
                if (box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box2.innerText=="X" && box2.innerText=="X" && box2.innerText=="X" || box3.innerText=="X" && box2.innerText=="X" && box1.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box1.innerText=="X" && box1.innerText=="X" || box3.innerText=="X" && box3.innerText=="X" && box3.innerText=="X") {
                    firstScore.innerText = Number(firstScore.innerText)+5
                    nextPlayer = ""
                    winner.innerText = `${players[0]} wins`
                } else if (box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box2.innerText=="O" && box2.innerText=="O" && box2.innerText=="O" || box3.innerText=="O" && box2.innerText=="O" && box1.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box1.innerText=="O" && box1.innerText=="O" || box3.innerText=="O" && box3.innerText=="O" && box3.innerText=="O") {
                    secondScore.innerText = Number(secondScore.innerText)+5
                    nextPlayer = ""
                    winner.innerText = `${players[1]} wins`
                } else if (box1.innerText!=""&&box2.innerText!=""&&box3.innerText!=""&&box1.innerText!=""&&box2.innerText!=""&&box3.innerText!=""&&box1.innerText!=""&&box2.innerText!=""&&box3.innerText!="") {
                    winner.innerText = `Draw 😰`
                }
            }
            // setTimeout(computerPlaying, 900) 
        }

        const computerPlaying =()=>{
            let randonNumber = Math.round(Math.random()*9)
            console.log(randonNumber)
        }
        // for (let i = 0; i < 100; i++) {
        //     let randonNumber = Math.round(Math.random()*9)
        //     if (randonNumber >= 9) {
        //         console.log(randonNumber)
        //     }
        // }
        const continueGame =()=>{
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            winner.innerText = ""
            nextPlayer = "X"
        }
        const restartGame =()=>{
            firstScore.innerText = 0
            secondScore.innerText = 0
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            winner.innerText = ""
            nextPlayer = "X"
        }
        const resetGame =()=>{
            firstScore.innerText = 0
            secondScore.innerText = 0
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            box1.innerText = ""
            box2.innerText = ""
            box3.innerText = ""
            winner.innerText = ""
            nextPlayer = "X"
            localStorage.removeItem("tictactoePlayers")
            window.location.href = "tictactoeLandingPage.html"
        }
        const playMusic =()=>{
            sound.play()
        }
        const pauseMusic =()=>{
            sound.pause()
        }
  return (
    <>
        <div className='w-100 vh-100 row row-cols-1 row-cols-md-2 overflow-hidden position-relative border border-2'>
            <div className="smallDeviceHeight">
                <div style={{height: '300px', width: '300px', display: 'flex', flexWrap: 'wrap'}} className="mx-auto">
                    <div id="box1" className="border border-2 checkBox m-auto rounded-2 border-danger danger d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box2" className="border border-2 checkBox m-auto rounded-2 border-success success d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box3" className="border border-2 checkBox m-auto rounded-2 border-success success d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box4" className="border border-2 checkBox m-auto rounded-2 border-warning warning d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box5" className="border border-2 checkBox m-auto rounded-2 border-danger danger d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box6" className="border border-2 checkBox m-auto rounded-2 border-success success d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box7" className="border border-2 checkBox m-auto rounded-2 border-warning warning d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box8" className="border border-2 checkBox m-auto rounded-2 border-warning warning d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                    <div id="box9" className="border border-2 checkBox m-auto rounded-2 border-danger danger d-flex justify-content-center align-items-center fw-bold" onClick={(e)=>playGame(e)}></div>
                </div>
                <p id="nextPlayerToPlay" className="text-success text-center"></p>
                <div className="mx-auto w-50 d-block btn-group">
                    <button className="btn btn-success ms-auto my-2" onClick={playMusic}>Play Sound</button>
                    <button className="btn btn-success me-auto my-2" onClick={pauseMusic}>Pause Sound</button>
                </div>
                <button className="btn btn-success d-block w-50 mx-auto my-2" onClick={continueGame}>Continue</button>
                <button className="btn btn-success d-block w-50 mx-auto my-2" onClick={restartGame}>Restart</button>
                <button className="btn btn-success d-block w-50 mx-auto my-2" onClick={resetGame}>Reset</button>
            </div>
            <div className="smallDeviceHeight2">
                {/* <marquee behavior="" direction=""><h1 className="mt-5 text-success">TIC TAC TOE GAME</h1></marquee> */}
                <table style={{width: '90%'}} className="text-center mt-5 mx-auto">
                    <thead>
                        <tr>
                            <td className="border border-2 border-success text-success">S/N</td>
                            <td className="border border-2 border-success text-success">PLAYER'S NAME</td>
                            <td className="border border-2 border-success text-success">SIGN</td>
                            <td className="border border-2 border-success text-success">SCORE</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-2 border-success text-success" id="fPSN"></td>
                            <td className="border border-2 border-success text-success" id="firstPlayer"></td>
                            <td className="border border-2 border-success text-success" id="firstSign"></td>
                            <td className="border border-2 border-success text-success" id="firstScore"></td>
                        </tr>
                        <tr>
                            <td className="border border-2 border-success text-success" id="sPSN"></td>
                            <td className="border border-2 border-success text-success" id="secondPlayer"></td>
                            <td className="border border-2 border-success text-success" id="secondSign"></td>
                            <td className="border border-2 border-success text-success" id="secondScore"></td>
                        </tr>
                    </tbody>
                </table>
                <marquee behavior="scroll" direction="left"><h4 id="winner"></h4></marquee>
            </div>
            <div className="continueDiv">
                <p>Click on continue game to continue</p>
            </div>
        </div>
        
    </>
  )
}

export default Game
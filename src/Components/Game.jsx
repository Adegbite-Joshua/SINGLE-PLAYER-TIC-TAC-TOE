import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Game = () => {
    // const [navigate, setnavigate] = useState(null)
    // const [allTictactoePlayer, setallTictactoePlayer] = useState(JSON.parse(localStorage.getItem('tictactoePlayerDetails')))
    // const [currentPlayer, setcurrentPlayer] = useState(Number(localStorage.getItem('currentTictactoePlayer')))
    // const [player, setplayer] = useState(localPlayers[currentPlayer]) 
    // const navigate = useNavigate();
    let localPlayers;
    let currentPlayer = JSON.parse(localStorage.getItem('currentTictactoePlayer'))
    // console.log(localPlayers);
    let players;
    let nextPlayer;
    // const [fetchs, setfetchs] = useState(0)
    // useEffect(() => {
    //     if (!localStorage.tictactoePlayerDetails || !localStorage.currentTictactoePlayer) {
    //         navigate('/')
    //     } else{

    //         saveData()
    //         localPlayers = JSON.parse(localStorage.getItem('tictactoePlayerDetails'))
    //         // let newallTictactoePlayer = JSON.parse(localStorage.getItem('tictactoePlayerDetails'))
    //         // setallTictactoePlayer(newallTictactoePlayer)
    //         showPlayers()
    //         // console.log(allTictactoePlayer);

    //     }
    // }, [fetchs])
    // const goback =()=>{
        
    // }

    const reRender = ()=>{
        localPlayers = JSON.parse(localStorage.getItem('tictactoePlayerDetails'))
        showPlayers()
    }
    useEffect(() => {
        reRender()
        continueDiv.style.display = 'none';
            // showPlayers()

        }, [])
        const nextPlayerDisplay =()=>{
            nextPlayerToPlay.innerText = `It is ${players[localPlayers[currentPlayer].nextPlayer]}'s turn to play, playing as ${localPlayers[currentPlayer].nextPlayerSign}`
        }
        // let details = localStorage.getItem('tictactoePlayerDetails')
        const showPlayers =()=>{
            players = [localPlayers[currentPlayer].name, 'Computer']
            nextPlayer = localPlayers[currentPlayer].nextPlayer;
            players = [ localPlayers[currentPlayer].name, 'computer']
            let score = localPlayers[currentPlayer].score
            fPSN.innerText = 1
            sPSN.innerText = 2
            firstSign.innerText = "X"
            secondSign.innerText = "O"
            localPlayers[currentPlayer].score[0] = score[0]
            localPlayers[currentPlayer].score[1] = score[1] 
            firstPlayer.innerText = players[0]
            secondPlayer.innerText = players[1]
            // console.log(player);
            nextPlayerDisplay()
            nextPlayer = localPlayers[currentPlayer].nextPlayer
            for (let i = 1; i <= 9; i++) {
                document.getElementById(`box${i}`).innerText = localPlayers[currentPlayer].tableDisplay[`box${i}`]
            }
        }
        const playGame =(e)=>{
            if (localPlayers[currentPlayer].nextPlayer == "X" && e.target.innerText == "" && localPlayers[currentPlayer].nextPlayer == 0) {
                e.target.innerText = "X"
                localPlayers[currentPlayer].tableDisplay[`${e.target.id}`] = "X"
                localPlayers[currentPlayer].nextPlayer = "O"
                // nextPlayerToPlay.innerText = `It is ${allChatUsers[receiverIndex].name}'s turn to play, playing as "O"`
                // nextPlayerDisplay()
            } else if (localPlayers[currentPlayer].nextPlayer == "O" && e.target.innerText == "" && localPlayers[currentPlayer].host == receiverIndex) {
                e.target.innerText = "O"
                localPlayers[currentPlayer].nextPlayer = "X"
                localPlayers[currentPlayer].tableDisplay[`${e.target.id}`] = "O"
                // nextPlayerToPlay.innerText = `It is ${allChatUsers[receiverIndex].name}'s turn to play, playing as "X"`
                // nextPlayerDisplay()
            }
            if (a1.innerText == "X" && b2.innerText == "X" && c3.innerText == "X" || a2.innerText == "X" && b2.innerText == "X" && c2.innerText == "X" || a3.innerText == "X" && b2.innerText == "X" && c1.innerText == "X" || b1.innerText == "X" && b2.innerText == "X" && b3.innerText == "X" || a1.innerText == "X" && a2.innerText == "X" && a3.innerText == "X" || c1.innerText == "X" && c2.innerText == "X" && c3.innerText == "X" || a1.innerText == "X" && b1.innerText == "X" && c1.innerText == "X" || a3.innerText == "X" && b3.innerText == "X" && c3.innerText == "X") {
                localPlayers[currentPlayer].score.starter = Number(localPlayers[currentPlayer].score.starter) + 5
                localPlayers[currentPlayer].nextPlayer = ""
                winner.innerText = `${allChatUsers[currentIndex].name} wins`
                // updateBoard()
            } else if (a1.innerText == "O" && b2.innerText == "O" && c3.innerText == "O" || a2.innerText == "O" && b2.innerText == "O" && c2.innerText == "O" || a3.innerText == "O" && b2.innerText == "O" && c1.innerText == "O" || b1.innerText == "O" && b2.innerText == "O" && b3.innerText == "O" || a1.innerText == "O" && a2.innerText == "O" && a3.innerText == "O" || c1.innerText == "O" && c2.innerText == "O" && c3.innerText == "O" || a1.innerText == "O" && b1.innerText == "O" && c1.innerText == "O" || a3.innerText == "O" && b3.innerText == "O" && c3.innerText == "O") {
                allChatUserslocalPlayers[currentPlayer].tableDisplay[allChatUsers[receiverIndex].chats[2][all][3]].score.joined = Number(localPlayers[currentPlayer].score.joined) + 5
                localPlayers[currentPlayer].nextPlayer = ""
                winner.innerText = `${allChatUsers[receiverIndex].name} wins`
                // updateBoard()
            } else if (a1.innerText != "" && a2.innerText != "" && a3.innerText != "" && b1.innerText != "" && a2.innerText != "" && b3.innerText != "" && c1.innerText != "" && c2.innerText != "" && c3.innerText != "") {
                winner.innerText = `Draw 😰`
            }
                // checkWinning()
                saveData()
                computerPlaying()
                // setallTictactoePlayer(allTictactoePlayer)
            // }
            // setTimeout(computerPlaying, 900) 
        }


        const checkWinning =()=>{
            if (box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box2.innerText=="X" && box2.innerText=="X" && box2.innerText=="X" || box3.innerText=="X" && box2.innerText=="X" && box1.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box2.innerText=="X" && box3.innerText=="X" || box1.innerText=="X" && box1.innerText=="X" && box1.innerText=="X" || box3.innerText=="X" && box3.innerText=="X" && box3.innerText=="X") {
                localPlayers[currentPlayer].score[0] = Number(localPlayers[currentPlayer].score[0])+5
                localPlayers[currentPlayer].nextPlayerSign = ""
                winner.innerText = `${players[0]} wins`
            } else if (box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box2.innerText=="O" && box2.innerText=="O" && box2.innerText=="O" || box3.innerText=="O" && box2.innerText=="O" && box1.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box2.innerText=="O" && box3.innerText=="O" || box1.innerText=="O" && box1.innerText=="O" && box1.innerText=="O" || box3.innerText=="O" && box3.innerText=="O" && box3.innerText=="O") {
                localPlayers[currentPlayer].score[1] = Number(localPlayers[currentPlayer].score[1])+5
                localPlayers[currentPlayer].nextPlayerSign = ""
                winner.innerText = `${players[1]} wins`
            } else if (box1.innerText!=""&&box2.innerText!=""&&box3.innerText!=""&&box1.innerText!=""&&box2.innerText!=""&&box3.innerText!=""&&box1.innerText!=""&&box2.innerText!=""&&box3.innerText!="") {
                winner.innerText = `Draw 😰`
            }
            saveData()
        }
        const saveData =()=>{
            // setallTictactoePlayer(localPlayers)
            localStorage.setItem('tictactoePlayerDetails', JSON.stringify(localPlayers))
            reRender()
        }
        const computerPlaying =()=>{
            let randonNumber = Math.round(Math.random()*9)
            console.log(randonNumber)
            if (localPlayers[currentPlayer].tableDisplay[`box${randonNumber}`] == "" && localPlayers[currentPlayer].nextPlayer != "") {
                localPlayers[currentPlayer].tableDisplay[`box${randonNumber}`] == "O"
                localPlayers[currentPlayer].nextPlayer = 0
                localPlayers[currentPlayer].nextPlayerSign = "X"
                nextPlayerToPlay.innerText = `It is ${players[localPlayers[currentPlayer].nextPlayer]}'s turn to play, playing as ${localPlayers[currentPlayer].nextPlayerSign}`
                checkWinning()
            } else if (localPlayers[currentPlayer].tableDisplay[`box${randonNumber}`] != "") {
                computerPlaying()
            } else if (localPlayers[currentPlayer].nextPlayer == "") {
                continueDiv.style.display = 'block';
                setTimeout(()=>continueDiv.style.display = 'none', 2000)
            }
            saveData()
        }
        // for (let i = 0; i < 100; i++) {
        //     let randonNumber = Math.round(Math.random()*9)
        //     if (randonNumber >= 9) {
        //         console.log(randonNumber)
        //     }
        // }
        const continueGame =()=>{
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
            winner.innerText = ""
            nextPlayer = "X"
        }
        const restartGame =()=>{
            localPlayers[currentPlayer].score[0] = 0
            localPlayers[currentPlayer].score[1] = 0
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
            winner.innerText = ""
            nextPlayer = "X"
        }
        const resetGame =()=>{
            localPlayers[currentPlayer].score[0] = 0
            localPlayers[currentPlayer].score[1] = 0
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
           localPlayers[currentPlayer].tableDisplay[`box1`] = ""
           localPlayers[currentPlayer].tableDisplay[`box2`] = ""
           localPlayers[currentPlayer].tableDisplay[`box3`] = ""
            winner.innerText = ""
            localPlayers[currentPlayer].nextPlayer = "X"
            // localStorage.removeItem("tictactoePlayers")
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
            <div className="continueDiv" id='continueDiv'>
                <p>Click on continue game to continue</p>
            </div>
        </div>
        
    </>
  )
}

export default Game
import React from 'react'

const Game = () => {
        let players = [
            'Ade',
            'Kola'
        ]
        // const showPlayers =()=>{
        //     fPSN.innerText = 1
        //     sPSN.innerText = 2
        //     firstSign.innerText = "X"
        //     secondSign.innerText = "O"
        //     firstScore.innerText = 0
        //     secondScore.innerText = 0 
        //     firstPlayer.innerText = players[0]
        //     secondPlayer.innerText = players[1]
        //     let nextPlayer = "X"
        //     nextPlayerToPlay.innerText = `It is ${players[0]}'s turn to play, playing as "X"`
        // }
        const playGame =(e)=>{
            if (boxa1.innerText=="X" && boxb2.innerText=="X" && boxc3.innerText=="X" || boxa2.innerText=="X" && boxb2.innerText=="X" && boxc2.innerText=="X" || boxa3.innerText=="X" && boxb2.innerText=="X" && boxc1.innerText=="X" || boxb1.innerText=="X" && boxb2.innerText=="X" && boxb3.innerText=="X" || boxa1.innerText=="X" && boxa2.innerText=="X" && boxa3.innerText=="X" || boxc1.innerText=="X" && boxc2.innerText=="X" && boxc3.innerText=="X" || boxa1.innerText=="X" && boxb1.innerText=="X" && boxc1.innerText=="X" || boxa3.innerText=="X" && boxb3.innerText=="X" && boxc3.innerText=="X" || boxa1.innerText=="O" && boxb2.innerText=="O" && boxc3.innerText=="O" || boxa2.innerText=="O" && boxb2.innerText=="O" && boxc2.innerText=="O" || boxa3.innerText=="O" && boxb2.innerText=="O" && boxc1.innerText=="O" || boxb1.innerText=="O" && boxb2.innerText=="O" && boxb3.innerText=="O" || boxa1.innerText=="O" && boxa2.innerText=="O" && boxa3.innerText=="O" || boxc1.innerText=="O" && boxc2.innerText=="O" && boxc3.innerText=="O" || boxa1.innerText=="O" && boxb1.innerText=="O" && boxc1.innerText=="O" || boxa3.innerText=="O" && boxb3.innerText=="O" && boxc3.innerText=="O") {
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
                if (boxa1.innerText=="X" && boxb2.innerText=="X" && boxc3.innerText=="X" || boxa2.innerText=="X" && boxb2.innerText=="X" && boxc2.innerText=="X" || boxa3.innerText=="X" && boxb2.innerText=="X" && boxc1.innerText=="X" || boxb1.innerText=="X" && boxb2.innerText=="X" && boxb3.innerText=="X" || boxa1.innerText=="X" && boxa2.innerText=="X" && boxa3.innerText=="X" || boxc1.innerText=="X" && boxc2.innerText=="X" && boxc3.innerText=="X" || boxa1.innerText=="X" && boxb1.innerText=="X" && boxc1.innerText=="X" || boxa3.innerText=="X" && boxb3.innerText=="X" && boxc3.innerText=="X") {
                    firstScore.innerText = Number(firstScore.innerText)+5
                    nextPlayer = ""
                    winner.innerText = `${players[0]} wins`
                } else if (boxa1.innerText=="O" && boxb2.innerText=="O" && boxc3.innerText=="O" || boxa2.innerText=="O" && boxb2.innerText=="O" && boxc2.innerText=="O" || boxa3.innerText=="O" && boxb2.innerText=="O" && boxc1.innerText=="O" || boxb1.innerText=="O" && boxb2.innerText=="O" && boxb3.innerText=="O" || boxa1.innerText=="O" && boxa2.innerText=="O" && boxa3.innerText=="O" || boxc1.innerText=="O" && boxc2.innerText=="O" && boxc3.innerText=="O" || boxa1.innerText=="O" && boxb1.innerText=="O" && boxc1.innerText=="O" || boxa3.innerText=="O" && boxb3.innerText=="O" && boxc3.innerText=="O") {
                    secondScore.innerText = Number(secondScore.innerText)+5
                    nextPlayer = ""
                    winner.innerText = `${players[1]} wins`
                } else if (boxa1.innerText!=""&&boxa2.innerText!=""&&boxa3.innerText!=""&&boxb1.innerText!=""&&boxa2.innerText!=""&&boxb3.innerText!=""&&boxc1.innerText!=""&&boxc2.innerText!=""&&boxc3.innerText!="") {
                    winner.innerText = `Draw 😰`
                }
            }
                
        }
        const continueGame =()=>{
            boxa1.innerText = ""
            boxa2.innerText = ""
            boxa3.innerText = ""
            boxb1.innerText = ""
            boxb2.innerText = ""
            boxb3.innerText = ""
            boxc1.innerText = ""
            boxc2.innerText = ""
            boxc3.innerText = ""
            winner.innerText = ""
            nextPlayer = "X"
        }
        const restartGame =()=>{
            firstScore.innerText = 0
            secondScore.innerText = 0
            boxa1.innerText = ""
            boxa2.innerText = ""
            boxa3.innerText = ""
            boxb1.innerText = ""
            boxb2.innerText = ""
            boxb3.innerText = ""
            boxc1.innerText = ""
            boxc2.innerText = ""
            boxc3.innerText = ""
            winner.innerText = ""
            nextPlayer = "X"
        }
        const resetGame =()=>{
            firstScore.innerText = 0
            secondScore.innerText = 0
            boxa1.innerText = ""
            boxa2.innerText = ""
            boxa3.innerText = ""
            boxb1.innerText = ""
            boxb2.innerText = ""
            boxb3.innerText = ""
            boxc1.innerText = ""
            boxc2.innerText = ""
            boxc3.innerText = ""
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
        <div className='w-50 vh-100 d-block mx-auto border border-2'>
            <div className="smallDeviceHeight">
                <div style={{height: '300px', width: '300px', display: 'flex', flexWrap: 'wrap'}} className="mx-auto">
                    <div id="boxa1" className="border border-2 checkBox m-auto rounded-2 border-danger danger d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxa2" className="border border-2 checkBox m-auto rounded-2 border-success success d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxa3" className="border border-2 checkBox m-auto rounded-2 border-success success d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxb1" className="border border-2 checkBox m-auto rounded-2 border-warning warning d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxb2" className="border border-2 checkBox m-auto rounded-2 border-danger danger d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxb3" className="border border-2 checkBox m-auto rounded-2 border-success success d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxc1" className="border border-2 checkBox m-auto rounded-2 border-warning warning d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxc2" className="border border-2 checkBox m-auto rounded-2 border-warning warning d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                    <div id="boxc3" className="border border-2 checkBox m-auto rounded-2 border-danger danger d-flex justify-content-center align-items-center fw-bold" onClick={()=>playGame(event)}></div>
                </div>
                <p id="nextPlayerToPlay" className="text-success text-center"></p>
                <div className="mx-auto w-50 d-block btn-group">
                    <button className="btn btn-success ms-auto my-2" onClick={()=>playMusic()}>Play Sound</button>
                    <button className="btn btn-success me-auto my-2" onClick={()=>pauseMusic()}>Pause Sound</button>
                </div>
                <button className="btn btn-success d-block w-50 mx-auto my-2" onClick={()=>continueGame()}>Continue</button>
                <button className="btn btn-success d-block w-50 mx-auto my-2" onClick={()=>restartGame()}>Restart</button>
                <button className="btn btn-success d-block w-50 mx-auto my-2" onClick={()=>resetGame()}>Reset</button>
            </div>
        </div>
        {/* {showPlayers()} */}
    </>
  )
}

export default Game
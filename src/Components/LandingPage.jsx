import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();
  const [allTictactoePlayer, setallTictactoePlayer] = useState([])
  const [foundUser, setfoundUser] = useState(false)
  useEffect(() => {
    document.querySelector('input').focus()
    if (localStorage.allTictactoePlayer) {
      let newallTictactoePlayer = JSON.parse(localStorage.getItem('tictactoePlayerDetails'))
      setallTictactoePlayer(newallTictactoePlayer)
    }
    console.log(allTictactoePlayer)
  }, [])
  
  const startGame =()=>{
    let playerName = document.querySelector('input').value.trim()
    if (playerName!="") {
      allTictactoePlayer.map((user, index)=>{
        if (user.name==playerName) {
          localStorage.setItem('currentTictactoePlayer', index);
          let newfoundUser = true;
          setfoundUser(newfoundUser)
          // break;
        }
      })
      if (foundUser) {
        // navigate('/dashboard')
      } else{
        let newPlayerDetails = {
          name: playerName,
          score: [
            0,
            0
          ],
          tableDisplay: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ]
        }
        // allTictactoePlayer.push(newPlayerDetails)
        setallTictactoePlayer([...allTictactoePlayer, newPlayerDetails])
        localStorage.setItem('tictactoePlayerDetails', JSON.stringify(allTictactoePlayer))
        localStorage.setItem('currentTictactoePlayer', allTictactoePlayer.length);
        // navigate('/dashboard')
      }
    } else{
      document.querySelector('p').style.display = "block";
      setTimeout(()=>document.querySelector('p').style.display = "none", 3000);
      document.querySelector('input').focus()
    }
  }

  return (
    <>
        <div className="w-100 vh-100 bg-info d-flex align-items-center justify-content-center">
          {/* <div style={{aspectRatio: '1'}} className='w-50 d-block mx-auto border border-2'> */}
              <div className='nameDiv w-50 h-50 d-block mx-auto border border-2 d-flex align-items-center justify-content-center flex-column px-5'>
                  <p className='text-light text-center'>Enter your name to crate an account or continue your game</p>
                  <input type="text" placeholder='Enter your name' className='form-control my-2 text-center'/>
                  <p style={{display: 'none'}} className='text-light'>Please input a name to continue</p>
                  <button onClick={startGame} className="btn btn-warning w-100">Start</button>
              </div>
          {/* </div> */}
        </div>
    </>
  )
}

export default LandingPage
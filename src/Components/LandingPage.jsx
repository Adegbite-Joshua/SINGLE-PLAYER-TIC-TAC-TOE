import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.querySelector('input').focus()
  }, [])
  
  const startGame =()=>{
    let playerName = document.querySelector('input').value.trim()
    if (playerName!="") {
      let newPlayerDetails = {
        name: playerName,
        score: {
          player: 0,
          computer: 0
        },
        tableDisplay: {
          
        }

      }
      localStorage.setItem('tictactoePlayerName', playerName)
      navigate('/dashboard')
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
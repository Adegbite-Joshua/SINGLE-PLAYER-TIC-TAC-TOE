import React from 'react'

const LandingPage = () => {
  return (
    <>
        <div className='w-50 vh-100 d-block mx-auto border border-2'>
            <form action="">
                <input type="text" placeholder='Enter your name' className='form-control my-2'/>
                <button className="btn btn-success">Start</button>
            </form>
        </div>
    </>
  )
}

export default LandingPage
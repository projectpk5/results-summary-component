import React from 'react'
import reaction from '../../../assets/images/icon-reaction.svg'
import memory from '../../../assets/images/icon-memory.svg'
import verbal from '../../../assets/images/icon-verbal.svg'
import visual from '../../../assets/images/icon-visual.svg'


const Dashmain = () => {
  return (
    <>
    <div className="d-flex flex-sm-column flex-md-row align-items-center justify-content-center min-vh-100">
        <div className="d-flex flex-column align-items-center rounded-5 gap-3 p-2 h-100"
         style={{ 
            backgroundImage: "linear-gradient(to bottom,#4D21C9,#2521C9)", 
            color: "white",
            width: "17rem"
            }}>
            <p className="my-3" style={{color: "#ECF2FF"}}>Your result</p>
            <br />
            <div className="d-flex flex-column align-items-center p-3 rounded-circle" 
                style={{backgroundColor: "#7755FF", color: "white"}}>
                <h1 style={{color: "#F3F4FD"}}>76</h1>
                <p style={{color: "#ECF2FF"}}>out of 100</p>
            </div>
            <div className="d-flex flex-column align-items-center text-center my-3">
                <br />
                <h3  style={{color: "#F3F4FD"}}>Great</h3>
                <p className = "my-3 text-wrap text-center" style={{color: "#CAC9FF"}}>You scored higher than 65% of people who have taken these tests</p>
            </div>
        </div>


        <div className="d-flex flex-column rounded-5 gap-3 p-3 h-100"
            style={{ backgroundColor:"white", width: "17rem" }}>
                <h4 className='my-3'>Summary</h4>
                <div className="d-flex justify-content-between p-2 rounded-3"
                    style={{ backgroundColor: "#FFF6F6"}}>
                        <div className="d-flex align-items-center">
                            <img src={reaction} alt=""/>
                            <p className='mb-0' style={{color: "#FF5555"}}>&nbsp; Reaction</p>
                        </div>
                    <p className='mb-0'>80&nbsp;/100</p>
                </div>
                
                <div className="d-flex justify-content-between p-2 rounded-3"
                    style={{ backgroundColor: "#FFFBF4"}}>
                        <div className="d-flex align-items-center">
                            <img src={memory} alt=""/>
                            <p className='mb-0' style={{color: "#FFB21E"}}>&nbsp; Memory</p>
                        </div>
                    <p className='mb-0'>92&nbsp;/100</p>
                </div>

                <div className="d-flex justify-content-between p-2 rounded-3"
                    style={{ backgroundColor: "#F2FCF9"}}>
                        <div className="d-flex align-items-center">
                            <img src={verbal} alt=""/>
                            <p className='mb-0' style={{color: "#00BB8F"}}>&nbsp; Verbal</p>
                        </div>
                    <p className='mb-0'>61&nbsp;/100</p>
                </div>

                <div className="d-flex justify-content-between p-2 rounded-3"
                    style={{ backgroundColor: "#F3F4FD"}}>
                        <div className="d-flex align-items-center">
                            <img src={visual} alt=""/>
                            <p className='mb-0' style={{color: "#1125D6"}}>&nbsp; Visual</p>
                        </div>
                        <p className='mb-0'>73&nbsp;/100</p>
                </div>

                <div className="btn btn-dark rounded-pill my-3">Continue</div>
            </div>
    </div>
        
    </>
  )
}

export default Dashmain
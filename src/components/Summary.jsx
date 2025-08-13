import React from 'react'
import reaction from '../../../assets/images/icon-reaction.svg'
import memory from '../../../assets/images/icon-memory.svg'
import verbal from '../../../assets/images/icon-verbal.svg'
import visual from '../../../assets/images/icon-visual.svg'


const Summary = () => {
  return (
        <>
            <div className="container d-flex flex-column rounded-5 gap-3 p-3"
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
        </>
  )
}

export default Summary
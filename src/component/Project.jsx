import React from 'react'
import '../style/Project.css'
import Project1img from '../image/Project1img'
import Project2img from '../image/Project2img'
import Project3img from '../image/Project3img'

const Project = () => {
    return (
        <>

            <div className='headline' id='project'>Our Work</div>
            <div className="p-main">

                {/* ..............................Project 1.................................... */}

                <div className="p-content">
                    <div className="p-info">
                        <div className='topic'>To Do List - link</div>
                        <div className='info-m'>
                            <div className='info-1'>basic info direct</div>
                            <div className='info-2'>advantage</div>
                        </div>
                        <div className='src-code'>source code</div>
                    </div>
                    <div className="p-img">
                        <Project1img />
                    </div>
                </div>

                {/* ..............................Project 2.................................... */}

                <div className="p-content">
                    <div className="p-info">
                        <div className='topic'>Project 2 - link</div>
                        <div className='info-m'>
                            <div className='info-1'>basic info direct</div>
                            <div className='info-2'>advantage</div>
                        </div>
                        <div className='src-code'>source code</div>
                    </div>
                    <div className="p-img">
                        <Project2img />
                    </div>
                </div>

                {/* ..............................Project 3.................................... */}

                <div className="p-content">
                    <div className="p-info">
                        <div className='topic'>Project 3 - link</div>
                        <div className='info-m'>
                            <div className='info-1'>basic info direct</div>
                            <div className='info-2'>advantage</div>
                        </div>
                        <div className='src-code'>source code</div>
                    </div>
                    <div className="p-img">
                        <Project3img />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project

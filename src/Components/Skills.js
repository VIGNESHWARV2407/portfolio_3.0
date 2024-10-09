import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
function Skills() {
    return (
        <div style={{marginTop:'5%'}}>
            {/* <div class="border" id="skills"></div> */}

            <h1  id="skills">Skills Known</h1>
            <div class="skills_known">
                <h2>Programming Language</h2>

                <div className='prg_prog'>
                    <div>
                        <h4>C</h4>
                        <ProgressBar completed={90} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF6347' />
                    </div>
                    <div>
                        <h4>C++</h4>
                        <ProgressBar completed={80} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF69B4' />
                    </div>
                    <div>
                        <h4>PYTHON</h4>
                        <ProgressBar completed={40} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#f5642a' />
                    </div>
                    <div>
                        <h4>JAVA</h4>
                        <ProgressBar completed={30} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF4500' />
                    </div>
                </div>
                <h2>Technologies</h2>

                <div className='tech_prog'>
                    <div>
                        <h4>HTML& CSS</h4>
                        <ProgressBar completed={90} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FFD700' />
                    </div>
                    <div>
                        <h4>JS</h4>
                        <ProgressBar completed={70} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#2384c4' />
                    </div>
                    <div>
                        <h4>REACT JS</h4>
                        <ProgressBar completed={60} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#00BFFF' />
                    </div>
                    <div>
                        <h4>ANGULAR JS</h4>
                        <ProgressBar completed={30} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#9400D3' />
                    </div>
                    <div>
                        <h4>NEXT JS</h4>
                        <ProgressBar completed={50} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#FF8C00' />
                    </div>
                    <div>
                        <h4>QT</h4>
                        <ProgressBar completed={60} labelAlignment='center' transitionDuration='2s' animateOnRender="true" bgColor='#32CD32' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills

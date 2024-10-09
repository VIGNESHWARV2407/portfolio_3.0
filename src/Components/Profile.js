import React from 'react'
import CVbtn from './CV_btn'
function Profile() {
    return (
        <div>
            <div id='home'></div>
            <div className='prof_det'> 
                {/* anime */}
                <div className='prof_anime' style={{marginTop:"3.5%"}}>
                <div className='name_color_border'>
                <div className='name' id='anime'></div>
                </div>  
                </div>
                
                {/* name board */}
                <div className='prof_cv' style={{marginTop:"3.5%"}}>
                 <div className='name_color_border'>
                <div className='name'>
                    <h1>VIGNESHWAR V</h1>
                    <p>WEB & SOFTWARE DEVELOPER</p>
                    <CVbtn/>
                </div>
                </div>   
                </div>
                
                
                {/* photo */}
                <div className='prof_img' style={{marginTop:"3.5%"}}>
                <div className='name_color_border'>
                <div className='name' id='img'></div>
                </div>  
                </div>
            </div>
            
        </div>
    )
}

export default Profile

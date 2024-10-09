import React from 'react'
import Portfolio from '../Proj_Dialog/Portfolio';
import Spd from '../Proj_Dialog/Spd';
import Playblue from '../Proj_Dialog/Playblue';
import QRcode from '../Proj_Dialog/QRcode';
import Oce from '../Proj_Dialog/Oce';
import EventScheduler from '../Proj_Dialog/EventScheduler';
function Projects() {
    return (
            <div class="projects"  id="projects">
                <h1>Projects</h1>
                <div class="proj">
                    <div class="project" id="pf">
                        <Portfolio />
                        {/* add portfolio 2.0 in advanced project in html portfolio */}
                    </div>
                    <div class="project" id="spd">
                        <Spd />
                    </div>
                    <div class="project" id="pl">
                        <Playblue />
                    </div>
                    <div class="project" id="qr">
                        <QRcode />
                    </div>
                    <div class="project" id="oce">
                        <Oce />
                    </div>
                    <div class="project" id="es">
                        <EventScheduler />
                    </div>
                </div>
                
            </div>
    )
}

export default Projects

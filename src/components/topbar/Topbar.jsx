import React from 'react'
import './topbar.css'
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">ADMIN</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://www.finearts.cmu.ac.th/wp-content/uploads/2021/07/blank-profile-picture-973460_1280-1.png" alt="" className="topAvatar" />
            </div>
        </div>
        
    </div>
  )
}

export default Topbar
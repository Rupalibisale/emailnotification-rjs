import React, { useState } from 'react';
// import './Studentlogin.css';
import './Newtry.css';
import Studentlogin from './Studentlogin';
import Parentlogin from './Parentlogin';
 import Mobileapp from './Mobileapp';
 import Appadvanced from './Appadvanced';

function Newtry() {
  const [displayedSection, setDisplayedSection] = useState('student'); // 'student' is the default section

  const handleClick = (section) => {
    setDisplayedSection(section);
  };

  return (
    <>
      <div className='mainx-div'>
        <div className="yy">
          <ul>
            <li>Organization </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
            <li> Manage Menus </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
            <li> Manage Student/Parent Mobile App Menu</li>
          </ul>
        </div>
        <hr></hr>
        <div className="mm">
          <p>Manage Student/Parent Mobile App Menu</p>
        </div>
        <div className='pagex-div'>
          <div className='containerx-div'>
            <div className="btn-group" role="tablist">
              <button onClick={() => handleClick('student')}>Student Login Menus</button>
              <button onClick={() => handleClick('parent')}>Parent Login Menus</button>
              <button onClick={() => handleClick('mobileapp')}>Mobile app Banners</button>
              <button onClick={() => handleClick('appadvanced')}>App Advanced Setting</button>
            </div>
          </div>
        </div>
      </div>
    
      {displayedSection === 'student' && (
        // Render content for Student Login Menus
        <div className="tablex-x">
          {/* ... Your Student Login Menus content ... */}
          <Studentlogin/>

        </div>
      )}
      {displayedSection === 'parent' && (
        // Render the Parentlogin component when the "Parent Login Menus" button is clicked
        <Parentlogin />
      )}
      {displayedSection === 'mobileapp' && (
        // Render content for Mobile app Banners
        <div className="tablex-x">
          {/* ... Your Mobile app Banners content ... */}

        <Mobileapp/>
        </div>
      )}
      {displayedSection === 'appadvanced' && (
        // Render content for App Advanced Setting
        <div className="tablex-x">
           {/* ... Your App Advanced Setting content ... */}
             <Appadvanced/>

        </div>
      )}
    
    </>
  );
}

export default Newtry;

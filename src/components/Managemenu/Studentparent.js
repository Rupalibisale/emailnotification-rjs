
import React, { useState } from 'react';
import Studentlogin from './Studentlogin';
import Parentlogin from './Parentlogin';
import Mobileapp from './Mobileapp';
import Appadvanced from './Appadvanced';

const Studentparent = () => {
   const[studentlogin,setStudentlogin]= useState(true);
   const[parentlogin, setParentlogin] = useState(false);
   const[mobileapp,setMobileapp] = useState (false);
   const[appadvanced,setAppadvanced] = useState (false);

  return (
    <>
    <div className='divbutton'>
       <button onClick={() => {setStudentlogin(!studentlogin);setParentlogin(false); setAppadvanced(false); setMobileapp(false)}}>Student Login Menus</button>
       <button onClick={() => {setParentlogin(!parentlogin);setStudentlogin(false); setAppadvanced(false); setMobileapp(false)}}>Parent Login Menus</button>
       <button onClick={() =>{setMobileapp(!mobileapp);setStudentlogin(false);setParentlogin(false); setAppadvanced(false)}}>Mobile app Banners</button>
       <button onClick={() => {setAppadvanced(!appadvanced);setMobileapp(false);setStudentlogin(false);setParentlogin(false)}}>App Advanced Setting</button>
       </div>
       <div className='dashmain1'> 
       {studentlogin && <Studentlogin/>}
       {parentlogin && <Parentlogin/>}
       {mobileapp && <Mobileapp/>}
       {appadvanced && <Appadvanced/>}
       
</div>

    </>
  )
}

export default Studentparent;
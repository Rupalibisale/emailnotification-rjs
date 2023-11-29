import React, { useState } from 'react';
import './Enrollments.css';
import Emailvalidation from './Emailvalidation';
import StudentTransfer from './StudentTransfer';
import GroupPhotos from './GroupPhotos';

const  Enrollments = () => {
    const[move,setMove] = useState(false);

const  Funenroll = ( ) => {
    const[email,setEmail] = useState(false);
    const[transfer,setTransfer] = useState(false);
    const[photos,setPhotos] = useState(false);

  return (
    <>
    <div className='head'>
        <button onClick={ () => {setEmail(!email); setTransfer(false); setPhotos(false);}}>Email Syntax Validator</button>
        <button onClick={ ()=> { setTransfer(!transfer); setEmail(false); setPhotos(false);}}>Bulk Student Branch Transfer</button>
        <button onClick={ ()=> { setPhotos(!photos); setEmail(false); setTransfer(false); }}>Class Group Photos</button>
    </div>
    <div>
        { email && <Emailvalidation />}
        { transfer && <StudentTransfer />}
        { photos && <GroupPhotos />}

    </div>
    </>
  );
};
return(
    <div>
   
        <div className='nav-contain' onClick={ ()=> {setMove(!move);}}>Enrollments</div>
    
    <div>
        { move && <Funenroll /> }
    </div>
    </div>
);
};
export default Enrollments;
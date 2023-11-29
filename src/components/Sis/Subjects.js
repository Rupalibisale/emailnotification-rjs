import React, {useState} from 'react';
import './Ibcam.css';

import Ibsub from './Ibsub';
import Camsub from './Camsub';

function Subjects(){

    const[move,setMove] = useState(false);

    const  Funenroll = ( ) => {
        const[ib,setIb] = useState(false);
        const[cam,setCam] = useState(false);

    return(
        <>
        
        <div className="head">
            <button>Subject Creation</button>
            <button onClick={ () => {setIb(!ib); setCam(false);}}>Ib Creation</button>
            <button onClick={ () => {setCam(!cam); setIb(false);}}>Cambridge Subject</button>
        </div>

        <div>
        { ib && <Ibsub />}
        { cam && <Camsub />}

    </div>
        
        
        </>
    );

};

return(
    <div>

<div className='nav-contain' onClick={ ()=> {setMove(!move);}}><h3>Subjects</h3></div>

<div>
        { move && <Funenroll /> }
    </div>

    </div>
    
);
};



    
export default Subjects;
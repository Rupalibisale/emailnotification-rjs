import React, { useState } from 'react';
import Modal from 'react-modal';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 


function Rupali() {
    const { quill, quillRef } = useQuill();

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  return (
    <>
       <button onClick={openModal}>Add Form</button>
    
     <Modal
     isOpen={isModalOpen}
     onRequestClose={closeModal}  
     contentLabel="Add Store Modal"
   >


       <div >
         <label>Thank you Note :</label>
         <div style={{ width: 500, height: 300 }}>
                <div ref={quillRef} />
            </div>
           </div>
 
      
     
   </Modal>
   </>
  );
};

export default Rupali;
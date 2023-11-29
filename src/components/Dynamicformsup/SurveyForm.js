import React, { useState } from 'react';
import './SurveyForm.css';
// import AddFormDiv from './AddFormDiv';
import Modal from 'react-modal';
import { useQuill } from 'react-quilljs';


function SurveyForm() {
    const [yearof, setYearof] = useState(undefined);
    // const [addform, setAddform] = useState(false);
    // const closeForm = () => setAddform(false);


    const { quillRef } = useQuill();
    // const { quill, quillRef } = useQuill();


    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
    };

  
    const closeModal = () => {
      setModalOpen(false);
    };
    
  
    const yearsof = ["2023-2024", "2022-2023", "2021-2022", "2020-2021"];
    const onYearofChangeHandler = (event) => {
      setYearof(event.target.value);
    };

    console.log(yearof);
  return (
    <>
    <div className="survey-container">
    <div className="survey-nav">
      <ul className="survey-list">
        <li>
          {/* <a href="#" className="survey-list-1">
            Dynamic forms
          </a> */}
          <button className="survey-list-1">
  Dynamic forms
</button>
        </li>{" "}
        &nbsp; /&nbsp;
        <li>
        Dynamic Forms
        </li>{" "}
        &nbsp; /&nbsp;
        <li>
        Survey Forms
        </li>
      </ul>
    </div>

    <div className="heading">
      <h3>Survey Forms</h3>
    </div>
    <div className="survey-subcontain">
        <p>Academic Year</p>
        <select onChange={onYearofChangeHandler}>
          <option>-Select Year-</option>
          {yearsof.map((yearof, index) => {
            return <option key={index}>{yearof}</option>;
          })}
        </select>
        <hr></hr>
        <p>
          Note:&nbsp;Survey Form which is not assigned to any class will be shown in call to parent in MCB Smart School App.
        </p>
        <button onClick={openModal}>Add Form</button>
        <table>
                  <tr>
                     <th>Sno</th>
                     <th>Form Name</th>
                     <th>Date</th>
                 </tr>
            </table>
        </div>
      
    </div>
    <Modal
    isOpen={isModalOpen}
    onRequestClose={closeModal}  style={{
        content: {
            width: '600px', 
            height: '600px', 
            margin: 'auto', 
            backgroundColor: "rgb(228, 229, 229)",
            
        }
    }}
    contentLabel="Add Store Modal"
  >
    <h4 className="text-primary">Add Store</h4>
    <hr></hr>
    
      <label class="col-sm-4 col-form-label">Store Name :</label>
      <input  type="text" />
      <br />
  
      <label class="col-sm-4 col-form-label">Address1 :</label>
      <input  type="text" />
      <br />
     
      <input  type="text" />
      <br />

      <label class="col-sm-4 col-form-label">Address2 :</label>
      <input  type="text" />
      <br />
      <div className='col-sm-4 col-form-label'>
              <label>Thank you
                Note :</label>
              <div style={{ width: 100, height: 50 }}>
                <div ref={quillRef} />
            </div>
          </div>

      <label class="col-sm-4 col-form-label">Pin Code :</label>
      <input  type="text" />
      <br />
    
      <label class="col-sm-4 col-form-label">Mobile No :</label>
      <input  type="text" />
      <br />

      <label class="col-sm-4 col-form-label">Land Line :</label>
      <input  type="text" />
      <br />
    
      <label class="col-sm-4 col-form-label">Email ID :</label>
      <input  type="text" />
      <br />
      
      <label class="col-sm-4 col-form-label" for="sel1">Billing Account:</label>
      <select id="sel1" name="sellist1">
    <option>Select Fee Account</option>
    <option>xx</option>
    <option>xx</option>
    <option>xx</option>
  </select>         
      <br />

      <div className="fbutton"> 
      <button type="submit" className="btn btn-primary">Save</button>
      <button type="button" class="btn btn-secondary" onClick={closeModal}>Cancel</button>
      </div>
    
  </Modal>
 
  </>
  )
}

export default SurveyForm;
import React, {useState} from 'react';
import './Storesall.css';
import Modal from 'react-modal';
function Instorea(){

    const [isModalOpen, setModalOpen] = useState(false);
    const [displayedSection, setDisplayedSection] = useState('student'); // 'student' is the default section
    const [isAdditionalFormOpen, setAdditionalFormOpen] = useState(false);
    const [isSecondFormOpen, setSecondFormOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openAdditionalForm=()=>{
    setAdditionalFormOpen(true);

  }
  

  const openSecondForm = () =>{
      setSecondFormOpen(true);
  }

  const handleClick = (section) => {
    setDisplayedSection(section);
  };


    
    return(
        <>
        <div className="mainp">
          
            <div className="zx">
                <ul>
                <li>Inventory </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
                <li> Stores </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
                <li> Create Stores</li>
                </ul>
            </div>

        <div className="mm">
          <h3>Inventory Stores</h3>
        </div>

        <div className="bb">
        <div className="divbutton">
            <button onClick={() => handleClick('Storecreation')}>Store Creation</button>
            <button onClick={() => handleClick('Assignstore')}>Assign Store to Store Incharge</button>
            <button onClick={() => handleClick('Stockchecking')}>Store Cheacking Setting</button>

        </div>
        </div>
        </div>
        

        {displayedSection === 'Storecreation' && (

<div className="Diff">
        <div className="btnadd">
        <span><button type="button" className="btn btn-primary" onClick={openModal}>Add Store</button></span>
        <span><input  className="inputt" type="text" placeholder="Search in table"></input></span>
        </div>


        <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>S.No. </th>
          <th>Store Name</th>
          <th>Billing Account</th>
          <th>Branch </th>
          <th>Branch Fee Account</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">1</td>
          <td rowspan="2">Ethiken Education Society   
                <i class="fa-regular fa-pen-to-square"></i><br></br> 
          Address: 9-13-59 Mahammedia Colony, Nizamabad, Telangana-503001, INDIA,,O   
                           <button  id="zt" type="button" className="btn btn-primary" onClick={openAdditionalForm}>
                            <i class="fa-solid fa-square-plus"></i>
                           </button></td>
          <td rowspan="2"></td>
          <td>Edify Ahamadpura</td>
          <td></td>
          <td><i class="fa-regular fa-trash-can"></i></td>
        </tr>

        <tr>
          <td>Ethiken Education Society</td>
          <td>Ethiken Education Society</td>
          <td><i class="fa-regular fa-trash-can"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
 )}

        {/* </div> */}
        




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
        {/* <form> */}
          <label class="col-sm-4 col-form-label">Store Name :</label>
          <input  type="text" />
          <br />
          <br/>


          <label class="col-sm-4 col-form-label">Address1 :</label>
          <input  type="text" />
          <br />
          <br/>

          <label class="col-sm-4 col-form-label">Address2 :</label>
          <input  type="text" />
          <br />
          <br/>


          <label class="col-sm-4 col-form-label">Pin Code :</label>
          <input  type="text" />
          <br />
          <br/>


          <label class="col-sm-4 col-form-label">Mobile No :</label>
          <input  type="text" />
          <br />
          <br/>

          <label class="col-sm-4 col-form-label">Land Line :</label>
          <input  type="text" />
          <br />
          <br/>


          <label class="col-sm-4 col-form-label">Email ID :</label>
          <input  type="text" />
          <br />
          <br/>


          <label class="col-sm-4 col-form-label" for="sel1">Billing Account:</label>
          <select id="sel1" name="sellist1">
        <option>Select Fee Account</option>
        <option>xx</option>
        <option>xx</option>
        <option>xx</option>
      </select>         
          <br />
          <br/>


          <div className="fbutton"> 
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary" onClick={closeModal}>Cancel</button>
          </div>
        {/* </form> */}
      </Modal>


      <Modal
    isOpen={isAdditionalFormOpen}
    onRequestClose={() => setAdditionalFormOpen(false)}
    style={{
      content: {
        width: '500px',
        height: '400px',
        margin: 'auto',
        backgroundColor: 'rgb(228, 229, 229)',
      },
    }}
    contentLabel="Additional Form Modal"
  >
    <h4 className="text-secondary">Assign Store to Branch</h4>
    <hr></hr>

    <label class="col-sm-4 col-form-label">Branch :</label>
          <select id="sel1" name="sellist1" class="col-sm-6 col-form-label">
        <option>Select Branch</option>
        <option>xx</option>
        <option>xx</option>
        <option>xx</option>
      </select> 
          <br />
          <br/>

          <label class="col-sm-4 col-form-label">Fee Account :</label>
          <select id="sel1" name="sellist1" class="col-sm-6 col-form-label">
        <option>Select Fee Account</option>
        <option>xx</option>
        <option>xx</option>
        <option>xx</option>
      </select> 
          <br />
          <br/>
    
    <div className="fbutton"> 
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary" onClick={() => setAdditionalFormOpen(false)}>Cancel</button>
          </div>
  </Modal>



{/* //second click */}

{displayedSection === 'Assignstore' && (
    <div className="Diff">
        <div class="table-responsive-sm">          
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Store Name</th>
        <th>Branch Name</th>
        <th>Store Incharge</th>
        <th>Email ID</th>
        <th>Mobile No.</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ethiken Education Society  
        <button  id="zt" type="button" className="btn btn-primary" onClick={openSecondForm}>
                            <i class="fa-solid fa-square-plus"></i>
                           </button></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
        </div>

    
)}

<Modal
    isOpen={isSecondFormOpen}
    onRequestClose={() => setSecondFormOpen(false)}
    style={{
      content: {
        width: '600px',
        height: '500px',
        margin: 'auto',
        backgroundColor: 'rgb(228, 229, 229)',
      },
    }}
    contentLabel="Additional Form Modal"
  >
    <h4 className="text-primary">Assign Store Incharge (Store Manager)</h4>
    <hr></hr>

    <label class="col-sm-4 col-form-label">Branch :</label>
          <select id="sel1" name="sellist1" class="form-control">
        <option>Ehiken Education Society</option>
        <option>xx</option>
        <option>xx</option>
        <option>xx</option>
      </select> 
          <br />
          <br/>

          <label class="col-sm-4 col-form-label">Store Incharge(User Type: Store Manager):</label>
          <select id="sel1" name="sellist1" class="form-control">
        <option>--Select--</option>
        <option>xx</option>
        <option>xx</option>
        <option>xx</option>
      </select> 
          <br />
          <br/>
    
    <div className="sbutton"> 
          <button type="submit" className="btn btn-primary">Assign</button>
          </div>
  </Modal>


{/* Third Click */}

{displayedSection === 'Stockchecking' && (
    <div className="Diff">

        <div className="btna">
            <input  className="inputb" type="text" placeholder="Search in Table"></input>
        </div>

      
        <div class="table-responsive-md">          
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Location</th>
        <th>Branch</th>
        <th>Items Sales allowed, only if quantity is available</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Nizamabad</td>
        <td>Ethiken Educational Society</td>
        <td>Yes</td>
        <td><i class="fa-regular fa-pen-to-square"></i></td>
      </tr>

      <tr>
        <td>2</td>
        <td>Nizamabad</td>
        <td>Edify Ahamadpura</td>
        <td>Yes</td>
        <td><i class="fa-regular fa-pen-to-square"></i></td>
      </tr>
    </tbody>
  </table>
  </div>

</div>
  
)}


        </>
    )
}
export default Instorea;
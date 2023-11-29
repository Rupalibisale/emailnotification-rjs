
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Mobileapp.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Mobileapp() {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleAddClick = () => {
        setFormVisible(true);
    }

    const handleSaveClick = () => {
        // Handle the save logic here
        // You can collect data from the form fields
        // and perform the save operation
        setFormVisible(false); // Hide the form after saving
    }

    return (
        <>
            <div className='mainx-div'>
                    <div className='containerx-div'> 
                        <div className="btable">
                            <div className="btnx" style={{ textAlign: 'right' }}>
                                <button type="button" className="btn btn-primary" onClick={handleAddClick}>Add</button>
                            </div>

                            {/* for the table */}
                            <div className="tablex-x">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>SNo</th>
                                                <th>Branch Name</th>
                                                <th>File Name</th>
                                                <th>File Path</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="data">
                                            <tr>
                                                <td colSpan="5">No Records to display</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <Modal
                isOpen={isFormVisible}
                onRequestClose={() => setFormVisible(false)}    style={{
                  content: {
                      width: '500px', 
                      height: '400px', 
                      margin: 'auto', 
                      backgroundColor: "rgb(228, 229, 229)",
                  }
              }}
            >
              
              <h3>Add MobileApp Banner</h3>
              <hr></hr>
              
                <div className="form-horizontal">
                
                    <label>Branch:</label>
                    <input className="form-control" type="text" placeholder="Ethiken Education Society"/>
                    <br />
                    <label>Banner Upload:</label>
                    <input class="form-control" type="file"/>
                    <br />
                    <p style={{ marginLeft: '30px' }}><span className='text-headingz'>Note:</span>Note: Max image size 100kb (png, jp, jpeg) image dimension (1024*500) pixel</p>
                    <button style={{ marginLeft: '30px' }} type="button" className="btn btn-primary" onClick={handleSaveClick}>Save</button>
                
                </div>
              
              
            </Modal>
        </>
    )
}

export default Mobileapp;

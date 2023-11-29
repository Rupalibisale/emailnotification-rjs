import React from 'react';
import './Parentlogin.css';

function Parentlogin(){
    return(
        <>
        
        <div className='mainx-div'>

    {/* for the table  */}
    <div className="tablex-x">
    <div class="table-responsive">
    <table class="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>SNo</th>
          <th>Group Name</th>
          <th>Menu Name</th>
          <th>Menu Title</th>
          <th>Menu Sequence No</th>
          <th>Icon</th>
          <th>Favourite Icon</th>
          <th>Status</th>
          <th>Is Favourite</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>SIS</td>
          <td>anecdotes</td>
          <td>anecdotes (default English)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>2</td>
          <td>SIS</td>
          <td>ApplyStydentLeave</td>
          <td>ApplyStudentLeave (default English)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>3</td>
          <td>SIS</td>
          <td>ApplyTC</td>
          <td>ApplyTC (default English)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</div>
         
        </>
    )
}
export default Parentlogin;
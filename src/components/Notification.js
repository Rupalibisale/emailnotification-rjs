import React from 'react';

function Notification(){
    return(
        <div className="containerz">

        <div className='button-container'>
                    <button className='button1'>DashBoard</button>
                    <button className='button1'>Student M-o-M</button>
                    <button className='button1'>Room Allocations</button>
                    <button className='button1'>Email Notifications</button>
                    <button className='button1'>Email</button>
                    <button className='button1'>Classes in Progress</button>
        </div><br></br>


        <p className='paragraph1'><span className='text-headinga'>Note : </span>The edit option is only enabled for support user.</p>

                <br></br>

        <form class="form-horizontalz">

        <div className="form-group">
         <label class="col-sm-5 col-form-label">When SMS is sent by any user : </label> 
      
        <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>
      </div>
      <br></br>


      <div className="form-group">
        <label class="col-sm-5 col-form-label">When Concession Request is Raised : 
        <p className='paragraphz'><span className='text-headingz'>Note:</span>
         Concession Request email will be sent to Branch Principal 
         and zonal head also along with these Email-IDs</p></label>

         <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>

       

      </div>
      <br></br>


      <div className="form-group">
        <label className="col-sm-5 col-form-label">When an Inactive Request is raised :
        <p className='paragraphz'><span className='text-headingz'>Note:</span>
         Inactive Request email will be sent to Branch Principal along with <br></br> 
         these Email-IDs</p>
</label>
        <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>
      </div>
      
      <br></br>

      <div className="form-group">
        <label className="col-sm-5 col-form-label">When a Staff is Recruited and made Active/Inactive : 
        <p className='paragraphz'><span className='text-headingz'>Note:</span>
         Staff Active/Inactive/Recruitment Approval Emails will be sent<br></br>
          to Branch Principal also along with these Email-IDs</p>
</label>

        <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>
      </div>
      <br></br>

      <div className="form-group">
        <label className="col-sm-5 col-form-label">When a Fee change Request request is Raised :</label>

        <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>
      </div>
      <br></br>

      <div className="form-group">
        <label className="col-sm-5 col-form-label">When any Reports are Downloaded / Exported From the system :</label>

        <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>
      </div>
      <br></br>

      <div className="form-group">
        <label className="col-sm-5 col-form-label">When any student data updated by parent : </label>

        <div class="col-sm-15">
          <textarea type="text" className="form-controlz"/>
        </div>
      </div>


 
        </form>

        </div>
    )
}
export default Notification;
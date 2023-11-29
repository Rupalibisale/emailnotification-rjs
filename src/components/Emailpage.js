import React from 'react';

import "./Emailpage.css"
const Emailpage = () => {
  return (
    <>
  <div className='main-div'>
        <div className='page-div'>
            <div className='container-div'>
            

                
                <div className='text-container'>
                    <p className='paragraph'> <span className='text-heading'>Note:</span> The email that is defined here is used as <span className='span2'>Form Email Adress </span> when an email is sent from the MCB System.<br/>
                    Add Email idnagainst the type as per your prefrence at a global level or branch level.Please note that,if email ids are not saved against the branch,organization email ids are considered.</p>
                
                <p className='paragraph'>If you have not registered / whitelisted your school specific domauin, by default all emailcommunicationwill be sent from admin@myclassboard.in To use your school specific domain to send email,please  <span><a href='#adv'>click here</a></span> to configure the same</p>
                </div>
                <div className='table-container'>
                    
                <table>
        <tr className='th'>
            <th>Type</th>
            <th>From Email id</th>
            <th></th>
            <th>Edit Signiture</th>
        </tr>
        <tr className='tr-class'>
            <td>General</td>
            <td></td>
            <td><button className='button2'><a href='#bb' className='anchor' type='button'>Text Email Setting</a></button></td>
            <td><button className='button2'><a href='#bb' className='anchor'>Update Signature</a></button></td>
        </tr>
        <tr>
            <td>Finanace</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Academic information</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>HR</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Transport</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Admission</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Communication</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Visitor Management</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Librery</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

    </table>

                </div>


<div className='dropdown-container'>
<select name="subject" id="subject" className='hh'>
    <option value="" selected="selected" className='active'>ABC</option>
    <option value="" selected="selected">LMN</option>
    <option value="" selected="selected">XYZ</option>
    <option value="" selected="selected">Ethiken education society</option>
  </select>
</div>


<div className='table-container'>
                <table>
        <tr>
            <th>Type </th>
            <th>From Email id</th>
            <th>Signiture <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg></th>
            <th><i class="bi bi-arrow-down"></i></th>
            <th><i class="bi bi-arrow-down"></i> </th>
        </tr>
        <tr className='tr-class'>
            <td>General</td>
            <td></td>
            <td><button className='button2'><a href='#bb' className='anchor'>Text Email Setting</a></button></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Finanace</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Academic information</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>HR</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Transport</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Admission</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Communication</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Visitor Management</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr  className='tr-class'>
            <td>Librery</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>

    </table>
                </div>
<div>
</div>



            
            </div>
        </div>
    </div>

    </>
  )
}

export default Emailpage;
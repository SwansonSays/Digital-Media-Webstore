import {Link} from 'react-router-dom'
import Sidebar from './sidebar';
//import Dashboard from './dashboard';

function MyProfile(){
    return(
        <div className="container mt-4">
            <p class="text-center"> <p class= "h1">Welcome Joe</p></p>
            <div className="row"> 
                <aside className="col-md-3">
                    
                </aside>
                <section className='col-md-9'>
                <Sidebar />
                 <div className='card'>
                  <h5 className='card-header'>My Profile</h5>
                   <div className='card-body'>
                         <table className="table table-bordered">
                        <p> Name: Joe</p>
                        <p>  Last Name: Smith</p>
                        <p> Email: Joesmith@gmail.com</p>
                  </table>
                 </div>
             </div>
         </section>

            </div>
        </div>
   
    );
}
export default MyProfile;
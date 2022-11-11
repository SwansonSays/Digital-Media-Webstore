import {link} from 'react-router-dom'
import Sidebar from './sidebar';

function myProfile(){
    return(
        <div className="container mt-4">
          
            <div className="row"> 
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                 <div className="card">
                  <h5 className="card-header">My Profile</h5>
                   <div className="card-body">
                <table className="table table-bordered">
                    
                  </table>
          </div>
   </div>
                </section>
                

            </div>
        </div>
   
    );
}
export default myProfile;
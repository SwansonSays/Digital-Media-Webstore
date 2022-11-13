import {Link} from 'react-router-dom'
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Post from "./Post"

function MyPosts(){
    return(
        <div className="container mt-4">
            <p class="text-center"> <p class= "h1">Welcome Joe</p></p>
            <div className="row"> 
                <aside className="col-md-3">
                    
                </aside>
                <section className='col-md-9'>
                <Sidebar />
                 <div className="card">
                  <h5 className="card-header">My Posts</h5>
                   <div className="card-body">
                         <table className="table table-bordered">
                         <thead>
                                    <tr>
                                        <th>Post Name</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                         <tbody> 
                         
                                    <tr>
                                    <td><Link to='/myposts' className='list-group-item list-group-item-action'> Post1</Link></td>
                                   
                                    <td>posted</td>
                                    <td>01/11/22</td>

                                    <td>
                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                        </td>
                                        </tr>

                                        <tr>
                                        <td><Link to='/myposts' className='list-group-item list-group-item-action'> post2</Link></td>
                                    <td>pending</td>
                                    <td>03/04/22</td>

                                    <td>
                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                        </td>
                                        </tr>
                        </tbody>
                        
                  </table>
                 </div>
             </div>
         </section>

            </div>
        </div>
   
    );
}
export default MyPosts;
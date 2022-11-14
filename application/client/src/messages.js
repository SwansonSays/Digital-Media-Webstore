import {Link} from 'react-router-dom'
import Sidebar from './sidebar';

function MyMessages(){
    return(
        <div className="container mt-4">
              <p class="text-center"> <p class= "h1">Welcome Joe</p></p>
            <div className="row"> 
                <aside className="col-md-3">
                    
                </aside>
        <section className="col-md-9">
        <Sidebar />
            <div className="card">
            
             <h5 className="card-header">My Messages</h5>
             
                <div className="card-body">
                
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Message</th>
                                        <th>From</th>
                                        <th>Date</th>
                                        <button className='btn btn-sm active' >Sort</button>
                                        
                                    </tr>
                                </thead>
                                <tbody> 
                                
                                    <tr>
                                    <td><Link to='/messages' className='list-group-item list-group-item-action'> message 1 text</Link></td>
                                    <td>sender</td>
                                    <td>12/2/21</td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                    <td><button className='btn btn-sm active' class="btn btn-primary btn-sm">View</button></td>
                                     </tr>
                                        <tr>
                                        <td><Link to='/messages' className='list-group-item list-group-item-action'> message 2 text</Link></td>
                                        <td>sender</td>
                                        <td>04/01/22</td>
                                    <td><button className='btn btn-danger btn-sm active'>Delete</button></td> 
                                    <td><button className='btn btn-sm active' class="btn btn-primary btn-sm">View</button></td>
                                      </tr>  
                                        
                                </tbody>
                            </table>
                    </div>
                  </div>
                 
            </section>
            </div>
            </div>
    )
}
export default MyMessages;
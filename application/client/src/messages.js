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
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                    <td>message 1</td>
                                    <td>sender</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>message 2</td>
                                        <td>sender</td>
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
    )
}
export default MyMessages;
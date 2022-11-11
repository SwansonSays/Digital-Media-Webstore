import {Link} from 'react-router-dom'
import Sidebar from './sidebar';

function myMessages(){
    return(
<section className="col-md-9">
        <div className="card">
             <h5 className="card-header">My Messages</h5>
                <div className="card-body">
                            <table className="table table-bordered">
                                <tbody> 
                                    <td>message</td>
                                    <td>
                                        <button className='btn btn-danger btn-sm active'>Delete</button>
                                        </td> 
                                </tbody>

                    
                            </table>
                        </div>
                    </div>
                </section>
    );
}
export default myMessages;
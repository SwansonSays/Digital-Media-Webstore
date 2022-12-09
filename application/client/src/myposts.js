import {Link} from 'react-router-dom'
import Sidebar from './sidebar';
import NavBar from './NavBar';
import Footer from './Footer';

function MyPosts(){
    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <p className="text-center"> <p className= "h1">Welcome Joe</p></p>
                <div className="row"> 
                    <aside className="col-md-3"> </aside>
                    <section className='col-md-9'>
                        <Sidebar />
                         <div className="card" style={{ width: '28rem' }}>
                            <h5 className="card-header">My Posts</h5>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <td>2 results found</td>
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
                                                <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                                <td><button className="btn btn-sm active btn btn-primary btn-sm">View</button></td>
                                            </tr>

                                            <tr>
                                                <td><Link to='/myposts' className='list-group-item list-group-item-action'> post2</Link></td>
                                                <td>pending</td>
                                                <td>03/04/22</td>
                                                <td><button className='btn btn-danger btn-sm active'>Delete</button></td>
                                                <td><button className="btn btn-sm active btn btn-primary btn-sm">View</button></td>
                                            </tr>
                                        </tbody>
                        
                                    </table>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            <Footer />
        </div>   
    );
}
export default MyPosts;
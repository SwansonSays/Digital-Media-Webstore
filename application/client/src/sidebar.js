import {Link} from 'react-router-dom';
function Sidebar(){
    return(
        <div className='card'>
                 <div className='list-group list-group-flush'>
                         <Link to='/my-profile' className='list-group-item list-group-item-action'> My Profile</Link>
                         <Link to='/my-posts' className='list-group-item list-group-item-action'> My Posts</Link>
                         <Link to='/my-messages' className='list-group-item list-group-item-action'> My Messages</Link>
                        </div>
                    </div>



    )
}
export default Sidebar;
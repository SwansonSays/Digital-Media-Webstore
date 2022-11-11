import {link} from 'react-router-dom';
function Sidebar(){
    return(
        <div className='card'>
                 <div className='list-group list-group-flush'>
                         <link to='/my-profile' className='list-group-item list-group-item-action'> My Profile</link>
                         <link to='/my-posts' className='list-group-item list-group-item-action'> My Posts</link>
                         <link to='/my-messages' className='list-group-item list-group-item-action'> My Messages</link>
                        </div>
                    </div>



    )
}
export default Sidebar;
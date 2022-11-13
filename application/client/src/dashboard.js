import React from 'react';
import { Link } from 'react-router-dom';
import myMessages from './messages'
import MyProfile from './userprofile'
import Sidebar from './sidebar';
import MyPosts from './myposts';

function Dashboard (){
    return(
        
        <div className="container mt-4">
          <p class="text-center"> <p class= "h1">Welcome Joe</p></p>
            <div className="row"> 
                <aside className="col-md-3">
            
                </aside>
                <section className="col-md-9">
                <MyProfile />
                </section>
                

            </div>
        </div>

    );

}

export default Dashboard;
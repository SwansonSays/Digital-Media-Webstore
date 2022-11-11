import React from 'react';
import ReactDOM from 'react-dom/client';
import myMessages from './messages'
import myProfile from './userprofile'
import Sidebar from './sidebar';

function Dashboard (){
    return(
        
        <div className="container mt-4">
             <p className="text-center"> <p className= "h1">welcome</p></p>
            <div className="row"> 
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
    
                </section>
                

            </div>
        </div>

    );

}

export default Dashboard;
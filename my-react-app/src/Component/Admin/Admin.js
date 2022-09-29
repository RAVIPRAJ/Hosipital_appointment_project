import React, { Component } from 'react';
import ASidebar from './ASidebar';

class Admin_Panell extends Component {
    state = {  } 
    render() { 
        return (<div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                       <ASidebar />
                    </div>
                    <div className="col-sm-3">
                       <h1>hello admin</h1>
                    </div>
                </div>
            </div>
        </div>);
    }
}
 
export default Admin_Panell;

import React, { Component } from 'react';
import firebase from '../firebase'
import Navbar from '../Navbar'
class Dashboard extends Component{
    componentDidMount=()=>{
        if(!firebase.getCurrentUsername()) {
            // not logged in
            alert('Please login first')
            //history.push('/new-location')
            return null
        }
    }
    
    render() {
        
        return (
            <div>  
                <Navbar/>
                StorageDataTable  
                </div>
          );
    }
}

export default Dashboard;
import React, { Component } from 'react'
import { Typography ,Button ,AppBar,Toolbar} from '@material-ui/core'
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import history from '../history';
class Navbar extends Component{

    componentDidMount=()=>{
        if(!firebase.getCurrentUsername()) {
            // not logged in
            alert('Please login first')
            history.replace('/login')

            return null
        }
    }

      logout= async () => {
        await firebase.logout()
		history.push('/')
	}
    render() {
        console.log(history);
        return (
            <div >
            <AppBar position="static">
                <Toolbar>
                <Typography 
                    variant="h4" 
                    color="inherit"
                    to="/dashboard"
                    style={title}
                >
                    <Button 
                        variant="outlined"  
                        color="inherit" 
                        component={Link}
                        to="/dashboard"
                    >
                    ihm
                    </Button>
                </Typography>
            
                <Typography variant="h7"  color="inherit" >
                Hello { firebase.getCurrentUsername() }
                </Typography>
                <Button 
                    color="inherit" 
                    type="submit"
                    
                    component={Link}
                    to="/dashboard"
                    >Dashboard</Button>
                <Button 
                    color="inherit" 
                    type="submit"
                    
                    component={Link}
                    to="/upload"
                    >Upload</Button>
                <Button color="inherit" onClick={this.logout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}
const title = {
    flexGrow: 1,
  };

export default Navbar;

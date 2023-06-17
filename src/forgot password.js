
import React, { Component } from 'react';




class Forpas extends Component {
    state = {  } 
    render() { 
        return (
            <div className="background-forpas">
                <form className="form-here">
                    <label>Enter password</label>
                    <div>
                       <input type="password" placeholder="enter new password"></input>
                    </div>
 
                </form>
            </div>
        );
    }
}
 
export default Forpas;
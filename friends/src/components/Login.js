import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component{
    state = {
        credentials:{
            username: "",
            password: "",
        },
        error: "",
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
            error: "",
        });
    };
    login = (e) => {
        e.preventDefault();

        axiosWithAuth()
           .post("/api/login", this.state.credentials)
           .then((response) => {
               console.log(response);
               localStorage.setItem("token", JSON.stringify(response.data.payload));
               this.props.history.push("/protected");
           })
           .catch((error) => console.log(error));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                    <p>{this.state.error}</p>
                </form>
            </div>
        )
    }
}

export default Login;
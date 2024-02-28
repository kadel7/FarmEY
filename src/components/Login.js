import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [data, setData] = useState({
      email: '',
      password: '',
    });
  
    const { email, password } = data;
    const navigate = useNavigate(); // Initialize useNavigate

    const changeHandler = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ display: "flex" }}>
  
          <div className="row justify-content-end" style={{ padding: "100px 100px" }}>
          <div>
            <nav style={{ backgroundColor: '#007f00', padding: '20px', textAlign: 'center' }}>
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li style={{ display: 'inline', marginRight: '20px' }}><a class="active" href="/Home" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Home</a></li>
                <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Login" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Login</a></li>
                <li style={{ display: 'inline', marginRight: '20px' }}><a href="/About" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>About</a></li>
                <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Contact</a></li>
                <li style={{ display: 'inline', marginRight: '20px' }}><a href="/Help" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Help</a></li>
              </ul>
            </nav>
          </div>
            <div
              className="card col-sm-4 bg-l rounded formu"
              style={{ height: "380px", width: "600px" }}
            >
              <br />
              <h4 align="center">Login</h4>
              <center>
                <form>
                  <input
                    style={{ border: "1px solid black", marginBottom: "20px" }}
                    type="text"
                    placeholder="Email id"
                    value={email}
                    name="email"
                    onChange={changeHandler}
                  />
                  <br />
                  <input
                    autoComplete="off"
                    style={{ border: "1px solid black", marginBottom: "20px" }}
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={changeHandler}
                  />
                  <br />
                  <br />
                  <br />
                  <button onClick={Login}>Login</button>
                </form>
                <p>
                  Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/signup">Signup</Link>
                </p>
              </center>
            </div>
          </div>
          
        </div>
       
    );
  };

  export default Login;
import React,{useState} from "react";
import {Link} from 'react-router-dom';
const SignUp = () => {
    const [data,setData]=useState({
        email:"",
        password:"",
    })
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSignUp=e=>{
        if(data.password.length<8){
        window.alert("Password must have atleast 8 characters");
        }
        else{
        e.preventDefault();
        window.alert("Registered Successsfully.Now you can Login.")
        }
    }
    return (
        <div>
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
            <div className="container" style={{ backgroundColor: '#004c00', padding: '10px',height: '100vh', textAlign: 'center', color: 'white' }}>
                <br /><br /><br />
                <div className="row px-3 justify-content-center">
                    <div className="card col-sm-4 bg-l rounded formu" style={{ height: "380px" }} >
                        <center>
                            <br />
                            <h4 align="center">SignUp</h4>
                            <form className="right-aligned-form">
                                <input style={{ border: "1px solid black", marginBottom: "20px" }} type="text" placeholder='Email id' name='email' value={data.email} onChange={changeHandler}/><br />
                                <input autoComplete='off' style={{ border: "1px solid black", marginBottom: "20px" }} type="password" placeholder='Create Password' name='password' value={data.password} onChange={changeHandler} /><br />
                                <button className='btn btn-dark' onClick={handleSignUp}>SignUp</button>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

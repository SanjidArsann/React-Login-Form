import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import './Login.css';
import { useState } from "react";
import {NavLink} from 'react-router-dom'

const Login = () => {

    const[inputValue, setInputValue] = useState({
        name:"",
        pass:""
    });
    const [data, setData] = useState([])  
    console.log(inputValue);
    const getData =(e) =>{
        // console.log(e.target.value);
        const {value,name} = e.target;
        setInputValue(()=>{
            return{
                ...inputValue,
                [name]:value
            }
        });
    }

    const addData =(e)=>{

        const getUserData = localStorage.getItem("user");

        e.preventDefault();
         const{name, pass} = inputValue;
         if(name === ""){
            alert('Enter your name')
         }
         else if(pass ===""){
            alert("Give your Password")
         }
         else{
            if(getUserData && getUserData.length){
                const userData = JSON.parse(getUserData);
                const userLogin = userData.filter((element,k) =>{
                    return element.name === name && element.pass === pass
                });

                if(userLogin.length === 0){
                    alert('Invalid Details')
                }
                else{
                    alert('Login Successfully')
                }
            }
         }
    }
  return (
    <div className="container">
      <section className="form-page">
        <div className="left-data">
          <div className="left-img">
            <img src="../../../public/pngtree-girl.png" alt="" />
          </div>
          <div className="new-login">
            <a href=""><NavLink to="/">Create an account</NavLink></a>
          </div>
        </div>
        <div className="right-data">
          <form className="form-area">
            <h2 className="sign-title">Log In</h2>
            <div>
              <label className="input-field">
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faUser} />{" "}
                </i>
                <input
                  type="text"
                  onChange={getData}
                  name="name"
                  placeholder="Your Name"
                />
              </label>
              
              <label className="input-field">
                <i>
                  <FontAwesomeIcon icon={faLock} />{" "}
                </i>
                <input
                  type=""
                  onChange={getData}
                  name="pass"
                  placeholder="Password"
                />
              
              </label>
              <div className="checkbox">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
            </div>
            <button className="btn" 
            onClick={addData}
            >
              Log In
            </button>

            <div className="alternative-login">
              <p className="social-text">Or Login with </p>
              <div className="social-icons">
                
                <a href="">
                <img src="https://pngimg.com/d/facebook_logos_PNG19750.png" alt="" />
                </a>
                <a href="">
                <img src="https://www.umces.edu/sites/default/files/twitter.png" alt="" />
                </a>
                <a href="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/GooglePlus-logo-red.png" alt="" />
                </a>
                
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;

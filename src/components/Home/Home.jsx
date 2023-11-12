import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {NavLink} from 'react-router-dom'

const Home = () => {

    const[inputValue, setInputValue] = useState({
        name:"",
        email:"",
        pass:"",
        conPass:""
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
         const{name, email, pass, conPass} = inputValue;
         if(name === ""){
            alert('Enter your name')
         }
         else if(email === ""){
            alert("Enter your email")
         }
         else if(!email.includes("@")){
            alert("Enter your valid email address")
         }
         else if(pass ==="" || conPass===""){
            alert("Give your Password")
         }
         else if(pass.length < 8){
            alert("Password should be greater than seven")
         }
         else if(pass != conPass){
            alert("Password should be same")
         }
         else{
            if(getUserData && getUserData.length){
                const userData = JSON.parse(getUserData);
                const userLogin = userData.filter((element,k) =>{
                    return element.name === name && element.pass === pass
                });

                if(userLogin.length === 0){
                    alert('Already Have An Account')
                }
                else{
                    alert("Account Created")
                    localStorage.setItem("user",JSON.stringify([...data,inputValue]));
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
           <a href=""><NavLink to="/Login">Already have an Account</NavLink></a>
           </div>
        </div>
        <div className="right-data">
          <form className="form-area">
            <h2 className="sign-title">Sign Up</h2>
            <div>
              <label className="input-field">
                <i> <FontAwesomeIcon icon={faUser} /> </i>
                <input type="text" onChange={getData} name="name" placeholder="Your Name" />
              </label>
              <label className="input-field">
                <i> <FontAwesomeIcon icon={faMailBulk} /> </i>
                <input type="email" onChange={getData} name="email" placeholder="xyz@mail.com" />
              </label>
              <label className="input-field">
                <i><FontAwesomeIcon icon={faLock} /> </i>
                <input type="" onChange={getData} name="pass" placeholder="Password" />
              </label>
              <label className="input-field">
                <i><FontAwesomeIcon icon={faLock} /> </i>
                <input type="" onChange={getData} name="conPass" placeholder="Confirm Password" />
              </label>
              <div className="checkbox">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
            </div>
            <button className="btn" onClick={addData}>Sign Up</button>

            <div className="optional-login">
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

export default Home;

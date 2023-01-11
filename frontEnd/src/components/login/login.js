import { useNavigate } from 'react-router-dom';
import bird from "./bird.jpg";
import {useState, useEffect} from "react";
const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

    useEffect(()=>{
        const userToken = localStorage.getItem('user-token');
        console.log(userToken);
        if (userToken !== null) {
            return navigate('/');
        }    
    },[]);

    const loginHandler=(e)=>{
        e.preventDefault();
        if(email != "" && password != "") {
            localStorage.setItem('user-token','true');
            navigate("/");
        }
    }

    const updateEmail=(e)=>{
        setEmail(e.target.value);
    }

    const updatePassword=(e)=>{
        setPassword(e.target.value);
    }
    
    return (
        <section className="content">
            <div className="login-page"  style={{ backgroundImage:`url(${bird})`, backgroundSize: "100%"}}>
            <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                <a href="" className="h1"><b>ZABA BIRDS FARM</b></a>
                </div>
                <div className="card-body">
                <p className="login-box-msg">Login Here</p>

                <form onSubmit={loginHandler}>
                    <div className="input-group mb-3">
                    <input type="email" className="form-control" value={email} onChange={updateEmail} placeholder="Email"/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" onChange={updatePassword} value={password}/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                    </div>
                </form>

                </div>
            </div>
            </div></div>
        </section>);
}

export default Login;
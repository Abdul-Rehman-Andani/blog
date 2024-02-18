import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((values) => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post("http://localhost:9000/user/signup", input);

            if (data.data.message == "success") {
                e.target.reset();
                navigate("/signin");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-5 mx-auto">
                    <div className="sign-container p-lg-4 mt-5">
                        <h3 className='mb-4'><strong>Sign up</strong></h3>
                        <form onSubmit={handleSubmit}>

                            <div className="input-group mb-3">
                                <input type="text" placeholder='Username' name='name' onChange={handleInput} />
                            </div>

                            <div className="input-group mb-3">
                                <input type="email" placeholder='Email' name='email' onChange={handleInput} />
                            </div>

                            <div className="input-group mb-3">
                                <input type="password" placeholder='Password' name='password' onChange={handleInput} />
                            </div>

                            <button >Sign up</button>

                            <p className='text-center mt-3'><Link to="/signin">Already have an account ? Sign in</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;

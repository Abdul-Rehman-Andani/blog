import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import profileImg from "../assets/profile.png";

const EditProfile = () => {

    const { id } = useParams();
    const [profile, setProfile] = useState({
       
    });
    const [img, setImg] = useState();

    const getUser = async () => {
        try {
            const user = await axios.get(`http://localhost:9000/user/profile/${id}`);
            setProfile(user.data);
            setImg(user.data.img);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setProfile((values) => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", profile.name);
        formData.append("bio", profile.bio);
        formData.append("img", img);

        const user = await axios.patch(`http://localhost:9000/user/profile/${id}`, formData);
    }

    useEffect(() => {
        getUser();
    }, []);

    console.log(img);

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <h3 className='mb-3 text-center mt-5'><strong>Edit profile</strong></h3>

                    <div className="col-lg-4 text-center  mx-auto mt-4">
                        <div className="profile-img">
                            <input type="file" id='img' name='img' className='d-none' onChange={(e) => setImg(e.target.files[0])} />
                            <label htmlFor="img">
                                {
                                    profile.img == "" ? <img src={img}   alt="profile" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }}/> :
                                    <img src={`http://localhost:9000/images/${profile.img}`} alt="profile" style={{ height: "200px", width: "200px", borderRadius: "50%", objectFit: "cover" }} />
                                }
                            </label>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <div className="sign-container p-lg-4 mt-2">

                            <div className="input-group mb-3">
                                <input type="text" placeholder='Username' name='name' onChange={handleInput} value={profile.name} />
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" placeholder='Bio' name='bio' value={profile.bio} onChange={handleInput} />
                            </div>

                            <button >Save changes</button>

                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default EditProfile

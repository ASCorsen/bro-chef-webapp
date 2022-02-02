import React, {useEffect, useState} from 'react';
import "../userdata/UserData.css"
import axios from "axios";
import jwt_decode from "jwt-decode";

const UserData = () => {

    const [profileData, setProfileData] = useState({});


    useEffect(() => {

        async function fetchProfileData() {

            const token = localStorage.getItem('token');
            console.log(token)
            const decoded = jwt_decode(token)
            console.log(decoded.sub)

            try {
                const result = await axios.get(`http://localhost:3000/600/users/${decoded.sub}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result)
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }


        fetchProfileData();
    }, [])

    return (
        <div >
            <section>
                <h2>Welcome, {profileData.username}.</h2>
                <div className="userdata-styling">
                    <p>we hope you enjoy your meal and achieve your goals!</p>
                </div>
            </section>
        </div>
    );
};

export default UserData;
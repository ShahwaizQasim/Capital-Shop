import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer'
import { AuthContext } from '../../context/AuthContext';

const UserProfile = () => {
    const [user, setUser] = useContext(AuthContext)
    console.log("user", user);

    return (
        <>
            <Navbar />
            <div className="container py-5">
                <div className="card mx-auto" style={{ minWidth: '500px' }}>
                    <div className="card-body text-center" style={{
                        fontFamily: 'poppins',

                    }}>
                        <div className="user_Photo" style={{
                            margin: "auto"
                        }}>
                            <img
                                src={user.userInfo.UserPhoto}
                                alt="User Avatar"
                                className="rounded-circle mb-3"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <p className="card-title mt-4" style={{
                            fontWeight: '600',
                            fontSize: '1.7rem'
                        }}>Name: <br /> <span style={{fontSize:'1.5rem', fontWeight:'500'}}>{user?.userInfo?.name}</span></p>
                        <p className="card-text mt-4" style={{
                            fontWeight: '600',
                            fontSize: '1.7rem'
                        }}>Email: <span style={{fontSize:'1.5rem', fontWeight:'500'}}>{user?.userInfo?.userEmail}</span></p>
                        <p className="card-text mt-4" style={{
                            fontFamily: 'poppins',
                            fontWeight: '600',
                            fontSize: '1.7rem'
                        }}>
                            <small>Location: <span style={{fontSize:'1.5rem', fontWeight:'500'}}>Pakistan</span></small>
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;

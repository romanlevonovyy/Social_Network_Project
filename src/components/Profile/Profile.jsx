import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount:12}, 
        { id: 2, message: 'It is my first post', likesCount:34},
        { id: 2, message: 'It is my first post', likesCount:34},
        { id: 2, message: 'It is my first post', likesCount:34}
    ]

    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;



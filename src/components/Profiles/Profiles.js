import React from 'react';
import './Profiles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const Profiles = (props) => {
    const {name,email,phone,salary,img} = props.user;
    const handleAddProfile = props.cart;
   
    return (
        <div className="profile">
                <img className="imgStyle" src={img} alt=""/>
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h5>Salary: {salary}</h5>
                <button onClick={()=>handleAddProfile(props.user)} className="btn"  >  <FontAwesomeIcon icon={faPlusSquare} /> Add to List</button>
        </div>
    );
};

export default Profiles;
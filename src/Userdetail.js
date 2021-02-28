import React from 'react'
import './userdetail.css';

function Userdetail({ detail, title, todoid }) {


    return (
        <div className="userdetails">
            <h2 className="heading">User Details :</h2>

            <div className="userinfo">
                `<h2> Todo ID : : {todoid} </h2>  `
                <hr />
                `<h2 className="title">Todo Title : :  {title}</h2>  `
                <hr />
                `<h2>User ID : : {detail.id} </h2>`
                <hr />
                `<h2>User Name : : {detail.name}</h2>  `
                <hr />
                `<h2>Email : : {detail.email}</h2>  `

            </div>
        </div>
    )
}

export default Userdetail

import React, { useState, useEffect } from 'react'
import ToDo from './ToDo'
import Userdetail from './Userdetail'
import './App.css'
import SearchIcon from '@material-ui/icons/Search';
import SameUserid from './SameUserid';
import UserId from './UserId'


const url = "https://jsonplaceholder.typicode.com/todos";

const url_1 = "https://jsonplaceholder.typicode.com/users";

function App() {

  const [q, setQ] = useState("")
  const [lists, setList] = useState([])
  const [userid, setUserId] = useState([])
  const [show, setShow] = useState(false)
  const [detail, setDetail] = useState({})
  const [id, setID] = useState([])
  const [title, setTitle] = useState([])
  const [newlist, setNewList] = useState({})


  const [details, setDetails] = useState([])


  const fetchTodoList = async () => {

    try {
      const response = await fetch(url);
      const lists = await response.json()
      console.log(lists)
      setList(lists)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTodoList();
  }, [App])







  const fetchUserDetails = async () => {

    try {
      const response = await fetch(url_1);
      const details = await response.json()
      console.log(details)
      setDetails(details)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])



  const info = ([userId, title, id]) => {

    setShow(true);
    setUserId(userId)

    let newlists = []
    lists.map((list) => {
      if (list.userId === userId) {
        newlists.push(list)

        // s.filter((list) => list.userId === userid);

      }
      setNewList(newlists)
    })


    setTitle(title);
    setID(id);


    details.map((detail) => {


      if (detail.id === userId) {
        setDetail(detail);

      }







    })
  }





  function search(rows) {
    return rows.filter((row) => row.title.toLowerCase().indexOf(q) > -1 ||
      row.id.toString().toLowerCase().indexOf(q) > -1 ||
      row.completed.toString().toLowerCase().indexOf(q) > -1)
  }






  return (
    <div className="app">>


      <div className="whole">
        <div className="input">

          <SearchIcon fontSize="large" style={{ color: "white" }} />
          <input type="text" placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div >
          <ToDo lists={search(lists)} info={info} />
        </div>
      </div>
      <div className="userid">
        <Userdetail detail={detail} title={title} todoid={id} />
        {show ? < SameUserid newlist={newlist} /> : <UserId />}

      </div>
    </div>
  )
}

export default App

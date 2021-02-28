import React, { useEffect, useState } from 'react'
import './todo.css'



function ToDo({ lists, info }) {



    const columns = lists[0] && Object.keys(lists[0]);
    console.log(columns)






    return (


        <div className="todolist">
            {/* <div className="searchbar">

                <SearchIcon fontSize="large" style={{ color: "black" }} />

            </div> */}
            <div className="todolistheader">
                <h3>ToDo ID</h3>
                <h3>Title</h3>
                <h3>Status</h3>
                <h3>Action</h3>
            </div>
            <hr />
            <div className="todolistrows" >


                <table cellPadding={10} cellSpacing={10}  >
                    <tbody>
                        {lists.map(row => <tr>

                            {columns.slice(1, columns.length - 1).map((column) =>
                                < td >
                                    {
                                        row[column]


                                    }

                                </td>)}

                            {row.completed ? "complete" : "Incomplete"}

                            <button onClick={() => info([row.userId, row.title, row.id])}>View User</button>
                        </tr>)}
                    </tbody>
                </table>


                {/* {lists.map((list) =>
                    <TodoListRow key={list.id} {...list} info={info} />

                )} */}

            </div>



        </div >

    );
}

export default ToDo

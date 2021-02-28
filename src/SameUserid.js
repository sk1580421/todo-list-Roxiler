import React from 'react'
import UserId from './UserId'
import './sameuserid.css'

function sameuserid({ newlist }) {


    const columns = newlist[0] && Object.keys(newlist[0]);







    return (
        <div className="sameuserid">


            <div className="todolistheader">
                <h3>User ID</h3>
                <h3>ToDo ID</h3>
                <h3>Title</h3>
                <h3>Status</h3>
                <h3>Action</h3>
            </div>
            <hr />

            <div className="useridtable">

                <table cellPadding={10} cellSpacing={10}  >
                    <tbody>
                        {newlist.map((row) => <tr>

                            {columns.slice(0 && 2, columns.length - 1).map((column) =>
                                < td >
                                    {
                                        row[column]


                                    }

                                </td>)}

                            {row.completed ? "complete" : "Incomplete"}

                            <button >View User</button>
                        </tr>)}
                    </tbody>
                </table>

            </div>


        </div>
    )

}

export default sameuserid

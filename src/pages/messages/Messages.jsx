import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"

const Messages = () => {
  const message=`Lorem ipsum`
  return (
    <div className='messages'>
     <div className="container">
      <div className="title">
        <h1>Messages</h1>
        
      </div>
      <table>
        <tr>
          <th>Buyer</th>
          <th>Last Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr className='active'>
          <td>
            Jonh Doe
          </td>
          <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td>1 days ago</td>
          <td>13</td>
          <td>
            <button>Mark as Read</button>
          </td>
        </tr>
        <tr className='active'>
          <td>
            Jonh Doe
          </td>
          <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td>1 days ago</td>
          <td>13</td>
          <td>
            <button>Mark as Read</button>
          </td>
        </tr>
        <tr>
          <td>
            Jonh Doe
          </td>
          <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td>1 days ago</td>
          <td>13</td>
        </tr>
        <tr>
          <td>
            Jonh Doe
          </td>
          <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td>1 days ago</td>
          <td>13</td>
        </tr>
        <tr>
          <td>
            Jonh Doe
          </td>
          <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td>1 days ago</td>
          <td>13</td>
        </tr>
        <tr>
          <td>
            Jonh Doe
          </td>
          <td><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td>1 days ago</td>
          <td>13</td>
        </tr>
        
      </table>
    </div>
  </div>
  )
}

export default Messages
import React from 'react'
import { contact } from '@/utils/constants'

const Contact = () => {
  return (
    <div>

      {contact.map((item) => (
        <div key={item._id}>

          <div>
            <h2>Address</h2>
            <p>{item.street}</p>
            <p>{item.postcode}</p>
            <p>{item.city}</p>
          </div>

          <div>
            <h2>Phone</h2>
            <p>{item.phone}</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{item.email}</p>
          </div>
          <div>
            <h2>Opening Hours</h2>
            {item.openinghours.map((time) => (
            <div key={time.day}>
              <p>{time.day} <span>{time.hour}</span></p>
            </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  )
}

export default Contact
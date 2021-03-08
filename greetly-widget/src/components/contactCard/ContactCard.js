import React from 'react'

const ContactCard = ({index, person}) => {
    return (
        <div key={index}> {person.first_name} </div>
    )
}

export default ContactCard

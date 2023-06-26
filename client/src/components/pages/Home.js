import React from 'react'
import Contacts from '../contacts/contacts';
import ContactForm from '../contacts/contactForm';
import ContactFilter from '../contacts/contactFilter';

const Home = () => {
  return (
    <div className='grid-2'>

      <div>
        <ContactForm></ContactForm>
      </div>

      <div>
        <ContactFilter/>
        <Contacts/>
      </div>
      
    </div>
  )
}

export default Home;
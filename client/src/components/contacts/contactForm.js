import React , {useState} from 'react'

const ContactForm = () => {
    const [contact, setContact] = useState({ name: '', email: '', phone: '', type:''});
    // INSTEAD OF SETTING EACH FIELD (SET NAME, SET EMAIL, SET PHONE) we took a single contact object

    const {name, email, phone, type} = contact;

    const onchange = (e) =>{
      setContact({...contact, [e.target.name]: e.target.value})
    }

  return (
    <form>
      <h2 className='text-primary'>Add Contact</h2>

      <input type="text" placeholder='Enter your name' name='Name' onChange={onchange} value={name}></input>
      <input type="email" placeholder='Enter your email' name='Email' onChange={onchange} value={email}></input>
      <input type="phone" placeholder='Enter your phone' name='Phone' onChange={onchange} value={phone}></input>

      <h5> Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === "personal"} /> Personal {' '}
      <input type="radio" name="type" value="professional" checked={type === "professional"} /> professional {' '}

      <div>
        <input type='submit' value="Add Contact" className='btn btn-primary btn-block'></input>
      </div>

    </form>
  )
}

export default ContactForm

import styles from "../styles/Contact.module.css";
import { useState } from "react";
const Contact = () => {

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [desc,setDesc] = useState('')
  const handleSubmit = async (e) => {
    // console.log(name,email,phone,desc)
    e.preventDefault()
    const data = await fetch('/api/contact',{
      method : "POST",
      headers : {
        "Content-Type":"application/json"
      },
      body : JSON.stringify({name,email,phone,desc})
    })
    const res = await data.json()
    // console.log(res)
    alert("Thanks for submission")
    setName("")
    setEmail("")
    setPhone("")
    setDesc("")
  }
  const handleChange = (e) => {
    if(e.target.name == "name"){
      setName(e.target.value)
    }
    else if(e.target.name == "phone"){
      setPhone(e.target.value)
    }
    else if(e.target.name == "email"){
      setEmail(e.target.value)
    }
    else if(e.target.name == "desc"){
      setDesc(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb}>
          <label htmlFor="name" className={styles.formLabel}>
            Name
          </label>
          <input className={styles.input}type="text" id="name" name="name" value={name} onChange={handleChange} required/>
        </div>
        <div className={styles.mb}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input className={styles.input} type="email" id="email" name="email" value={email} onChange={handleChange} required/>
        </div>
        <div className={styles.mb}>
          <label className={styles.formLabel} htmlFor="phone">
            Phone
          </label>
          <input className={styles.input} type="phone" id="phone" name="phone" value={phone} onChange={handleChange} required/>
        </div>
        <div className={styles.mb}>
          <label htmlFor="desc" className={styles.formLabel}>Comments</label>
          <textarea
            id="desc"
            name="desc"
            value = {desc}
            className={styles.input} 
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React , { useState } from 'react'

export default function Enquire() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000); 
      };
  return (
    <div>
      <div className='enq'>
        <h1>Enquire Now</h1>
        </div>
        <div className='form'>
{isSubmitted && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:  <i class="fa-solid fa-user"></i>
          <input type="text" name="name" className='input' value={formData.name} onChange={handleChange} />
        </label>
        <br></br><br></br>
        <label>
          Email:  <i class="fa-solid fa-envelope"></i>
          <input type="email" name="email" className='input' value={formData.email} onChange={handleChange} />
        </label>
        <br /><br></br>
        <label>
          Message: <i class="fa-solid fa-comment"></i>
          <textarea name="message" className='input' value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <input type="checkbox" id="check" name="check"  />
         <label for="check"> I accept the privacy policy and terms of use</label><br></br>
        <button type="submit" className='submit'>SUBMIT<i class="fa-solid fa-paper-plane"></i></button>
      </form>
      </div>
   
    </div>
  )
}

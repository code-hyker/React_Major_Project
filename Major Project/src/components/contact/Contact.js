import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="form-container">
                    <form action='http://www.thepanelstation.com/htmlfiles/confirmation-template/images/thankyou-for-registration-confirmation-temp-eng.png'>
                        <h1><span>Sign</span> Up</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter your Request...we shall get back to you'/>
                        </div>
                        <input type={'submit'} value="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

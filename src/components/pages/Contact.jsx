import React from 'react'
import '../../assets/style/Contact.css'
function Contact() {
    return (
        <>
            <h1 className='contact'>Contact</h1>

            <div style={{ ...styleFormContainer }}>
                <h1>CONNECTING WITH ME</h1>
                <form>
                    <div className='form-group'>
                        <input placeholder='Name'  className='form-control col-md-6'/>
                        
                        <input placeholder='Email'className='form-control col-md-6' />
                    </div>
                    <div className='form-group'>
                        <input placeholder='Subject' className='col-md-12' />
                    </div>
                    <div className='form-group'>
                        <textarea placeholder='Message' className='col-md-12' rows={10}></textarea>
                    </div>
                    <div className='form-group'>
                        <button className='btn-send'>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}


const styleFormContainer = {
    width: '70vw',
    margin: '50px auto'
}

export default Contact

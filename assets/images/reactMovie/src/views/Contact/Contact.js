import React, { useState } from 'react'
import Master from '../../layouts/Master';

export default function Contact() {

    const formInputs = { name: '', email: '', phone: '', message: '' };
    const [getFormHandler, setFormHandler] = useState(formInputs);
    const [getErrors, setErrors] = useState(null);
    
    const sendRequest = (e) => {
        e.preventDefault();
        const result = validator();
        if(Object.keys(result).length===0){
            console.log('sorgu gonderildi')
        }
    }



    const validator = () => {
        // console.log(getFormHandler)
        const errors ={};
        
        if(!getFormHandler.name && getFormHandler.name.length===0){
            errors.name='Bu hissə boş ola bilməz'; 
        }

        if(!getFormHandler.email && getFormHandler.email.length===0){
            errors.email='Bu hissə boş ola bilməz'; 
        }

        if(!getFormHandler.phone && getFormHandler.phone.length===0){
            errors.phone='Bu hissə boş ola bilməz'; 
        }

        if(!getFormHandler.message && getFormHandler.message.length===0){
            errors.message='Bu hissə boş ola bilməz'; 
        }

        setErrors(errors)
        return errors;
    }
    const formOnChangeHandler = (e) => {
        const data = e.target;
        const { name, value } = data;
        setFormHandler({
            ...getFormHandler,
            [name]: value
        })
    }
    return (
        <Master>
            
            <section className="section mt-4">
                <div className="section-body">
                    <div className="sectionTitle">
                        <h1 className='font-bold'>Əlaqə</h1>
                        <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Architecto neque rem,</p>
                    </div>
                    <div className="sectionContent">
                        <div className="d-flex contactSide">
                            <div className="contacts-info">
                                <div className="contact">
                                    <i className="fa-solid fa-phone"></i>
                                    <h6>Əlaqə Telefonu</h6>
                                    <span>0557700580</span>
                                </div>
                                <div className="contact">
                                    <i className="fa-solid fa-envelope"></i>
                                    <h6>Əlaqə Telefonu</h6>
                                    <span>0557700580</span>
                                </div>
                                <div className="contact">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <h6>Əlaqə Telefonu</h6>
                                    <span>0557700580</span>
                                </div>
                            </div>
                            <div className="form p-3">
                                <form action="" onSubmit={sendRequest} method="get">
                                    <div className="form-group mb-3">
                                        <label className='mb-1' htmlFor="">Ad Soyad</label>
                                        <input className={`form-control${getErrors && getErrors.name ? ` error` :''}`} name="name" value={getFormHandler.name} onChange={formOnChangeHandler} type="text" />
                                        {getErrors && getErrors.name ? <div className='text-danger mt-2'>{getErrors.name}</div> :null}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className='mb-1' htmlFor="">Elektron Ünvan</label>
                                        <input className={`form-control${getErrors && getErrors.email ? ` error` :''}`} name="email" value={getFormHandler.email} onChange={formOnChangeHandler} type="text" />
                                        {getErrors && getErrors.email ? <div className='text-danger mt-2'>{getErrors.email}</div> :null}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className='mb-1' htmlFor="">Telefon</label>
                                        <input className={`form-control${getErrors && getErrors.phone ? ` error` :''}`} name="phone" value={getFormHandler.phone} onChange={formOnChangeHandler} type="text" />
                                        {getErrors && getErrors.phone ? <div className='text-danger mt-2'>{getErrors.phone}</div> :null}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className='mb-1' htmlFor="">Mesaj</label>
                                        <input className={`form-control${getErrors && getErrors.message ? ` error` :''}`} name="message" value={getFormHandler.message} onChange={formOnChangeHandler} type="text" />
                                        {getErrors && getErrors.message ? <div className='text-danger mt-2'>{getErrors.message}</div> :null}
                                    </div>
                                    <button type='submit' className="btn btn-dark">Göndər</button>
                                </form>
                            </div>
                        </div>
                        <div className="map w-100">
                            <iframe
                                name='google-map'
                                className='w-100 rounded'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14454.26713841714!2d49.8470094962681!3d40.39477363391419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7aeea4c84d%3A0xf0af878c77aa3560!2zNDIgc2F5bMSxIG9ydGEgbdOZa3TTmWI!5e0!3m2!1saz!2s!4v1653371071592!5m2!1saz!2s"
                                height="350"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Master>
    )
}

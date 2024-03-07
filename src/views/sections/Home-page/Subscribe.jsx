import React from 'react'
import NotificationIcon from '../../../images/subscribe-section/notification.svg'
import { handleSubscribe } from '../../../js/script'
import EmailForm from '../../components/EmailValidationInput'


const Subscribe = () => {
  return (
    <section id="subscribe-section">
                <div className="container">
                    <div className="notify-box">
                        <img src={NotificationIcon} alt="Notification-icon" />
                        <h1>Subscribe to our newsletter to stay informed about latest updates</h1>
                    </div>
                    <div className="subscribe-box">
                        <div className="form-and-button">
                            <form onSubmit={handleSubscribe} noValidate>
                           <EmailForm showPlaceholder={true}showStyle={true}/>
                           <button id="home-subscribe-button" className="btn-theme" >Subscribe</button>
                         </form>
                        </div>
                            <div className="error-message-box">
                                <div className="email-error-message" id="email-error-message"></div>       
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Subscribe
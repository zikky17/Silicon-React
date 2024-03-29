import React, { useState } from 'react';
import NotificationIcon from '../../../images/subscribe-section/notification.svg';
import { UseAppStore } from '../../../contexts/AppState';
import useEmailValidation from './../../../js/emailValidation';

const Subscribe = () => {
  const { handleSubscribe } = UseAppStore();
  const {
    email,
    setEmail,
    emailError,
    handleEmailChange,
    validateEmail,
  } = useEmailValidation();
  const [result, setResult] = useState();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = (message) => {
    setResult(message);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateEmail(email);

    if (!email || emailError) {
      console.error('Invalid email. Please correct the errors.');
      return;
    }

    const result = await handleSubscribe(email);
    setResult(result);

    console.log(result)

    if (result === 200) {
      openPopup(
         <div>
         You are now subscribed!
         <br />
         Subscribtion information will be sent to:<br /> {email}
       </div>);
    } else if (result === 400) {
      openPopup('Subscription failed');
    }
  };

  return (
    <section id="subscribe-section">
       <div className="container">
          <div className="notify-box">
             <img src={NotificationIcon} alt="Notification-icon" />
             <h1>Subscribe to our newsletter to stay informed about latest updates</h1>
          </div>
          <div className="subscribe-box">
             <div className="form-and-button">
                <form onSubmit={handleSubmit} noValidate>
                   <div className="input-group">   
                      <input placeholder='Your Email' 
                         value={email} 
                         onChange={(e) => handleEmailChange(e.target.value)}
                      className="form-email"/> 
                      <button type="submit" id="home-subscribe-button" className="btn-theme">
                      Subscribe
                      </button>
                   </div>
                </form>
             </div>
             <div className="error-message-box">
                <div className="email-error-message subscribe-error" id="email-error-message">
                   {emailError}
                </div>
             </div>
             {isPopupOpen && (
             <div className="popup-container">
                <div className="popup-content">
                   <span className="close-btn" onClick={closePopup}>×</span>
                   <p>{result}</p>
                </div>
             </div>
             )}
          </div>
       </div>
    </section>
    );
    };
    export default Subscribe;

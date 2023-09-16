import React from "react";
import useInput from "../hooks/use-input";
import "./Modal.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Modal = (props) => {
  const {
    show,
    closed,
    submitHandler, 
  } = props;

  const cssClasses = ["Modal", props.show ? "ModalOpen" : "ModalClosed"];

  
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: desDescripValue,
    isValid: desDescripIsValid,
    hasError: desDescripHasError,
    valueChangeHandler: desDescripChangeHandler,
    inputBlurHandler: desDescripBlurHandler,
    reset: resetdesDescrip,
  } = useInput(isNotEmpty);

  
  const {
    value: dateValue,
    isValid: dateIsValid,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isNotEmpty);

  

 const handleSubmit = async (event) => {
  event.preventDefault();

  
  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    desDescripIsValid &&
    dateIsValid
  ) {
    formIsValid = true;
  }

  if (!formIsValid) {
    return;
  }

  const formData = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    designDescription: desDescripValue,
    expectedDeliveryDate: dateValue,
  };

  console.log(formData);
  submitHandler(formData);

  resetFirstName();
  resetLastName();
  resetEmail();
  resetdesDescrip();
  resetDate();
};


  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  
  const designDescriptionClasses = desDescripHasError
    ? "form-control invalid"
    : "form-control";
    
  return (
    <div className={cssClasses.join(" ")}>
         <div className="modalhead">
          <h2 className="modalh2">
            Book a <span className="coloredtxt">Design</span>
          </h2>
          <p className="modalp">
            Fill the form below to book a design with us at KGStudio
          </p>
        </div>
        <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">Name/Brand's Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter your Name or your Brand's Name.</p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="name">Select Design Type</label>
          <select name="designs" id="designss">
            <option value="select">Select type of Design</option>
            <option value="logodes">Logo Design</option>
            <option value="Bandes">Banner Design</option>
            <option value="Flyerdes">Flyer Design</option>
            <option value="Social">Social Media Posters</option>
            <option value="Print">Print Media Designs</option>
            <option value="Mock">Mock Up Designs</option>
            <option value="Logo">Logo</option>
            <option value="Desi">Designs</option>
          </select>
        </div>

      </div>

      <div className="control-group">
        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            placeholder="Enter a valid email address"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Expected Delivery Date</label>
          <input
            type="date"
            id="date"
            value={dateValue}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
        </div>
      </div>

      <div className="control-group">
       
        <div className={designDescriptionClasses}>
          <label htmlFor="name">Design Description</label>
          <textarea
            type="text"
            id="DesignDescrip"
            rows="8" 
            cols="60"
            value={desDescripValue}
            onChange={desDescripChangeHandler}
            onBlur={desDescripBlurHandler}
          />
          {desDescripHasError && (
            <p className="error-text">
              Please enter a short description of the design.
            </p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button className="formbtn" onClick={closed}>Cancel</button>
        <button className="formbtn" onClick={handleSubmit} disabled={props.loading}>
        {props.loading ? 'Submitting...' : 'Book Design'}
        </button>
      </div>
    </form>
    </div>
  );
};

export default Modal;

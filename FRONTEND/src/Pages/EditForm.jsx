import React, { useState, useEffect } from "react";
import "./EditContactForm.css"; // Ensure you have the CSS file for styling

const EditForm = ({ contactData, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...contactData });
  const [countryChange, setCountryChange] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState(contactData.code || ""); // Set initial country code from contactData

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("Updated form data:", formData); // Check the formData content
    onSave(formData); // Pass the updated data back to parent component
    alert("Updated Successfully");
  };

  // Fetch country data on component mount
  useEffect(() => {
    fetch("https://countrynamewithphonecode.onrender.com/")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  // Handle country code changes
  const handleCountrycodechange = (e) => {
    const valueSelected = e.target.value;
    setCountryChange(valueSelected);

    const countryData = countries.find(
      (country) => country.name === valueSelected
    );

    if (countryData) {
      setCountryCode(countryData.code);
      // Update formData with the selected country code
      setFormData((prevData) => ({ ...prevData, code: countryData.code }));
    } else {
      setCountryCode("");
    }
  };

  return (
    <div className="edit-form-container">
      <div className="edit-form">
        <h2>Edit Contact</h2>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange} 
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange} // Corrected the onChange handler
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange} // Corrected the onChange handler
        />

        <label htmlFor="code">Country Code:</label>
        <select onChange={handleCountrycodechange} value={countryChange}> {/* Corrected the onChange handler */}
          <option value="">Select a Country</option>
          {countries.map((country) => (
            <option value={country.name} key={country._id}>
              {country.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Country Code"
          value={formData.code}
          readOnly
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange} 
        />

        <div className="button-container">
          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;

import React, { useState } from "react";
import url from "../config.js";
const CollegeForm = () => {
  const [terms, setTerms] = useState([]);

  const addTerm = () => {
    setTerms([...terms, { id: Date.now(), value: "" }]);
  };

  const removeLastTerm = () => {
    setTerms(terms.slice(0, -1));
  };

  return (
    <div className="form-wrapper">
      <h2>Fill College Details</h2>
      <form
        action={`${url}/api/college/addCollege`}
        method="POST"
        encType="multipart/form-data"
        className="form-container"
      >
        <h1 className="form-title">Submit Your Details</h1>

        <label className="form-label">Name:</label>
        <input type="text" name="name" className="form-input" required />

        <label className="form-label">Website:</label>
        <input type="text" name="website" className="form-input" />

        <label className="form-label">Location:</label>
        <input type="text" name="location" className="form-input" />

        <label className="form-label">Gmap Link:</label>
        <input type="text" name="llink" className="form-input" />

        <label className="form-label">Photos:</label>
        <input type="file" name="photos" className="form-input" multiple />

        <label className="form-label">Terms:</label>
        <div className="terms-container">
          {terms.map((term, index) => (
            <input
              key={term.id}
              type="text"
              name={`feature[${index}]`}
              className="form-input term-input"
              placeholder="Enter a term"
              required
            />
          ))}
        </div>

        <div className="form-buttons">
          <button
            type="button"
            className="form-button add-term-btn"
            onClick={addTerm}
          >
            Add Term
          </button>
          <button
            type="button"
            className="form-button remove-term-btn"
            onClick={removeLastTerm}
          >
            Remove Last Term
          </button>
          <button type="submit" className="form-button submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CollegeForm;

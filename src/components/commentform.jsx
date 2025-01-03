import React, { useState } from "react";
import url from "../config.js";
const CommentForm = ({ collegeId,type }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Prepare form data to send to the API
    const formData = {
      rating,
      content: comment,
    };


console.log(formData,collegeId);
const res =   await fetch(`${url}/api/comment/${type}/${collegeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      credentials:"include",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Comment Submitted");
        // Clear the form
        setRating(0);
        setComment("");
      })
      .catch((error) => {alert("Error submitting comment:")
console.log(err);
      });

      alert("comment added",res.message);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="stard">
       
        <div className="shtarget">
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              src={index <= rating ? "../onstar.png" : "../offstar.png"}
              alt={index <= rating ? "Selected star" : "Unselected star"}
              onClick={() => handleStarClick(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
      <div className="unreview">
        <input
          type="text"
          name="content"
          placeholder="Add comment"
          className="commentinput"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;

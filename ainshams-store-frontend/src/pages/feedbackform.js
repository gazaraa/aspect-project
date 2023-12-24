import React from "react";
import "./feedbackform.css";
const FeedbackForm = () => {
  return (
    <form action="https://formspree.io/f/mleqrzeq" method="POST">
      <label>
        Your message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;

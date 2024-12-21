import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName.length < 3 ||
      formData.subject.length < 3 ||
      formData.body.length < 3
    ) {
      alert("Full name, subject, and body must be at least 3 characters long.");
      return;
    }
    if (!formData.email) {
      alert("Email is required.");
      return;
    }
    setIsSubmitting(true);
    console.log(formData);
  };

  return (
    <div className="w-11/12 mx-auto">
      {!isSubmitting ? (
        <form
          className="bg-heading mt-10 flex flex-col p-5 gap-5 max-w-[500px] mx-auto rounded-lg coolshadow"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Full Name:</label>
            <input
              className="border-2 border-black coolshadowsm p-2"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Subject:</label>
            <input
              className="border-2 border-black coolshadowsm p-2"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email:</label>
            <input
              className="border-2 border-black coolshadowsm p-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Body:</label>
            <textarea
              className="border-2 border-black coolshadowsm p-2"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>
          <button
            className="bg-white rounded-sm border-2 border-black coolshadowsm p-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-semibold text-center mt-10">
            Thank you for your submission!
          </h1>
          <NavLink
            className="bg-heading text-white p-2 md:max-w-[300px] flex items-center justify-center mt-5"
            to="/"
          >
            Go back to shopping
          </NavLink>
        </div>
      )}
    </div>
  );
};

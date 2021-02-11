import { useState, useEffect } from "react";
import { validate } from "@babel/types";

const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    emial: "",
    password: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};
export default UseForm;

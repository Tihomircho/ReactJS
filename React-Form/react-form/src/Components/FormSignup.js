import React, { useState, useEffect } from "react";

import {
  Button,
  TextField,
  Divider,
  ListItemSecondaryAction,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";
// import { validate } from '@babel/types';

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseForm(
    submitForm,
    validate
  );

  return (
    <div className="box">
      <h1>This is Form </h1>
      <form
        class="form-control"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Enter your name"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          helperText={errors.username}
          type="text"
          name="username"
        />

        <TextField
          label="Email:"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          helperText={errors.email}
          type="email"
          name="email"
        />
        <TextField
          label="Enter password:"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          helperText={errors.password}
          type="password"
          name="password"
        />
        <TextField
          label="Confirm password:"
          variant="outlined"
          value={values.password2}
          onChange={handleChange}
          helperText={errors.password2}
          type="password"
          name="password2"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default FormSignup;

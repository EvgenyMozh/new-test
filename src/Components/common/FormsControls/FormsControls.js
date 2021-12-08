import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControl.module.css";

const FormControl = ({ input, meta: {touched, error}, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};

export const createFild = (placeholder, name, validators, component, props = {}, text = "") => {
  return <div>
    <Field placeholder={placeholder} name={name}
    validate={validators}
    component={component}
    {...props}/> {text}
  </div>

}
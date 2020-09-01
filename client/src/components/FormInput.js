import React from 'react';
import { useField } from 'formik';
import FormError from './../components/common/FormError';

const FormInput = ({ ariaLabel, name, type, placeholder }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <input
        {...field}
        aria-label={ariaLabel}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <FormError text={meta.error}></FormError>
      ) : null}
    </>
  );
};

export default FormInput;

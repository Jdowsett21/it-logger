import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import GradientButton from '../components/common/GradientButton';
import Hyperlink from '../components/common/Hyperlink';
import Label from '../components/common/Label';
import FormInput from '../components/FormInput';
import FormSuccess from '../components/layout/FormSuccess';
import FormError from '../components/layout/FormError';

import {
  signupValidation,
  isUserAuthenticated,
  setAuthInfo,
  isAdmin,
} from '../actions/authActions';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Signup = ({
  auth: {
    signupError,
    isAuthenticated,
    signupSuccess,
    redirectOnLogin,
    loading,
  },
  isUserAuthenticated,
  setAuthInfo,
  isAdmin,
  signupValidation,
}) => {
  useEffect(() => {
    isUserAuthenticated();
    return () => {
      setAuthInfo();
      isAdmin();
    };
  }, []);
  return (
    <>
      {(redirectOnLogin || isAuthenticated) && <Redirect to='/dashboard' />}
      <h2>Sign up for an account</h2>
      <p>
        Already have an account? <Hyperlink to='login' text='Log in now' />
      </p>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => signupValidation(values)}
        validationSchema={SignupSchema}
      >
        {() => (
          <Form className='mt-8'>
            {signupSuccess && <FormSuccess text={signupSuccess} />}
            {signupError && <FormError text={signupError} />}

            <Label text='First Name' />

            <FormInput
              ariaLabel='First Name'
              name='firstName'
              type='text'
              placeholder='First Name'
            />

            <Label text='Last Name' />

            <FormInput
              ariaLabel='Last Name'
              name='lastName'
              type='text'
              placeholder='Last Name'
            />

            <Label text='Email address' />

            <FormInput
              ariaLabel='Email address'
              name='email'
              type='email'
              placeholder='Email address'
            />

            <Label text='Password' />

            <FormInput
              ariaLabel='Password'
              name='password'
              type='password'
              placeholder='Password'
            />

            <GradientButton type='submit' text='Sign Up' loading={loading} />
          </Form>
        )}
      </Formik>
    </>
  );
};

Signup.propTypes = {
  auth: PropTypes.object.isRequired,
  signupValidation: PropTypes.func.isRequired,
  setAuthInfo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  signupValidation,
  isUserAuthenticated,
  setAuthInfo,
  isAdmin,
})(Signup);

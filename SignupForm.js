import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'; // Import SignupForm.css

const SignupForm = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // make surepassword match
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { type: 'manual', message: 'Passwords must match' });
      return;
    }

    // req to backend server
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('User created successfully');
    } else {
      console.error('Error creating user:', await response.text());
    }
    navigate('/dashboard');
  };

  return (
    <div className="signup-form-container"> {}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form"> {/* Apply signup-form class */}
        <input {...register('username', { required: true })} placeholder="Username" />
        {errors.username && <p>{errors.username.message}</p>}
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <input {...register('password', { required: true, minLength: 6 })} type="password" placeholder="Password" />
        {errors.password && <p>{errors.password.message}</p>}
        <input {...register('confirmPassword', { required: true })} type="password" placeholder="Confirm Password" />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
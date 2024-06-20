import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase'; 
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import googleIcon from './google.png'; // Replace with the actual path to your Google icon

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      navigate('/dashboard'); 
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError('כתובת דוא"ל לא תקינה');
      } else if (error.code === 'auth/wrong-password') {
        setError('סיסמה שגויה');
      } else if (error.code === 'auth/user-not-found') {
        setError('המשתמש לא נמצא');
      } else {
        setError('אירעה שגיאה. אנא נסה שוב מאוחר יותר.'); 
        console.error('Login error:', error); 
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User signed in with Google:", user);

      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing in with Google:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        setSignInError('You closed the popup. Please try again.');
      } else if (error.code === 'auth/account-exists-with-different-credential') {
        setSignInError('An account already exists with this email address.');
      } else {
        setSignInError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">דואר אלקטרוני:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required /> 
        </div>
        <div>
          <label htmlFor="password">סיסמה:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required /> 
        </div>
        <button type="submit">התחבר</button>
      </form>

      {error && (
        <div className="error-message"> 
          <p>{error}</p> 
        </div>
      )}

      <button onClick={signInWithGoogle} className="google-signin-button">
        {googleIcon && <img src={googleIcon} alt="Google Icon" />}
        <span>התחבר עם Google</span> 
      </button>
    </div>
  );
};

export default LoginPage;

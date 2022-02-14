import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const isBackgroundGrey = false;
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setCredential('')
    setPassword('')
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });

  }

  return (
  <div className={isBackgroundGrey ? 'background-grey' : 'background-white'}>
    <div className="login-headers-div">

      <h1 className="login-font">Welcome Back!</h1>
      <h3 className="login-font">Let's get you napping.</h3>
    </div>
      <div className="login-form-container">

        <div id="inner-login-container">

              <form onSubmit={handleSubmit}>
                <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                  <div className="email-login-div">

                    <input
                    className="input-login"
                      type="text"
                      value={credential}
                      onChange={(e) => setCredential(e.target.value)}
                      placeholder="email"
                      required
                    />
                  </div>

                  <div id="login-password-div">

                      <input
                        className="input-login"
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />

                  </div>
                <button id="login-submit" type="submit">Login</button>
              </form>

        </div>
      </div>
        <div className="login-to-sign-div">

          <div className="grey-line"></div>

          <div>Don't have a NapCamp account? <Link
          id="login-to-signup"
          to="/signup"
          >Sign up!</Link></div>

        </div>
    </div>
  );
}

export default LoginFormPage;

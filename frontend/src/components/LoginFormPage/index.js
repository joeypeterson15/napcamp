import React, { useState } from 'react';
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

      <h1>Welcome Back!</h1>
      <h3>Let's get you napping.</h3>
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
                <button id="login-submit" type="submit">Log In</button>
              </form>

        </div>


      </div>
    </div>
  );
}

export default LoginFormPage;

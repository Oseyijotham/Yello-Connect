import { useDispatch } from 'react-redux';
import { register } from '../../redux/AuthRedux/operations';
import css from './Register.module.css';
import logoImage from './call.png';
//import { useAuthHook } from '../../customHook/customHook';
//import { useEffect } from 'react';

export const Register = () => {
const dispatch = useDispatch();
//const { token, user } = useAuthHook();

const handleSubmit = e => {
  e.preventDefault();
  e.target.elements.button.style.boxShadow =
    'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
  setTimeout(() => {
    e.target.elements.button.style.boxShadow = 'none';
  }, 1000);
  const form = e.currentTarget;
  dispatch(
    register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    })
  );
  //form.reset();
};

    return (
      <div className={css.login}>
        <div to="/" className={css.symbol}>
          <div className={css.logo}>
            <div role="img" aria-label="computer icon" className={css.frame}>
              <img src={logoImage} alt="Logo" width="50px" />
            </div>
            <span className={css.iconLabel}>Yello</span>
            <span className={css.iconLabel}>Connect</span>
          </div>
        </div>

        <div>
          <div className={css.formContainer}>
            <form
              className={css.form}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <label className={css.label}>
                First Name
                <input
                  type="text"
                  name="fistname"
                  className={css.input}
                  placeholder="Enter Your First Name"
                  title="Enter Your First Name"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Last Name
                <input
                  type="text"
                  name="lastname"
                  className={css.input}
                  placeholder="Enter Your Last Name"
                  title="Enter Your Last Name"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Email
                <input
                  type="email"
                  name="email"
                  className={css.input}
                  placeholder="Enter Email Address"
                  title="Enter Email Address"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Phone Number
                <input
                  type="number"
                  name="phone"
                  className={css.input}
                  placeholder="Enter Phone Number"
                  title="Enter Phone Number"
                  autoComplete="off"
                  required
                />
              </label>
              <label className={css.label}>
                Password
                <input
                  type="password"
                  name="password"
                  className={css.input}
                  title="Minimum of Six Characters, Max 16"
                  placeholder="Minimum of Six Characters, Max 16"
                  autoComplete="off"
                  required
                />
              </label>
              <button className={css.inputButton} name="button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;

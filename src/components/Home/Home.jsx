import css from './Home.module.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from '../../redux/AppRedux/selectors';
import { selectUser } from '../../redux/AuthRedux/selectors';
import { updateAvatar } from '../../redux/AuthRedux/operations';


export const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const myUser = useSelector(selectUser);
   const handleImageChange = e => {
     const file = e.target.files[0];
     //dispatch(updateAvatar({ avatar: file }));
     console.log({ avatar: file });
     if (file) {
       dispatch(updateAvatar({ avatar: file })); // Store the file under the key "avatar"
     }
   };


  useEffect(() => {}, [dispatch]);
  return (
    <div className={css.homeDisplay}>
      <div>
        <div className={css.homeTitle}>Your Contacts, Anytime, Anywhere</div>
        <div className={css.homeIntro}>
          <i>
            Welcome to Yello Connect! Securely store your contacts and access
            them on any device. Our user-friendly platform makes it easy to keep
            your connections organized and up-to-date.
          </i>
        </div>
      </div>
      <Link to="/sharedLayout/contacts" className={css.homeLink}>
        Start Connecting
      </Link>

      {isLoading && !error && <div>Please wait...</div>}
      {error && <div>There was an error</div>}

      <div className={css.detailsSection}>
        <h2 className={css.detailsSectionTitle}>YOUR DETAILS</h2>
        <div className={css.detailsImageWrapper}>
          <img
            className={css.detailsImage}
            src={`http://localhost:8000${myUser.avatarURL}`}
            alt="User"
          />
        </div>
        <input
          className={css.detailsImageButton}
          type="file"
          accept="image/*"
          name="avatar"
          onChange={handleImageChange}
          id="2"
        />
        <label className={css.detailsImageInput} htmlFor="2">
          Update Picture +
        </label>
        <ul className={css.detailsWrapper}>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>First Name:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.firstname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Last Name:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.lastname}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Email:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.email}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Phone Number:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.phone}</i>
              </span>
            </span>
          </li>
          <li className={css.detailsItem}>
            <span className={css.detailsCover}>
              <span className={css.details}>Groups:-</span>{' '}
              <span className={css.detailsVal}>
                <i className={css.detail}>{myUser.groups.join(', ')}</i>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
    
};
export default Home;
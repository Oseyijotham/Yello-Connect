import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts, closeModal } from '../../redux/AppRedux/operations';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  selectError,
  selectIsLoading,
  selectOpenModal,
  selectedContact,
  selectedIsSlideLoading,
} from '../../redux/AppRedux/selectors';
import css from './Contacts.module.css';
import svg from './icons.svg';
import { ThreeCircles } from 'react-loader-spinner';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isSlideLoading = useSelector(selectedIsSlideLoading);
  const myContact = useSelector(selectedContact);
  const error = useSelector(selectError);
   const isOpenModal = useSelector(selectOpenModal);
 const handleModalClose = () => {
   dispatch(closeModal());
 };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  //console.log(myVal);

  return (
    <div
      className={clsx(css.coverWrapper, {
        [css.selected]: isOpenModal,
        'is-elevated': false,
      })}
    >
      <ContactForm>
        {isLoading && !error && <b>Please wait...</b>}
        {error && <b>There was an error</b>}
        <div
          className={clsx(css.contactsDetailsHide, {
            [css.contactsDetailsShow]: isOpenModal,
            'is-elevated': false,
          })}
        >
          {isSlideLoading && (
            <div className={css.backDrop}>
              <ThreeCircles
                visible={true}
                height="80"
                width="80"
                color="rgb(235, 144, 25)"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass={css.loader}
              />
            </div>
          )}
          <button className={css.closeModal} onClick={handleModalClose}>
            <svg width="10px" height="10px" className={css.modalIcon}>
              <use href={`${svg}#icon-cross`}></use>
            </svg>
          </button>
          <div className={css.detailsImageWrapper}>
            <img
              className={css.detailsImage}
              src={`http://localhost:8000/avatars/Unknown.png`}
              alt="User"
            />
          </div>
          <input
            className={css.detailsImageButton}
            type="file"
            accept="image/*"
            name="avatar"
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
                  <i className={css.detail}>{myContact.name}</i>
                </span>
              </span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.details}>Last Name:-</span>{' '}
                <span className={css.detailsVal}>
                  <i className={css.detail}>{myContact.name}</i>
                </span>
              </span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.details}>Email:-</span>{' '}
                <span className={css.detailsVal}>
                  <i className={css.detail}>{myContact.name}</i>
                </span>
              </span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.details}>Phone Number:-</span>{' '}
                <span className={css.detailsVal}>
                  <i className={css.detail}>{myContact.phone}</i>
                </span>
              </span>
            </li>
            <li className={css.detailsItem}>
              <span className={css.detailsCover}>
                <span className={css.details}>Groups:-</span>{' '}
                <span className={css.detailsVal}>
                  <i className={css.detail}>{myContact.name}</i>
                </span>
              </span>
            </li>
          </ul>
        </div>
        <ContactList>
          <Filter />
        </ContactList>
      </ContactForm>
    </div>
  );
};

export default Contacts;

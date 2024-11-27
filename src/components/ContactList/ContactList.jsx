import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/AppRedux/selectors';
import {
  selectContactsFilter
} from '../../redux/AppRedux/selectors';
import {
  deleteContact,
  openModal,
  fetchContactById
} from '../../redux/AppRedux/operations';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ children }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleDelete = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 1000);
    //console.log(evt.target.name);
    dispatch(deleteContact(evt.target.name));
    /*//dispatch(closeModal());
    const exist = contacts.find(contact => contact._id === evt.target.name);
    console.log(contacts);
    if (exist === undefined) {
      console.log('gvghi');
      dispatch(closeModal());
    }*/
    
  };
  const filterValue = useSelector(selectContactsFilter);

  const handleModalOpen = (evt) => {
    if (evt.target.getAttribute('data-id')) {
      //console.log('Modal opened!');

      const id = evt.currentTarget.getAttribute('data-id');
      //console.log(id);
      dispatch(fetchContactById(id));
      dispatch(openModal());
    }
  };

  

  return (
    <div className={css.contactsSection}>
      <h3 className={css.contactsTitle}>Contacts</h3>
      {children}
      {filterValue === '' && contacts.length !== 0 && (
        <ul className={css.contactsList}>
          {contacts.map(contact => (
            <li
              key={contact._id}
              data-id={contact._id}
              className={css.contactsItem}
              onClick={handleModalOpen}
            >
              <span className={css.contactsData} data-id={contact._id}>
                {contact.name}:{' '}
                <span className={css.contactsPhone} data-id={contact._id}>
                  {contact.phone}
                </span>
              </span>
              <span className={css.contactsButtonArea}>
                <button
                  className={css.contactsButton}
                  name={contact._id}
                  onClick={() => navigator.clipboard.writeText(contact.phone)}
                >
                  Copy
                </button>
                <button
                  type="submit"
                  className={css.contactsButton}
                  name={contact._id}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  children: PropTypes.node,
};

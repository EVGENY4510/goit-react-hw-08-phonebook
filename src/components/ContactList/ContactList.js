import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';

export default function ContactList() {
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  console.log(contacts);
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const displaySearchResult = () => {
    const filteredContacts = contacts.filter(contact => {
      const searchResultLower = filter.toLowerCase();
      const contactLower = contact.name.toLowerCase();
      return contactLower.includes(searchResultLower);
    });

    return filteredContacts.map(contact => (
      <li key={contact.id} className={css.item}>
        <p className={css.titleP}>
          - {contact.name} :<span className={css.span}>{contact.number}</span>
        </p>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </li>
    ));
  };

  return <ul className={css.contactWrapper}>{displaySearchResult()}</ul>;
}

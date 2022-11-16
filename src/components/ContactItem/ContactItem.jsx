import css from './contactItem.module.css'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from 'redux/slicers/contactsSlice';

const ContactItem = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter));

    const deleteUser = (deleteId) => {
        dispatch(deleteContact(deleteId))
    }

    return filteredContacts.map(({ name, number, id }) => {
        return (
            <li className={css.item} key={id}>
                <span>{name}: {number}</span>
                <button className={css.button} onClick={()=> deleteUser(id)} type="button">delete</button>
            </li>
        )
    })
}

ContactItem.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.number,
}

export default ContactItem;
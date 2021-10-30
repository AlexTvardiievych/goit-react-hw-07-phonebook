import { useSelector } from "react-redux";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/Contacts/contactsSlice";
import { getFilter } from "../../Selectors/contacts-selectors";
import PropTypes from "prop-types";

import ContactItem from "../ContactItem/ContactItem";
import Button from "../Utils/Button/Button";
import { List, Item } from "./Contacts.styled";

function ContactList() {
  const { data: contactList } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector((state) => getFilter(state));
  const contacts = contactList?.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <List>
        {contactList &&
          contacts.map((contact) => (
            <Item key={contact.id}>
              <ContactItem contact={contact} />
              <Button
                title="Remove from contacts"
                text="Remove"
                type="button"
                onClick={() => deleteContact(contact.id)}
              />
            </Item>
          ))}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
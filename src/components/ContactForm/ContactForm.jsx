import { useState } from "react";
import { useCreateContactMutation, useFetchContactsQuery } from "../../redux/Contacts/contactsSlice";
import PropTypes from "prop-types";
import { Form } from "./ContactForm.styled";
import Button from "../Utils/Button/Button";
import Title from "../Utils/Title/Title";
import Input from "../Utils/Input/Input";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkOnSameContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkOnSameContact) {
      alert(`${name} is already in contacts`);
      setName("");
      setNumber("");
      return;
    }

    if (name === "" || number === "") {
      alert("Please fill empty fields");
      return;
    }

    createContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title marginR={15} size={18} text="Name" />
      <Input
        placeholder="type name..."
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
      />
      <Title marginR={15} marginL={30} size={18} text="Number" />
      <Input
        placeholder="type number..."
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
      />
      <Button
        title="Add to contacts"
        text="Add"
        size={20}
        type="submit"
      />
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
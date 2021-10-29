import { React, useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import nextId from 'react-id-generator';
import Container from './Utils/Container/Container';
import Title from './Utils/Title/Title';

function App() {
    const [contacts, setContacts] = useState([]);

    const [filter, setFilter] = useState("");

    useEffect(() => {
        const contacts = localStorage.getItem("contacts");
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            setContacts(parsedContacts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
        if (contacts.length === 0) {
            localStorage.removeItem("contacts");
        }
    }, [contacts]);

    const addContact = (data) => {
        const { name, number } = data;
        const id = nextId();
        const newContact = {
            name,
            id,
            number,
        };

        const checkOnSameContact = contacts.find(
            contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
        );

        if (checkOnSameContact) {
            alert(`${newContact.name} is already in contacts`);
        }
        else {
            if (name === '' || number === '') {
                alert('Please, fill empty fields');
                return;
            } else {
                setContacts((prev) => [...prev, newContact]);
            }
        }
    }

    const deleteContact = contactId => {
        setContacts((prev) => prev.filter((contact) => contactId !== contact.id));
    };

    const handleFilterChange = e => {
        const target = e.target.value;
        setFilter(target);
    };

    const filterByName = () => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

    return (
        <Container>
            <Title color="#424242" size={30} text="Phonebook" />
            <ContactForm onSubmit={addContact} contacts={contacts} />
            <Filter
                value={filter}
                onChange={handleFilterChange} />

            <Title marginT={10} size={20} text="Contacts" />

            <ContactList
                onDeleteContact={deleteContact}
                contacts={filterByName()}
            />
        </Container>
    );

}

export default App;
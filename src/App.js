import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Utils/Container/Container";
import Title from "./components/Utils/Title/Title";

function App() {

  return (
    <Container>
      <Title color="#424242" size={30} text="Phonebook" />
      <div>
        <ContactForm />
      </div>
      <Filter />
      <Title marginT={40} size={20} text="Contacts" />
      <ContactList />
    </Container>
  );
}

export default App;

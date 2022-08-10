import React from "react";
import ContactCard from "./Contact";
import contacts from "../contacts";

function App() {
  let components = [];

  contacts.forEach((contact) => {
    components.push(
      <ContactCard
        name={contact.name}
        email={contact.email}
        phone={contact.email}
        img={contact.imgURL}
      />
    );
  });
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {components[0]}
      {components[1]}
      {components[2]}
    </div>
  );
}

export default App;

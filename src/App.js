import './App.css';
import ContactsList from "./components/contactsList";
import Chat from "./components/chat";

function App() {
  return (
    <div className="App">
      <div className="upLining" />
      <div className="content">
         <ContactsList />
         <Chat />
      </div>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



const App= () => {
  const [notes, setNotes] = React.useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  
  }

  return(
  <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem, index) => (
    <Note 
    key={index} 
    title={noteItem.title} 
    content={noteItem.content} 
     />
  ))}    
  <Footer />
  </div>
)};


export default App;

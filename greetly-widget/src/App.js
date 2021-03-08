import React from 'react'
import SearchBar from './components/searchBar/SearchBar'
import ContactCard from './components/contactCard/ContactCard'
import people from './MOCK_DATA.json'
import './App.css';

function App() {

  console.log(people)

  return (
    <div className="w-1/2 m-auto flex flex-col justify-center items-center">
      <div className=''>
      <SearchBar />
      </div>
      <div>
        {people.map((person, index) => {
          return (
            <ContactCard key={index} person={person}/>
          );
        })}
      </div>
      <div>
        {/* render contact data in this div */}
      </div>
    </div>
  );
}

export default App;

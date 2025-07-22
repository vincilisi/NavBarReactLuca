import React from 'react'
import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import Card from './components/card'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (query) => {
    setSearchTerm(query); // aggiorna lo stato con la query
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <h1>Prova NavFiga</h1>
      <Card searchTerm={searchTerm} />
    </>
  )
}

export default App;

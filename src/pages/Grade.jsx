import React from 'react'
import Navbar from '../components/Navbar'
import '../style/Grade.css'
import SearchForm from '../components/SearchForm'
import SearchResult from '../components/SearchResult'

function Grade() {
  return (
    <div className="container">
      <Navbar />
      <header className="Grade-header">
        <h1> Cari Grade Gunpla </h1>
        <SearchForm />
        <SearchResult />
      </header>
    </div>
  )
}

export default Grade
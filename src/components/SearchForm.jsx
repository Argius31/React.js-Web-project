import { useState } from "react";
import '../style/SearchForm.css';
import gradeData from '../gradeData'; // Import data deskripsi dan gambar tambahan

function SearchForm() {
  const [grade, setGrade] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');

    const upperGrade = grade.toUpperCase();

    if (!grade || !gradeData[upperGrade]) {
      setError('Grade tidak ditemukan. Mohon periksa kembali input Anda.');
      setSearchResult(null);
      return;
    }

    const result = {
      description: gradeData[upperGrade].description,
      additionalImage: gradeData[upperGrade].additionalImage
    };
    setSearchResult(result);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <label htmlFor="grade">Masukkan Grade: (HG, RG, MG, PG)</label>
        <input
          id="grade"
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Masukkan grade..."
        />
        <button type="submit" className="search-button">Cari</button>
        {error && <p className="error-message">{error}</p>}
      </form>

      {searchResult && (
        <div className="search-result">
          <p>{searchResult.description}</p>
          <img src={searchResult.additionalImage} alt={`${grade} detail`} className="additional-image" />
        </div>
      )}
    </div>
  );
}

export default SearchForm;

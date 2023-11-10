import { useState } from 'react';

import { Form, Button, Input } from './SearchForm.styled';

const SearchForm = ({ onSearchMovies }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearchMovies(search);
  };

  // Неконтрольована форма
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const value = e.currentTarget.elements[0].value;
  //   onSearchMovies(value);
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="film" value={search} onChange={handleChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;

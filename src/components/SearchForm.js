import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchcocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handlesubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your Favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchcocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

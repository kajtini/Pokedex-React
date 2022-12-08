function SearchBar(props) {
  return (
    <>
      <input
        type="text"
        placeholder="Search For Pokemon"
        className="outline-input px-4 py-4 rounded-3xl bg-card-border text-text font-primary"
        value={props.value}
        onChange={(event) => props.handleChange(event)}
      />
    </>
  );
}

export default SearchBar;

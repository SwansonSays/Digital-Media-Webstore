
const SearchBar = ({ posts, setSearchResults }) => {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("searched " + event.target.searchData.value);

        const resultsArray = event.target.searchData.value;

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    name="searchData"
                />
                <button className="searchButton">Search</button>
            </form>
        </header>
        )
}

export default SearchBar
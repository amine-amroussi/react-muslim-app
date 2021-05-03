import React from 'react'
import "./Search.style.scss"

const Search = () => {
    return (
        <header className="search section " >
            <form className="search__form" >
                <input type="text" className="search__input" placeholder="Search a city" />
                <button className="btn" >search</button>
            </form>
        </header>
    )
}

export default Search

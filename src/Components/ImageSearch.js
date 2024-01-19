import React,{useState} from "react";
import axios from "axios";

const ImageSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');


    function handleSearch(e) {
        e.preventDefault();

        axios.get("https://api.unsplash.com/search/photos",
        {
           headers: {
            "Accept-Version" : "v1",
            Authorization : "Client-ID MgwsutClc8YpZay6xnzQColKMiHiDa61Ai6UnL14vPo"
           },
            params: {
                query: searchQuery
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        
    }


    return(
        <div>

            <form onSubmit={handleSearch}>
                 <input type="text" placeholder="Enter Search" 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                  />
                    <button type="submit">Search</button>
                 
            </form>


        </div>
    )
}

export default ImageSearch;
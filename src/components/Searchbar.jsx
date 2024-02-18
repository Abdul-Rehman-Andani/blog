import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
    return (
        <>
                <div className="col-lg-7  position-sticky" style={{top : "20px"}}>
                    <div className="search-bar">
                        <IoIosSearch />
                        <input type="text" placeholder="Search here"/>
                </div>
            </div>
        </>
    )
}

export default Searchbar;

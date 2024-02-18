import { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {

    const [input, setInput] = useState(1)
    const [blog, setBlog] = useState([]);
    const [add, setAdd] = useState({
        data: []
    });

    const getBlogs = async () => {
        const res = await axios.get("http://localhost:9000/blog");
        setBlog(res.data);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const handleAdd = () => {
        setAdd({...add, data: [...add.data, ""]});
    }

    const handleData = (e, i)  => {
        const { value } = e.target;
        let newData = add.data;
        newData[i] = value;
        setAdd({ ...add, data: newData });
    }
    console.log(add);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(add);
    }

    return (
        <>
            <div className="row mt-5">
                <h3>Top <strong>Trending</strong></h3>
            </div>

            {/* <div className="row flex-nowrap overflow-auto">
                {
                    blog.map((b, i) => {
                        return <div className="col-lg-3 col-8 mt-3 mb-3 position-relative" key={i}>
                            <figure className="rounded-3 " style={{ left: "0px", top: "0px", height: "320px", objectFit: "cover", overflow: "hidden" }}>
                                <img style={{ height: "100%", width: "100%" }} src={`http://localhost:9000/images/${b.img}`} alt="img" className='img-fluid ' />
                            </figure>
                        </div>
                    })
                }
            </div> */}

            <div className="row">
                <form onSubmit={handleSubmit}>
                <div className="col-12">
                        {
                            add.data.map((val, i) => {
                                return <input type="file" name="data" value={val} onChange={(e) => handleData(e,i)} />
                            })
                        }
                        
                        <button onClick={handleAdd}>Add</button>

                </div>
                    
                    <button type="submit" >Submit</button>
               </form>
            </div>
        </>
    )
}

export default Trending;

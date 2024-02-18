import { Link, useParams } from 'react-router-dom';

const Catogary = () => {

    const { catogary } = useParams();
    const catogries = ["Programming", "Designing", "Sports", "Fashion", "Development", "Economy", "Science", "Medical", "Politics", "Beauty", "Health", "Engineering", "Bussiness", "Entertaiment"];

    return (
        <>
            <aside className='position-sticky' style={{top : "110px"}}>
                <div className="row overflow-auto flex-nowrap flex-lg-wrap gap-2 catogary mt-4" >

                    {
                        catogries.map((cat, i) => {
                            return <div className=' p-0 mx-2 mx-lg-0' style={{ width: "fit-content" }} key={i}>
                                {
                                    catogary == cat ? <Link to={`/catogary/${cat}`}><button style={{ backgroundColor: "var(--bg)", color: "white" }}>{cat}</button></Link> : <Link to={`/catogary/${cat}`}><button className='overflow-auto '>{cat}</button></Link>
                                }
                            </div>
                        })
                    }   
                </div>
            </aside>
        </>
    )
}

export default Catogary;


function NewsItem(props) {
    let imagePlaceholder = "https://i1.wp.com/www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg?resize=300%2C203&ssl=1";
    return (
        <div className="card position-relative border border-light" style={{width: "18rem", height: "100%", boxShadow: props.theme === "light" && "0 10px 25px rgba(0,0,0,0.4)", backgroundColor: props.theme === "dark"?"rgb(18,18,20)":"white", color: props.theme === "dark"? "white":"black"}}>
        <span className="badge bg-white text-danger position-absolute top-0 end-0 m-2 rounded-1 fw-bolder">{props.source}</span>
        <img src={props.imageUrl?props.imageUrl:imagePlaceholder} className="card-img-top" alt="" />
        <div className="card-body">
            <a href={props.url} className={`${props.theme === "dark"? "text-white":"text-black"} text-decoration-none`} target="_blank" rel="noreferrer">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text p-0"><small className={`text-${props.theme === "dark"?"white fst-italic":"muted"}`}>By {props.author? props.author:"Unknown"} on { new Date(props.date).toDateString() }</small></p>
            </a>
        </div>
        <div className="card-footer d-grid" style={{padding: "16px", backgroundColor: props.theme === "dark"?"rgb(18,18,20)":"white", borderColor: props.theme === "dark" && "white"}}>
            <a href={props.url} className="btn btn-primary" target="_blank" rel="noreferrer">Read Full News</a>
        </div>
        </div>
    )
}

export default NewsItem;
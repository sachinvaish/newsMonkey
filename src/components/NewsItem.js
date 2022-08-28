import React from 'react';

const NewsItem =(props)=> {

        let {title, desc, imageUrl, url, dateTime, author, source} = props;
    
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>

                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{right:'-30px', zIndex:'1'}}>{source}</span>
                                            
                        <p className="card-text"><small className="text-muted">Published by : {author?author:"Unknown"}  on {new Date(dateTime).toGMTString().slice(0,22)}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
    );
}

export default NewsItem;

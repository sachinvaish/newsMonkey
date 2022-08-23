import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {

        let {title, desc,imageUrl,url} = this.props;
    
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
    );
  }
}

export default NewsItem;

import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [];
    constructor(){
        super();
        this.state={
            articles : this.articles,
            loading : false,
            page : 1,
            pageSize : 12,
            totalResults : 0,
            category : 'general',
            country : 'in',
            apiKey : '90d07a0194994afb81b25f2807eb4937'
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${this.state.apiKey}&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults
        });
    }
    
    handleNextClick=async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults)))
        {
            console.log(" in NExt , Page is "+this.state.page);
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=90d07a0194994afb81b25f2807eb4937&pageSize=12&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page+1
        });
    }
    }
    
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=90d07a0194994afb81b25f2807eb4937&pageSize=12&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page-1
        });
    }

    handleChangeCategory=(newCat)=>{
        this.setState({
            category : newCat
        })
    }


  render() {
    return (
      <div className='container my-3'>
        <div className="row">
            {this.state.articles.map((element)=>{
                let placeholder = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625"
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage?element.urlToImage:placeholder} url={element.url}/>
                </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
            <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
            <h5>Showing Results {((this.state.page-1)*this.state.pageSize)+1} to {((this.state.page)*this.state.pageSize)>this.state.totalResults ? this.state.totalResults : (this.state.page)*this.state.pageSize }
             | Total Results : {this.state.totalResults}</h5>
            
            <button  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
            {/* <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button> */}

            <h5>Page no. {this.state.page} | Page size : {this.state.pageSize}</h5>
        </div>
        
      </div>
      
    );
  }
}

export default News;

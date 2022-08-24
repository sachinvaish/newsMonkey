import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = ({
        pageSize : 18,
        category : 'general',
        country : 'in',
        apiKey : '90d07a0194994afb81b25f2807eb4937'
    })

    // articles = [];
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0
        }
    }

    // https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=90d07a0194994afb81b25f2807eb4937&pageSize=18&page=2

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading:false
        });
    }
    
    handleNextClick=async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults)))
        {
        console.log(" in NExt , Page is "+this.state.page);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page+1,
            loading:false
        });
    }
    }
    
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page-1}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page-1,
            loading:false
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
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                let placeholder = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625"
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage?element.urlToImage:placeholder} url={element.url}/>
                </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
            <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
                       
            <h5>Showing Page {this.state.page} of {Math.ceil(this.state.totalResults/this.props.pageSize)} | Total Results : {this.state.totalResults}</h5>
            
            <button  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
            {/* <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.state.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button> */}

        </div>
        
      </div>
      
    );
  }
}

export default News;

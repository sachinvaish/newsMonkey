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

    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page : 1,
            totalResults : 0,
            dateTime : null,
            author : null
        }
    }

    updateNews = async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading:false,
            dateTime : parsedData.publishedAt,
            author : parsedData.author
        });
    }

    async componentDidMount(){
        this.updateNews();
    }
    
    handleNextClick=async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
        {
         await this.setState({ page : this.state.page+1 });
        }
    this.updateNews();
    }
    
    handlePrevClick=async()=>{
        await this.setState({ page : this.state.page-1 });
        this.updateNews();
    }


  render() {
    return (
      <div className='container my-3'>
        {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                let placeholder = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625"
                return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage?element.urlToImage:placeholder} url={element.url} dateTime={element.publishedAt} author={element.author} source={element.source.name}/>
                </div>
            })}
        </div>
        <div className="d-flex justify-content-between">
            <button disabled={this.state.page===1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
                       
            <h5>Showing Page {this.state.page} of {Math.ceil(this.state.totalResults/this.props.pageSize)} | Total Results : {this.state.totalResults}</h5>
            
            <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>

        </div>
        
      </div>
      
    );
  }
}

export default News;

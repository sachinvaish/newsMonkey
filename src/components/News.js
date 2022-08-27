import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = ({
        pageSize: 20,
        category: 'general',
        country: 'in',
        apiKey: '90d07a0194994afb81b25f2807eb4937'
        // apiKey : 'd6a8ba1f9dfc49d594149c8e287cdaa9'
        // use other API Keys if one exhausted
    })

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            dateTime: null,
            author: null
        }
    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            dateTime: parsedData.publishedAt,
            author: parsedData.author
        });
    }

    fetchMoreData = async () => {
        if (this.state.articles.length >= this.state.totalResults) {
            this.setState({ hasMore: false });
            console.log("Data khatam hogya");
            return;
        }
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
            dateTime: parsedData.publishedAt,
            author: parsedData.author,
            page: this.state.page + 1
        });

    }


    async componentDidMount() {
        console.log("Did mount Called");
        this.updateNews();
    }



    render() {
        return (
            <>
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className='container my-3'>
                        <div className="row ">


                            {this.state.articles.map((element) => {
                                let placeholder = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-bd73c9b9180d60c8d677aae7e7495d7f_screen.jpg?ts=1593284625"
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage ? element.urlToImage : placeholder} url={element.url} dateTime={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;

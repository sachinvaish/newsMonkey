import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

export class News extends Component {
    static defaultProps = ({
        pageSize: 20,
        category: 'general',
        country: 'in'
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
        console.log("Env variable is  " +process.env.REACT_APP_NEWAPI_KEY);
    }

    setProgress=(progress)=>{
        this.setState({
            progress : progress
        })
    }

    updateNews = async () => {
        this.setProgress(40);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({ loading: true });
        this.setProgress(80);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            dateTime: parsedData.publishedAt,
            author: parsedData.author
        });
        this.setProgress(100);
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
                <LoadingBar
                    color='#ff0000'
                    progress={this.state.progress}
                    height={5}
                    // onLoaderFinished={() => setProgress(0)}
                />
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

import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [progress, setProgress] = useState(0);
    const [hasMore, setHasMore] = useState(false);

    const updateNews = async () => {
        setProgress(40);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setLoading(true);
        setProgress(60);
        let data = await fetch(url);
        setProgress(80);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setProgress(100);
    }

    const fetchMoreData = async () => {
        if (articles.length >= totalResults) {
            setHasMore(false);
            return;
        }
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page + 1);

    }

    useEffect(() => {
        updateNews();
    }, []);

    return (
        <>
            {/* {state.loading && <Spinner/>} */}
            <LoadingBar
                color='#ff0000'
                progress={progress}
                height={5}
            // onLoaderFinished={() => setProgress(0)}
            />
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container my-3'>
                    <div className="row " style={{ marginTop: '80px' }}>


                        {articles.map((element) => {
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

News.defaultProps = ({
    pageSize: 20,
    category: 'general',
    country: 'in'
})

export default News;

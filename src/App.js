import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/newsForm/";
import NewsList from "./components/newsList/";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    const posts = [{
      id: 1 ,
      title : 'Post 1.',
      link : 'http://www.foo.bar',
      author : 'Joe Bloggs',
      comments : [],
      upvotes: 10
    },

    {
      id: 2,
          title : "Samsung's folding phone breaks for reviewers",
        link : 'https://www.bbc.com/news/technology-47970788',
        author : 'Dave Lee',
        comments : [],
        upvotes : 12
    },
    {
      id: 3,
          title : 'Microsoft turned down facial-recognition sales on human rights concerns',
        link : null,
        author : 'Joseph Mennn',
        comments : [],
        upvotes : 12
    },
    {
      id: 4,
          title : 'Follow-up: I found two identical packs of Skittles, among 468 packs with a total of 27,740 Skittles',
        link : 'https://possiblywrong.wordpress.com/',
        author : 'unknown',
        comments : [],
        upvotes : 2
    },
    {  id: 5 ,
        title : 'THE COMING DESERT',
        link : 'https://newleftreview.org/issues/II97/articles/mike-davis-the-coming-desert',
        author : 'MIKE DAVIS',
        comments : [],
        upvotes : 10
    }]



    return (
        <div className="jumbotron">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 offset-3">
                <h1><a href="/">Hacker News</a></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ">
                <Form />
              </div>
              <div className="col-md-8">
                <NewsList posts={posts} />
              </div>
            </div>
          </div>
        </div>


       //<Fragment>
       // <NewsList posts={posts}/>
       //</Fragment>

    );
  }
}

export default App;

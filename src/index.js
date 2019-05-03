import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.css';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Emilia Savalas',
        avatar: 'http://localhost:8080/assets/images/maria.jpg',
        time: 'há 30 min',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Viva Forevis aptent taciti sociosqu ad litora torquent. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!',
      },
      {
        id: 2,
        name: 'Bruno Lira',
        avatar: 'http://localhost:8080/assets/images/avatar.jpg',
        time: 'há 2 horas',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Viva Forevis aptent taciti sociosqu ad litora torquent. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="posts-container">
          {posts
            && posts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                avatar={post.avatar}
                name={post.name}
                time={post.time}
                content={post.content}
              />
            ))}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

        import React, { Component } from 'react';
        import './App.css';
        import api from './http';
        import Article from './Article';
        import Select from './Select';

        class App extends Component {
          constructor () {
            super();
            this.state = {
              sources: null,
              selectedSource: null,
              articles: null
            }
            this.selectSource = this.selectSource.bind(this);
          }

          componentDidMount () {
            // fetch data
            api('https://newsapi.org/v1/sources?language=en&apiKey=864d3e9ff70942689b9a42aa558cab08')
              .then(sources => this.setState({ sources }));
          }

          selectSource (e) {
            const selectedSource = e.target.value;
            this.setState({ selectedSource });
            api(`https://newsapi.org/v1/articles?source=${selectedSource}&apiKey=864d3e9ff70942689b9a42aa558cab08`)
              .then(articles => this.setState({ articles }))
          }

          render() {
            return (
              <div className="App">
                  <h1 className="App-title">News Sources</h1>
                  {this.state.sources && (
                    <Select
                      selectSource={this.selectSource}
                      sources={this.state.sources.sources}
                    />
                  )}

                {this.state.articles && this.state.articles.articles.map(a => (
                  <Article {...a} />
                ))}
            </div>
            );
          }
        }

        export default App;

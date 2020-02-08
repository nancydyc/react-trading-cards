"use strict";

class Homepage extends React.Component {
  render() {
    return (
        <div>
            <h2>Welcome to Trading Cards</h2>
            <br/>
            <img src="/static/img/balloonicorn.jpg"/>
            <br/>
            <a href="/cards">Link to cards</a>
        </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

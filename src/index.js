import React from 'react';
import ReactDOM from 'react-dom';
import './less/index.css';

class Page extends React.Component {

  render () {
    return (
      <div class="kek">
        sup
        <span class="kek_us">supsup</span>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('dev')
);

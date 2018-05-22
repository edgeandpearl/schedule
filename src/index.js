import React from 'react';
import ReactDOM from 'react-dom';
import './less/index.css';
import HeaderWithLoginForm from './components/headerWithLoginForm';
import TopBlock from './components/topBlock'
import SettingsBlock from './components/settingsBlock'

class Page extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HeaderWithLoginForm />
        <div class="content">
          <TopBlock />
          <SettingsBlock />
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('page')
);

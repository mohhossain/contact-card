import './App.css';
import React from 'react';
import PropTypes from 'prop-types'
import ContactCard from './ContactCard';

class App extends React.Component {
  state = {
    cards: [
      {
        name: 'Mohammad Hossain',
        mobileNumber: 1216543654,
        email: 'moh.hossain98@gmail.com'
      },
      {
        name: 'John Doe',
        mobileNumber: 1112223333,
        email: 'john.doe@react.js',
        workPhone: 8008008888
      },
      {
        name: 'Bill Windows',
        mobileNumber: 1211213131,
        email: 'bill.windows@gates.com'
      }
    ]
  }

  
  render(){
    return (
      <div className="">
        <ContactCard cards={this.state.cards}/>
      </div>
    );
  }
  
}

export default App;

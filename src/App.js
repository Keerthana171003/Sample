import React from 'react';
import './App.css'; 
import HugeText from './components/HugeText';
import Card from './components/Card';

function App() {
  const cardContent1 = "[ PRIVELEGE : ADMIN ]";
  const cardContent2 = "[ PRIVELEGE : PARTICIPANT ]";

  const splitWords = (content) => content.split(' ');

  return (
    <div className="App">
      <HugeText />
      <div className="container">
        <a href="/login-as-admin" className="card-link">
          <Card title="LOGIN AS ADMIN" content={splitWords(cardContent1)} />
        </a>
        <a href="/login-as-participant" className="card-link">
          <Card title="LOGIN AS PARTICIPANT" content={splitWords(cardContent2)} />
        </a>
      </div>
    </div>
  );
}

export default App;

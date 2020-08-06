import React, { Component } from 'react';
// import Counter from './counter/counter.js';
// import NameList from './nameList/name.js';
// import './nameList/name.css';
// import Contact from './components/Contact';
import EnhancedUser from './Assignment2/user';

function App() {
  // const names = ['Neeta Sapkota',
  // 'Neha Shiwakoti',
  // 'Srijana Khatiwada',
  // 'Sami Chakradhar',
  // 'Kirtee Maharjan',
  // 'Trija Thebe',
  // 'Sindhu Aryal',
  // 'Kusum Ranjitkar',
  // 'Elisha Bista',
  // 'Rachana Kafle',
  // 'Barsha Maharjan',
  // 'Pooja Gurung',
  // 'Bisikha Subedi',
  // 'Kritika Baral',
  // 'Srijana Thulung'];
  // return (
  //   <div className="main">
  //     <Counter /> 
  //     <Contact data="Hello from the other side" age={20}/>
  //     <div className="nameList">
  //       {names.map((name,index)=>
  //         <NameList key={name.split('').concat(index)} name={name}/>
  //       )}
  //     </div>
  //   </div>
  // );

  const names=["Kirtee","Neeta","Sindhu","Bisikha","Elisha", "Rachana"]
  return (
    <div className="App">
      <div className="userList">
        <h1>Assignment 2</h1>
      {names.map((name,index) => 
        <EnhancedUser key={name} name={name} />
      )}
      </div>  
    </div>
  );
}

export default App;


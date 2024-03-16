import React from 'react';
import './App.css';
import BowlingList from './Bowling/BowlingList';

function Table() {
  return (
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>Bowler</th>
          <th>Team</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {/* Add tbody and rows with data here */}
    </table>
  );
}

function Heading(props: any) {
  return <h1 className="mt-4 mb-4">{props.title}</h1>;
}

function App() {
  return (
    <div className="container">
      <Heading title="Let's Go Bowl" />
      <BowlingList />
    </div>
  );
}

export default App;

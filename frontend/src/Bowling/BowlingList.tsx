import { useEffect, useState } from 'react';
import { Bowling } from '../types/Bowling';

// BowlingList is a functional component (declared as a funciton and doesn't extend from a class)
function BowlingList() {
  // declares bowling data as a state variable (which is a piece of data
  // managed by a component that changes over time), and its setter function,
  // using the useState hook (which sets it initially to an empty array of type bowling)
  const [bowlingData, setBowlingData] = useState<Bowling[]>([]);
  //   use effect performs the side effects of functional components
  useEffect(() => {
    // makes an HTTP Get request the website
    const fetchBowlingData = async () => {
      // rsp holds the raw JSON
      const rsp = await fetch('http://localhost:5079/bowling');
      //   b holds the parsed JSON
      const b = await rsp.json();
      //Updates the state variable bowlingData with b
      setBowlingData(b);
    };
    //calls the function
    fetchBowlingData();
    //In React's useEffect hook, if you provide an empty dependency array
    // as the second argument, React will execute the effect only after the initial render and never re-run it
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* checks if the bowlingData is an array */}
          {Array.isArray(bowlingData) &&
            //   maps each element of the bowlingData array to a table row
            bowlingData.map((b) => (
              // b is the json array declared above.
              <tr key={b.bowlerId}>
                <td>{b.bowlerFirstName}</td>
                <td>{b.bowlerMiddleInit}</td>
                <td>{b.bowlerLastName}</td>
                <td>{b.team.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingList;

import { useEffect, useState } from 'react';
import { Bowling } from '../types/Bowling';

function BowlingList() {
  const [bowlingData, setBowlingData] = useState<Bowling[]>([]);
  useEffect(() => {
    const fetchBowlingData = async () => {
      const rsp = await fetch('http://localhost:5079/bowling');
      const b = await rsp.json();
      setBowlingData(b);
    };
    fetchBowlingData();
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
          {Array.isArray(bowlingData) &&
            bowlingData.map((b) => (
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

export type Bowling = {
// these must match exactly to how they are written in the api's json
  bowlerId: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
//   team name is within a dictionary of team so it needs to be drilled down
  team: {teamName:string};
};

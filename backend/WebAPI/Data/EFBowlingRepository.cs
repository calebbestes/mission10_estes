using System.Collections.Generic;
using System.Linq;

namespace WebAPI.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _bowlingContext;

        public EFBowlingRepository(BowlingLeagueContext context)
        {
            _bowlingContext = context;
        }

        public IEnumerable<Bowler> Bowlers { get; }

        public IEnumerable<Bowler> GetBowlersWithTeam()
        {
            var joinedData = 
                from bowler in _bowlingContext.Bowlers
                join team in _bowlingContext.Teams 
                on bowler.TeamId equals team.TeamId
                where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                select new
                {
                    BowlerID = bowler.BowlerId,
                    FirstName = bowler.BowlerFirstName,
                    MiddleName = bowler.BowlerMiddleInit,
                    LastName = bowler.BowlerLastName,
                    Team = team,
                    Address = bowler.BowlerAddress,
                    City = bowler.BowlerCity,
                    State = bowler.BowlerState,
                    Zip = bowler.BowlerZip,
                    Phone = bowler.BowlerPhoneNumber
                };
            var bowlerWithTeam = joinedData
                .Select(b => new Bowler
                {
                    BowlerId = b.BowlerID,
                    BowlerFirstName = b.FirstName,
                    BowlerMiddleInit = b.MiddleName,
                    BowlerLastName = b.LastName,
                    Team = b.Team,
                    BowlerAddress = b.Address,
                    BowlerCity = b.City,
                    BowlerState = b.State,
                    BowlerZip = b.Zip,
                    BowlerPhoneNumber = b.Phone
                })
                .ToList();
            return bowlerWithTeam;
        }
    }
}
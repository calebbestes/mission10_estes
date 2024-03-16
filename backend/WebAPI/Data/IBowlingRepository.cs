using System.Collections.Generic;
using WebAPI;

namespace WebAPI.Data
{
    public interface IBowlingRepository
    {
        IEnumerable<Bowler> GetBowlersWithTeam();
    }
}
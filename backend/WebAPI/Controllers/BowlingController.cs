using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using System.Text.Json;
using System.Text.Json.Serialization; // Add this namespace for JsonSerializerOptions

namespace WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;

        public BowlingController(IBowlingRepository bowlingRepository)
        {
            _bowlingRepository = bowlingRepository;
            // Configure JsonSerializerOptions to ignore circular references
        }
        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var data = _bowlingRepository.GetBowlersWithTeam();
            // Return the data with configured JSON options
            return data;
        }
    }
}

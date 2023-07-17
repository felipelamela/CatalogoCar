using backend.Data.DTOs.UserDTOs;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class UserController : ControllerBase
    {

        [HttpPost]
        public IActionResult CadastraUsurio
            (CreateUserDTO userDTO)
        {

            throw new NotImplementedException();
        }
    }
}

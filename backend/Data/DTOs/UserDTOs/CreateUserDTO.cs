using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs.UserDTOs
{
    public class CreateUserDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string LastName { get; set; }


        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [Compare("Password")]
        public string RePass { get; set; }
    }
}

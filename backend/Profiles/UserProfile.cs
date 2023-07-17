using AutoMapper;
using backend.Data.DTOs.UserDTOs;
using backend.Models;

namespace backend.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<CreateUserDTO, User>();
        }
    }
}

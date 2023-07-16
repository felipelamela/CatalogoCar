using AutoMapper;
using backend.Data.DTOs;
using backend.Models;

namespace backend.Profiles
{
    public class CarroProfile : Profile
    {
        public CarroProfile()
        {
            CreateMap<CreateCarroDTO, Carro>();
            CreateMap<UpdateCarroDTO, Carro>();
        }
    }
}

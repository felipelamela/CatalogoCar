using AutoMapper;
using backend.Data.DTOs;
using backend.Data.DTOs.CarroDTOs;
using backend.Models;

namespace backend.Profiles
{
    public class CarroProfile : Profile
    {
        public CarroProfile()
        {
            CreateMap<CreateCarroDTO, Carro>();
            CreateMap<UpdateCarroDTO, Carro>();
            CreateMap<Carro, ReadCarroDTO>();
        }
    }
}

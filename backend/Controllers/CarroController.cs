using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using AutoMapper;
using backend.Data.DTOs.CarroDTOs;
using backend.Data.DTOs;

namespace backend.Controllers;


[ApiController]
[Route("[controller]")]
public class CarroController : ControllerBase
{
    private CarroContext _context;
    private IMapper _mapper;

    public CarroController(CarroContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult AdicionaCarro(
        [FromBody] CreateCarroDTO carroDTO)
    {
        Carro carro = _mapper.Map<Carro>(carroDTO);
        _context.Carros.Add(carro);
        _context.SaveChanges();

        return CreatedAtAction(
            nameof(CarrosPorId),
            new { id = carro.Id },
            carro
            );
    }



    [HttpGet]
    public IEnumerable<ReadCarroDTO> ListarCarros([FromQuery] int skip = 0, int take = 10)
    {
        var carros = _context.Carros.Skip(skip).Take(take);
        return _mapper.Map<List<ReadCarroDTO>>(carros);
    }


    [HttpGet("{id}")]
    public IActionResult CarrosPorId(int id)
    {
        var carro = _context.Carros
              .FirstOrDefault(carro => carro.Id == id);
        if (carro == null) return NotFound();
        var carroDTO = _mapper.Map<ReadCarroDTO>(carro);
        return Ok(carroDTO);
    }


    [HttpPut("{id}")]
    public IActionResult AtualizaCarro(
        int id, [FromBody] UpdateCarroDTO carroDTO)
    {
        var carro = _context.Carros.FirstOrDefault(
            carro => carro.Id == id);
        if(carro == null) return NotFound();
        _mapper.Map(carroDTO, carro);
        _context.SaveChanges();
        return NoContent();
    }


    [HttpDelete("{id}")]
    public IActionResult DeletarCarro(int id)
    {
        var carro = _context.Carros.FirstOrDefault(
            carro => carro.Id == id);
        if (carro == null) return NotFound();
        _context.Remove(carro);
        _context.SaveChanges();
        return NoContent();
    }


}
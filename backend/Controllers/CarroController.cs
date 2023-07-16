using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;
using backend.Data.DTOs;
using AutoMapper;

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
    public IEnumerable<Carro> ListarCarros([FromQuery] int skip = 0, int take = 10)
    {
        return _context.Carros.Skip(skip).Take(take);
    }


    [HttpGet("{id}")]
    public IActionResult CarrosPorId(int id)
    {
        var carro = _context.Carros
              .FirstOrDefault(carro => carro.Id == id);
        if (carro == null) return NotFound();
        return Ok(carro);
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

}
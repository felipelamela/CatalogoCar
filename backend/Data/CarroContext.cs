using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class CarroContext : DbContext
{
    public CarroContext(
        DbContextOptions<CarroContext> options
        ) : base( options ){}

    public DbSet<Carro> Carros { get; set; }
}

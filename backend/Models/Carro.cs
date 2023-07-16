using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Carro
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "Nome do veículo é obrigatório")]
    [MaxLength(30)]
    public string Nome { get; set; }


    [Required(ErrorMessage = "Marca do veículo é obrigatório")]
    [MaxLength(30)]
    public string Marca { get; set; }


    [Required(ErrorMessage = "Modelo do veículo é obrigatório")]
    public int Modelo { get; set; }


    [Required(ErrorMessage = "Preço do veículo é obrigatório")]
    public int Preco { get; set; }

}

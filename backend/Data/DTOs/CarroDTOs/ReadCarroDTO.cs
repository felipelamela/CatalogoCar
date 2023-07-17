using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs
{
    public class ReadCarroDTO
    {
        public string Nome { get; set; }
        public string Marca { get; set; }
        public int Modelo { get; set; }
        public int Preco { get; set; }
    }
}


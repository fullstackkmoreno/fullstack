using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace back_end.DTOs
{
    public class RecaudoDTO
    {
        [Key]
        public int IdRecaudo { get; set; }
        public int Valor { get; set; }
        public TimeSpan Hora { get; set; }
        public int Sentido { get; set; }

        public int Categoria { get; set; }

        public string Estacion { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace back_end.Entidades
{
    public class Recaudo
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

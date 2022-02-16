using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace back_end.Controllers
{

    [ApiController]
    [Route("api/recaudos")]
    public class RecaudoController : ControllerBase
    {
        private readonly ILogger<RecaudoController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        public RecaudoController(ILogger<RecaudoController> logger,
                                ApplicationDbContext context,
                                IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet] //api/recaudos
        public async Task<ActionResult<List<RecaudoDTO>>> Get()
        {
            var recaudos = await context.Recaudos.ToListAsync();
            return mapper.Map<List<RecaudoDTO>>(recaudos);
        }
    }
}

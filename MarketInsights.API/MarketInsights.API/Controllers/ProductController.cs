using MarketInsights.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace MarketInsights.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get([FromQuery] string? region, [FromQuery] string? month)
        {
            var products = ProductData.GetProducts();

            if (!string.IsNullOrWhiteSpace(region))
            {
                products = products.Where(p =>
                    p.Region.Equals(region, StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            if (!string.IsNullOrWhiteSpace(month))
            {
                products = products.Where(p =>
                    p.ListedDate.ToString("MMMM").Equals(month, StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            return Ok(products);
        }
    }

}

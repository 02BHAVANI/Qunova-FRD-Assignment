using MarketInsights.API.Models;

namespace MarketInsights.API.Data
{
    public static class ProductData
    {
        public static List<Product> GetProducts()
        {
            return new List<Product>
    {
        new Product
        {
            Id = 1,
            Name = "Laptop X",
            Price = 70000,
            Rating = 4.5,
            ImageUrl = "laptop-x.jpg",
            Region = "Maharashtra",
            ListedDate = new DateTime(2024, 1, 15)
        },
        new Product
        {
            Id = 2,
            Name = "Smartphone Y",
            Price = 35000,
            Rating = 4.2,
            ImageUrl = "smartphone-y.jpg",
            Region = "Delhi",
            ListedDate = new DateTime(2024, 2, 20)
        }
    };
        }
    }

}

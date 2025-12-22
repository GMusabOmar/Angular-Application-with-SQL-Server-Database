using BusinessLayer;
using DataLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace workSpace.Controllers
{
    [Route("api/OnlineStore")]
    [ApiController]
    public class OnlineStoreController : ControllerBase
    {
        [HttpGet("GetAllSlider")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<IEnumerable<clsDOTSlider_DataLayer>> GetAllSlider()
        {
            var slider = clsBusinessLayer.GetAllSlider();
            if (slider.Count == 0)
                return NotFound("Not Found Sliders!");
            return Ok(slider);
        }

        [HttpGet("GetAllProduct")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<IEnumerable<clsDOTProduct_DataLayer>> GetAllProduct()
        {
            var Product = clsBusinessLayer.GetAllProduct();
            if (Product.Count == 0)
                return NotFound("Not Found Sliders!");
            return Ok(Product);
        }

        [HttpGet("GetAllProduct/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<clsDOTProduct_DataLayer> GetAllProductByID(int id)
        {
            var ProductbyID = clsBusinessLayer.GetAllProductByID(id);
            if (ProductbyID == null)
                return NotFound("Not Found Sliders!");
            return Ok(ProductbyID);
        }
    }
}

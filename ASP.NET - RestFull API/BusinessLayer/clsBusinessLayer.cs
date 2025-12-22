using DataLayer;

namespace BusinessLayer
{
    public class clsBusinessLayer
    {
        public static List<clsDOTSlider_DataLayer> GetAllSlider()
        {
            return clsDataAccessLayer.GetAllSlider();
        }
        public static List<clsDOTProduct_DataLayer> GetAllProduct()
        {
            return clsDataAccessLayer.GetAllProduct();
        }
        public static clsDOTProduct_DataLayer? GetAllProductByID(int ID)
        {
            return clsDataAccessLayer.GetAllProductByID(ID);
        }

    }
}

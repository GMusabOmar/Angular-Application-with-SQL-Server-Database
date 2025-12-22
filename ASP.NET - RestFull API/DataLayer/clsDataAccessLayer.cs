using Microsoft.Data.SqlClient;
using System.Data;

namespace DataLayer
{
    public class clsDOTSlider_DataLayer
    {
        public int Slider_ID { get; set; }
        public string? Image { get; set; }
        public clsDOTSlider_DataLayer(int Slider_ID, string Image)
        {
            this.Slider_ID = Slider_ID;
            this.Image = Image;
        }
    }
    public class clsDOTProduct_DataLayer
    {
        public int id { get; set; }
        public string? name { get; set; }
        public int price { get; set; }
        public string? image { get; set; }

        public clsDOTProduct_DataLayer(int id, string name, int price, string image)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.image = image;
        }
    }
    public class clsDataAccessLayer
    {
        public static List<clsDOTSlider_DataLayer> GetAllSlider()
        {
            List<clsDOTSlider_DataLayer> ListSlider = new();
            using(SqlConnection connection = new SqlConnection(clsAccessConnection.connectionString))
            {
                using(SqlCommand command = new SqlCommand("SP_GetAllSlider", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            ListSlider.Add(new clsDOTSlider_DataLayer(
                                reader.GetInt32(reader.GetOrdinal("Slider_ID")),
                                reader.GetString(reader.GetOrdinal("Image"))
                                ));
                        }
                    }
                }
            }
            return ListSlider;
        }

        public static List<clsDOTProduct_DataLayer> GetAllProduct()
        {
            List<clsDOTProduct_DataLayer> ListProduct = new();
            using (SqlConnection connection = new SqlConnection(clsAccessConnection.connectionString))
            {
                using (SqlCommand command = new SqlCommand("SP_GetAllProduct", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            ListProduct.Add(new clsDOTProduct_DataLayer(
                                reader.GetInt32(reader.GetOrdinal("id")),
                                reader.GetString(reader.GetOrdinal("name")),
                                reader.GetInt32(reader.GetOrdinal("price")),
                                reader.GetString(reader.GetOrdinal("image"))

                                ));
                        }
                    }
                }
            }
            return ListProduct;
        }

        public static clsDOTProduct_DataLayer? GetAllProductByID(int ID)
        {
            using (SqlConnection connection = new SqlConnection(clsAccessConnection.connectionString))
            {
                using (SqlCommand command = new SqlCommand("SP_GetAllProductByID", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.AddWithValue("@ID", ID);
                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return new clsDOTProduct_DataLayer(
                                reader.GetInt32(reader.GetOrdinal("id")),
                                reader.GetString(reader.GetOrdinal("name")),
                                reader.GetInt32(reader.GetOrdinal("price")),
                                reader.GetString(reader.GetOrdinal("image"))
                                );
                        }
                        else
                            return null;
                    }
                }
            }
        }

    }
}

import { useState } from "react";

const Wiwu = ({ isAdmin }) => {
  const [addProduct, setAddProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", des: "", price: "", src: "" });

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(products[index]);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setFormData({ name: "", des: "", price: "", src: "" });
  };

  const handleSave = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index] = formData;
    setProducts(updatedProducts);
    setEditIndex(null);
    setFormData({ name: "", des: "", price: "", src: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.des || !formData.price || !formData.src) {
      alert("Please fill all fields and upload an image.");
      return;
    }
    setProducts([...products, formData]);
    setFormData({ name: "", des: "", price: "", src: "" });
    setAddProduct(false);
  };

  return (
    <div className="p-6">
      {/* Show Add Product button only if admin */}
      {isAdmin && (
        <button
          onClick={() => setAddProduct((prev) => !prev)}
          className="px-6 py-2 bg-[rgb(59,118,174)] text-white rounded-2xl hover:bg-[rgb(72,117,160)]"
        >
          {addProduct ? "Close" : "Add Product"}
        </button>
      )}

      {/* Only Admin can see the Add Form */}
      {isAdmin && addProduct && (
        <form
          onSubmit={handleAddProduct}
          className="flex flex-col gap-3 mt-4 bg-gray-100 p-4 rounded-lg shadow"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Product name"
            className="border p-2 rounded"
          />
          <textarea
            value={formData.des}
            onChange={(e) => setFormData({ ...formData, des: e.target.value })}
            placeholder="Product description"
            className="border p-2 rounded"
          />
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 font-bold">₦</span>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="Price"
              className="border p-2 pl-7 rounded w-full"
            />
          </div>

          {formData.src && (
            <img src={formData.src} alt="preview" className="w-full h-40 object-cover rounded" />
          )}
          <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">
            Add Product
          </button>
        </form>
      )}

      <div
        name="wiwuProductPage"
        className="bg-[rgb(217,224,231)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-3 p-4"
      >
        {products.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">No products yet.</p>
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-[370px] h-auto"
            >
              {editIndex === index ? (
                isAdmin && (
                  <div className="flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border p-2 rounded"
                    />
                    <textarea
                      value={formData.des}
                      onChange={(e) => setFormData({ ...formData, des: e.target.value })}
                      className="border p-2 rounded"
                    />
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 font-bold">₦</span>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="border p-2 pl-7 rounded w-full"
                      />
                    </div>

                    <input type="file" onChange={handleFileChange} />
                    {formData.src && (
                      <img src={formData.src} alt="preview" className="w-full h-40 object-cover rounded" />
                    )}
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleSave(index)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-400 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )
              ) : (
                <>
                  <img src={product.src} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                  <h2 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="mt-2 text-gray-700">{product.des}</p>
                  <p className="mt-2 text-lg font-bold text-green-600">
                    ₦{Number(product.price).toLocaleString()}
                  </p>

                  {/* Show Edit/Delete only for Admin */}
                  {isAdmin && (
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleEdit(index)}
                        className="p-2 bg-black text-white mt-3 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="p-2 bg-red-600 text-white mt-3 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wiwu;

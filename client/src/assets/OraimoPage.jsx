import React from 'react'
const OraimoProduct = [
  { name: "Power Banks", src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { name: "Portable power station", src: "https://images.unsplash.com/photo-1509395176047-4a66953fd231" },
  { name: "Solar fan: 16 inches", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { name: "Solar fan: 18 inches", src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca" },
  { name: "Mobile Phone Chargers", src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { name: "Mobile Phone Cables", src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c" },
  { name: "Car Power Inverter", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  { name: "Car Chargers", src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6" },
  { name: "Bluetooth Speakers", src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
  { name: "Mobile Earphones & Headphones", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
  { name: "Memory Card and Flash", src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { name: "Phone Case", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { name: "Phone stand/selfie sticks", src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca" },
  { name: "OTG Adapters/Converters", src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c" },
  { name: "Aux cable", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  { name: "Powerstrip", src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6" },
  { name: "Keyboard", src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
  { name: "Mouse", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
  { name: "HDMI cables", src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
];
const Oraimo = () => {
  return (
<div name="oraimoProductPage" className="bg-[rgb(217,224,231)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-0 lg:mt-20 gap-3">
      {oraimoProduct.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-[370px] h-[340px]"
        >
          <img
            src={product.src}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Oraimo;

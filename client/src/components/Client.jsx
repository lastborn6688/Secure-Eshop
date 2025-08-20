import blenco from '../images/blenco.jpg'
import ebeano from '../images/ebeano.jpg'
import superstar from '../images/superstar.jpg'
import deprince from '../images/deprince.jpg'
import wisebuyers from '../images/wisebuyers.jpg'
import gabbs from '../images/gabbs.jpg'

const bavinProduct = [
  { name: "Blenco", src: blenco },
  { name: "Prince Ebeano", src: ebeano },
  { name: "Superstar", src: superstar },
  { name: "De Prince", src: deprince },
  { name: "Wise Buyers", src: wisebuyers },
  { name: "Gabbs", src: gabbs },
]

const Client = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center px-4 py-10'>
      <div className="text-center mb-8 max-w-3xl">
        <h1 className='font-medium text-2xl sm:text-3xl md:text-4xl'>
          Proudly trusted by some of the most respected supermarkets nationwide.
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {bavinProduct.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-md p-6"
          >
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
              {product.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Client

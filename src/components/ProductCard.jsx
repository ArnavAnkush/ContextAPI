
const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <span className="absolute left-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-3 p-5">

        <h3 className="min-h-12 text-base font-semibold leading-6 text-gray-900 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-sm leading-6 text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-500">
            <span>★</span>
            <span className="font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <h2 className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </h2>
          </div>

          <button className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-95">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard


const Cart = ({ cartItems, setCartItems }) => {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  )

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (

          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="mb-4 text-6xl">🛒</div>

            <h2 className="text-xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Looks like you haven't added anything yet.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            <div className="space-y-4 lg:col-span-2">

              {cartItems.map((item, index) => (

                <div
                  key={`${item.id}-${index}`}
                  className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                >

                  <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:w-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>


                  <div className="flex-1">

                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      {item.category}
                    </span>

                    <h2 className="mt-2 font-semibold text-gray-900">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      ★ {item.rating.rate} ({item.rating.count} reviews)
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </h3>

                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 sm:self-center"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-green-600">
                  Free
                </span>
              </div>

              <div className="my-6 border-t border-gray-200" />

              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        )}

      </div>
    </div>
  )
}

export default Cart

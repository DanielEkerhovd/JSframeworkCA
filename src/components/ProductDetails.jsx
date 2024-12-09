


export function ProductDetails(product) {
    console.log()
  return (
    <div className="">
      <img className="w-full h-[300px] object-cover" src={product.image.url} alt={product.image.alt} />
      <div>
        <h1 className="font-semibold text-2xl uppercase">
          {product.title}
        </h1>
        <p className="text-lg">{product.description}</p>
        {product.discountedPrice === product.price ? (<p className="text-lg font-semibold">${product.discountedPrice}</p>) : (
            <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">${product.discountedPrice}</p>
                <span className="p-2 bg-red-500 font-semibold rounded-sm">Sale</span>
            </div>
        )}
        <button className="bg-black text-white py-2 px-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
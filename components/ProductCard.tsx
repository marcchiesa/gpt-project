import { useState } from 'react';
import OrderForm from './OrderForm';

export default function ProductCard({ product }:{ product:any }){
  const [open, setOpen] = useState(false);
  const img = product['New Image URL Remote'] || product['ImageUrl'];
  const price = product['PrefferedPrice'] || product['BasicPrice'];
  const currency = product['RateToCreatorCurrency'] || '';
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      {img && <img src={img} alt={product.ProductName} className="w-full h-48 object-cover rounded" />}
      <h3 className="mt-2 font-semibold">{product.ProductName}</h3>
      {product.ProductDesc && <p className="text-sm text-gray-700">{product.ProductDesc}</p>}
      <p className="mt-2 font-bold">{price} {currency}</p>
      <button onClick={()=>setOpen(true)} className="mt-3 px-3 py-2 bg-blue-600 text-white rounded">Order this</button>
      {open && <OrderForm product={product} onClose={()=>setOpen(false)} />}
    </div>
  );
}

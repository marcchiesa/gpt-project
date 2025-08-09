import { useState } from 'react';

export default function OrderForm({ product, onClose }:{ product:any; onClose:()=>void }){
  const [form, setForm] = useState({senderName:'', senderEmail:'', recipientName:'', recipientPhone:'', message:'', deliveryDate:''});
  function update(e:any){ setForm({...form, [e.target.name]: e.target.value}); }
  function submit(e:any){
    e.preventDefault();
    console.log('ORDER', { productId: product.ProductID, productName: product.ProductName, form });
    alert('Order submitted — demo mode.');
    onClose();
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <form onSubmit={submit} className="bg-white p-6 rounded w-full max-w-lg">
        <h3 className="text-xl font-semibold">Order: {product.ProductName}</h3>
        <div className="grid grid-cols-1 gap-3 mt-3">
          <input name="senderName" placeholder="Your name" value={form.senderName} onChange={update} required className="p-2 border rounded" />
          <input name="senderEmail" type="email" placeholder="Your email" value={form.senderEmail} onChange={update} required className="p-2 border rounded" />
          <input name="recipientName" placeholder="Recipient name" value={form.recipientName} onChange={update} required className="p-2 border rounded" />
          <input name="recipientPhone" placeholder="Recipient phone" value={form.recipientPhone} onChange={update} required className="p-2 border rounded" />
          <textarea name="message" placeholder="Greeting card message" value={form.message} onChange={update} rows={4} className="p-2 border rounded" />
          <label>Delivery date</label>
          <input name="deliveryDate" type="date" value={form.deliveryDate} onChange={update} required className="p-2 border rounded" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit order</button>
        </div>
      </form>
    </div>
  );
}

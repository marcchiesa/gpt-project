import ProductCard from './ProductCard';
export default function CategorySection({ title, items }:{ title:string; items:any[] }){
  if(!items || items.length===0) return null;
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p:any)=> <ProductCard key={p.ProductID} product={p} />)}
      </div>
    </section>
  );
}

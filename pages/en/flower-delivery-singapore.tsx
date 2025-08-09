import Head from 'next/head'
import CategorySection from '../../components/CategorySection'
import { getProductsByCategory } from '../../lib/products'

export async function getStaticProps(){
  const byCat = getProductsByCategory();
  return { props: { byCat } };
}

export default function Page({ byCat }:any){
  return (
    <main className="container mx-auto p-6 max-w-6xl">
      <Head>
        <title>Flower Delivery Singapore — Same-Day Bouquets & Local Florists</title>
        <meta name="description" content="Send fresh bouquets in Singapore with same-day delivery, personal messages, and premium floral arrangements. Order online today." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Flower Delivery in Singapore — Same-Day Service from Trusted Local Florists</h1>
      <p className="mb-6">Brighten someone’s day with fresh flowers delivered anywhere in Singapore. We partner with reputable florists in every district to ensure your order arrives on time, looking vibrant, and beautifully arranged.</p>
      <section className="mb-6"><h2 className="text-2xl font-semibold mb-2">Fast, reliable delivery across the island</h2><p>Order before our daily cut-off and enjoy same-day delivery in all areas — from the CBD to Tampines and Jurong. Our florists handcraft each bouquet with premium blooms, guaranteeing quality and freshness.</p></section>\n<section className="mb-6"><h2 className="text-2xl font-semibold mb-2">What sets our service apart</h2><p>Same-day and next-day delivery options. Free personalized card with every bouquet. Local florist expertise for stylish, lasting arrangements.</p></section>\n
      <CategorySection title="Love and Romance" items={byCat['Love and Romance']} />
      <CategorySection title="Friends" items={byCat['Friends']} />
      <CategorySection title="Family" items={byCat['Family']} />
      <CategorySection title="Graduation" items={byCat['Graduation']} />
      <CategorySection title="Get Well" items={byCat['Get Well']} />
      <CategorySection title="Valentine’s Day" items={byCat['Valentine’s Day']} />
      <CategorySection title="Mother’s Day" items={byCat['Mother’s Day']} />
    </main>
  )
}

import Link from 'next/link'

export default function Home(){
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">International Flower Delivery — Singapore Demo</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/en/flower-delivery-singapore">EN — Singapore</Link></li>
        <li><Link href="/fr/flower-delivery-singapour">FR — Singapour</Link></li>
        <li><Link href="/ar/توصيل-الزهور-سنغافورة">AR — سنغافورة</Link></li>
        <li><Link href="/ja/シンガポール-花の配達">JA — シンガポール</Link></li>
        <li><Link href="/zh/新加坡鲜花速递">ZH — 新加坡</Link></li>
      </ul>
    </main>
  )
}

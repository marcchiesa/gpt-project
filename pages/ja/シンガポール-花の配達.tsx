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
        <title>シンガポールの花配達 — 即日配送＆フローリスト直送</title>
        <meta name="description" content="シンガポールで新鮮な花を即日配送。パーソナルメッセージ付きのプレミアムアレンジメントをお届けします。" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">シンガポールの花配達 — 即日サービスと高品質アレンジ</h1>
      <p className="mb-6">大切な人へ、新鮮で美しい花をシンガポール全域にお届けします。信頼できる地元のフローリストが、一つ一つ丁寧にアレンジします。</p>
      <section className="mb-6"><h2 className="text-2xl font-semibold mb-2">全域対応のスピード配送</h2><p>毎日設定された締切時間までのご注文で、即日配送が可能です。CBDから郊外まで、鮮度と美しさを保ったままお届けします。</p></section>\n<section className="mb-6"><h2 className="text-2xl font-semibold mb-2">サービスの特長</h2><p>即日・翌日配送対応。 無料メッセージカード付き。 ローカルフローリストによるデザイン。</p></section>\n
      <CategorySection title="愛とロマンス" items={byCat['Love and Romance']} />
      <CategorySection title="友人" items={byCat['Friends']} />
      <CategorySection title="家族" items={byCat['Family']} />
      <CategorySection title="卒業" items={byCat['Graduation']} />
      <CategorySection title="お見舞い" items={byCat['Get Well']} />
      <CategorySection title="バレンタインデー" items={byCat['Valentine’s Day']} />
      <CategorySection title="母の日" items={byCat['Mother’s Day']} />
    </main>
  )
}

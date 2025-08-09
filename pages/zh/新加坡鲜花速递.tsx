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
        <title>新加坡鲜花速递 — 当日送达＆本地花店直送</title>
        <meta name="description" content="新加坡鲜花速递服务，当日送达，新鲜花束与个性贺卡，在线下单即送。" />
      </Head>
      <h1 className="text-3xl font-bold mb-4">新加坡鲜花速递 — 当日送达与本地花店合作</h1>
      <p className="mb-6">在新加坡，无论是惊喜、庆祝还是慰问，我们的鲜花速递服务都能让您的心意及时送达。我们与本地优质花店合作，确保每束花都新鲜、美观。</p>
      <section className="mb-6"><h2 className="text-2xl font-semibold mb-2">全岛当日送达</h2><p>每日截单时间前下单，即可享受当日送花服务，从市中心到裕廊、淡滨尼均可配送。花束均由经验丰富的花艺师手工制作。</p></section>\n<section className="mb-6"><h2 className="text-2xl font-semibold mb-2">服务特色</h2><p>当日及次日送花选择。 免费附送贺卡。 本地花艺设计，品质保障。</p></section>\n
      <CategorySection title="爱与浪漫" items={byCat['Love and Romance']} />
      <CategorySection title="朋友" items={byCat['Friends']} />
      <CategorySection title="家人" items={byCat['Family']} />
      <CategorySection title="毕业" items={byCat['Graduation']} />
      <CategorySection title="早日康复" items={byCat['Get Well']} />
      <CategorySection title="情人节" items={byCat['Valentine’s Day']} />
      <CategorySection title="母亲节" items={byCat['Mother’s Day']} />
    </main>
  )
}

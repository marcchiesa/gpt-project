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
        <title>توصيل الزهور في سنغافورة — باقات طازجة وخدمة في نفس اليوم</title>
        <meta name="description" content="أرسل باقات زهور أنيقة في سنغافورة مع توصيل في نفس اليوم وبطاقة تهنئة مجانية. اطلب الآن عبر الإنترنت." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">توصيل الزهور في سنغافورة — باقات أنيقة وخدمة سريعة</h1>
      <p className="mb-6">أدهش أحبّاءك بأجمل الزهور الطازجة في سنغافورة. نحن نتعاون مع أفضل محلات الزهور المحلية لضمان وصول الطلب في الوقت المحدد وبأجمل حلة.</p>
      <section className="mb-6"><h2 className="text-2xl font-semibold mb-2">خدمة توصيل موثوقة في جميع المناطق</h2><p>اطلب قبل موعد الإغلاق اليومي لتحصل على التوصيل في نفس اليوم إلى أي مكان — من وسط المدينة إلى الضواحي. يتم إعداد كل باقة يدويًا باستخدام أزهار مختارة بعناية.</p></section>\n<section className="mb-6"><h2 className="text-2xl font-semibold mb-2">مميزات خدمتنا</h2><p>خيارات توصيل في نفس اليوم أو في اليوم التالي. بطاقة إهداء مجانية مع كل طلب. تصميمات مبتكرة على يد خبراء محليين.</p></section>\n
      <CategorySection title="الحب والرومانسية" items={byCat['Love and Romance']} />
      <CategorySection title="الأصدقاء" items={byCat['Friends']} />
      <CategorySection title="العائلة" items={byCat['Family']} />
      <CategorySection title="التخرج" items={byCat['Graduation']} />
      <CategorySection title="الشفاء العاجل" items={byCat['Get Well']} />
      <CategorySection title="عيد الحب" items={byCat['Valentine’s Day']} />
      <CategorySection title="عيد الأم" items={byCat['Mother’s Day']} />
    </main>
  )
}

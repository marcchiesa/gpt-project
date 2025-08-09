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
        <title>Livraison de Fleurs à Singapour — Bouquets & Service le Jour Même</title>
        <meta name="description" content="Offrez des fleurs fraîches à Singapour avec livraison le jour même. Messages personnalisés et créations florales premium." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Livraison de fleurs à Singapour — Service rapide et créations élégantes</h1>
      <p className="mb-6">Envoyez des bouquets raffinés partout à Singapour grâce à notre réseau de fleuristes locaux. Nous garantissons fraîcheur, ponctualité et présentation soignée à chaque commande.</p>
      <section className="mb-6"><h2 className="text-2xl font-semibold mb-2">Livraison rapide dans toute la ville</h2><p>Commandez avant l’heure limite et profitez d’une livraison le jour même, que ce soit à Marina Bay, Orchard ou Jurong. Chaque bouquet est confectionné à la main avec des fleurs sélectionnées.</p></section>\n<section className="mb-6"><h2 className="text-2xl font-semibold mb-2">Nos engagements</h2><p>Options de livraison le jour même et le lendemain. Carte personnalisée gratuite incluse. Expertise locale pour des compositions au style unique.</p></section>\n
      <CategorySection title="Amour et Romance" items={byCat['Love and Romance']} />
      <CategorySection title="Amitié" items={byCat['Friends']} />
      <CategorySection title="Famille" items={byCat['Family']} />
      <CategorySection title="Remise de Diplôme" items={byCat['Graduation']} />
      <CategorySection title="Prompt Rétablissement" items={byCat['Get Well']} />
      <CategorySection title="Saint-Valentin" items={byCat['Valentine’s Day']} />
      <CategorySection title="Fête des Mères" items={byCat['Mother’s Day']} />
    </main>
  )
}

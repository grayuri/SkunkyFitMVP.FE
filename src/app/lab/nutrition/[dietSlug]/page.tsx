import { Suspense } from 'react';
import DietFetcher from '@/components/Nutrition/DietFetcher/DietFetcher';
import './DietPage.scss';
import PageLoading from '@/components/UI/PageLoading/PageLoading';
import { getAll } from '@/services/FetchServices';
import { IDiet } from '@/types/IDiet';

export const dynamicParams = false

export async function generateStaticParams() {
  const { datas: diets } = await getAll<IDiet>(process.env.API_BASE_URL + "diets/", { 
    cache: "no-store"
  })

  return diets.map(diet => ({
    dietSlug: diet.slug
  }))
}

export default async function DietPage({ params }: any) {
  return (
    <main className="diet-page">
      <Suspense fallback={<PageLoading />}>
        <DietFetcher dietSlug={params.dietSlug} />
      </Suspense>
    </main>
  )
}

import { Suspense } from 'react';
import DietFetcher from '@/components/Nutrition/DietFetcher/DietFetcher';
import './DietPage.scss';
import PageLoading from '@/components/UI/PageLoading/PageLoading';

export default async function DietPage({ params }: any) {
  return (
    <main className="diet-page">
      <Suspense fallback={<PageLoading />}>
        <DietFetcher dietSlug={params.dietSlug} />
      </Suspense>
    </main>
  )
}

import './PlanPage.scss';
import PlanFetcher from '@/components/Training/PlanFetcher/PlanFetcher';
import { Suspense } from 'react';
import PageLoading from '@/components/UI/PageLoading/PageLoading';

export default function PlanPage({ params }: any) {
  return (
    <main className="plan-page">
      <Suspense fallback={<PageLoading />}>
        <PlanFetcher planSlug={params.planSlug} />
      </Suspense>
    </main>
  )
}

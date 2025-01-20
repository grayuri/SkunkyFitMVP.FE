import { ITrainingPlan } from '@/types/ITrainingPlan';

import './PlanPage.scss';
import PlanFetcher from '@/components/Training/PlanFetcher/PlanFetcher';
import { getAll } from '@/services/FetchServices';
import { Suspense } from 'react';
import PageLoading from '@/components/UI/PageLoading/PageLoading';

export const dynamicParams = false

export async function generateStaticParams() {
  const { datas: plans } = await getAll<ITrainingPlan>(process.env.API_BASE_URL + "training-plans/", { 
    cache: "no-store"
  })

  return plans.map(plan => ({
    planSlug: plan.slug
  }))
}

export default function PlanPage({ params }: any) {
  return (
    <main className="plan-page">
      <Suspense fallback={<PageLoading />}>
        <PlanFetcher planSlug={params.planSlug} />
      </Suspense>
    </main>
  )
}

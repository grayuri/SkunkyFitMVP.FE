import Image from "next/image"
import PlansFetcher from "@/components/Training/PlansFetcher/PlansFetcher";
import { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import './Training.scss';

export default function Training() {
  return (
    <main className="trainning-page">
      <section className="banner">
        <Image
          alt="Training Banner Image"
          src="/images/trainning-banner.png"
          fill={true}
          quality={80}
        />
      </section>

      <section className="content">
        <h2>Training</h2>
        <Suspense fallback={<Spinner size="xl" color="gray" />}>
          <PlansFetcher />
        </Suspense>
      </section>
    </main>
  )
}

import { Suspense } from "react";
import Image from "next/image"
import DietsFetcher from "@/components/Nutrition/DietsFetcher/DietsFetcher";
import { Spinner } from "@chakra-ui/react";
import './Nutrition.scss';

export default function Nutrition() {
  return (
    <main className="nutrition-page">
      <section className="banner">
        <Image
          alt="Nutrition Banner Image"
          src={"/images/nutrition-banner.png"}
          fill={true}
          quality={80}
        />
      </section>

      <section className="content">
        <h2>Nutrition</h2>
        <Suspense fallback={<Spinner size="xl" color="gray" />}>
          <DietsFetcher />
        </Suspense>
      </section>
    </main>
  )
}

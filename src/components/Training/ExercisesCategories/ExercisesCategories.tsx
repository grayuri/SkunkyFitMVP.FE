"use client"


import SingleCategory from "@/components/UI/SingleCategory/SingleCategory"
import Slider from "@/components/UI/Slider/Slider"
import { SwiperSlide } from "swiper/react"
import "./ExercisesCategories.scss"

const categories = [
  { 
    name: 'Chest',
    slug: "chest",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-9e-dumbbell-bench-press-m2-square-600x600.jpg"
  },
  { 
    name: 'Forearms',
    slug: "forearms",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-62e-palms-down-wrist-curl-over-bench-m2-square-600x600.jpg"
  },
  { 
    name: 'Lats',
    slug: "lats",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-92c-pull-up-m2-square-600x600.jpg"
  },
  { 
    name: 'Middle Back',
    slug: "middle_back",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-58d-dumbbell-bent-over-row-m2-square-600x600.jpg"
  },
  { 
    name: 'Lower Back',
    slug: "lower_back",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-16m-back-extension-m2-square-600x600.jpg"
  },
  { 
    name: 'Quadriceps',
    slug: "quadriceps",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-18m-leg-extension-m2-square-600x600.jpg"
  },
  { 
    name: 'Hamstrings',
    slug: "hamstrings",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-9d-dumbbell-stiff-legged-deadlift-m2-square-600x600.jpg"
  },
  { 
    name: 'Calves',
    slug: "calves",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-33t-smith-machine-standing-calf-raise-m2-square-600x600.jpg"
  },
  { 
    name: 'Triceps',
    slug: "triceps",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-1m-triceps-dip-m2-square-600x600.jpg"
  },
  { 
    name: 'Traps',
    slug: "traps",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-alt-14t-smith-machine-shrug-m2-square-600x600.jpg"
  },
  { 
    name: 'Shoulders',
    slug: "shoulders",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-61d-dumbbell-front-raise-to-lateral-raise-m3-square-600x600.jpg"
  },
  { 
    name: 'Abdominals',
    slug: "abdominals",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-176a-elbow-to-knee-crunch-m2-square-600x600.jpg"
  },
  { 
    name: 'Glutes',
    slug: "glutes",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-24e-barbell-hip-thrust-m2-square-600x600.jpg"
  },
  { 
    name: 'Biceps',
    slug: "biceps",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/2020-xdb-46s-standing-ez-bar-curl-m2-crop-600x600.jpg"
  },
  { 
    name: 'Adductors',
    slug: "adductors",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-74m-thigh-adductor-m2-square-600x600.jpg"
  },
  { 
    name: 'Abductors',
    slug: "abductors",
    pictureUrl: "https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-73m-thigh-abductor-m2-square-600x600.jpg"
  }
]

export default function ExercisesCategories() {
  return (
    <div className="exercises-categories">
      <Slider elementWidth={240}>
        <SwiperSlide key="all">
          <SingleCategory
            name="All Exercises"
            isAll
          />
        </SwiperSlide>
        {
          categories.map(category => (
            <SwiperSlide key={category.slug}>
              <SingleCategory 
                name={category.name}
                slug={category.slug}
                pictureUrl={category.pictureUrl}
              />
            </SwiperSlide>
          ))
        }
      </Slider>
    </div>
  )
}

"use client"


import Slider from "@/components/UI/Slider/Slider"
import SingleCategory from "@/components/UI/SingleCategory/SingleCategory"
import { SwiperSlide } from "swiper/react"
import "./FoodsCategories.scss"

const categories = [
  { 
    name: 'Beans & Legumes',
    slug: "beans_and_legumes",
    pictureUrl: "/images/foods-categories/beans-and-legumes.jfif"
  },
  { 
    name: 'Beverages',
    slug: "beverages",
    pictureUrl: "/images/foods-categories/beverages.jfif"
  },
  { 
    name: 'Breads & Cereals',
    slug: "breads_and_cereals",
    pictureUrl: "/images/foods-categories/breads-and-cereals.jfif"
  },
  { 
    name: 'Cheese, Milk & Dairy',
    slug: "cheese,_milk_and_dairy",
    pictureUrl: "/images/foods-categories/cheese-milk-and-dairy.jfif"
  },
  { 
    name: 'Eggs',
    slug: "eggs",
    pictureUrl: "/images/foods-categories/eggs.jfif"
  },
  { 
    name: 'Fast Food',
    slug: "fast_food",
    pictureUrl: "/images/foods-categories/fast-food.jfif"
  },
  { 
    name: 'Fish & Seafood',
    slug: "fish_and_seafood",
    pictureUrl: "/images/foods-categories/fish-and-seafood.jfif"
  },
  { 
    name: 'Fruit',
    slug: "fruit",
    pictureUrl: "/images/foods-categories/fruit.jfif"
  },
  { 
    name: 'Meat',
    slug: "meat",
    pictureUrl: "/images/foods-categories/meat.jfif"
  },
  { 
    name: 'Nuts & Seeds',
    slug: "nuts_and_seeds",
    pictureUrl: "/images/foods-categories/nuts-and-seeds.jfif"
  },
  { 
    name: 'Pasta, Rice & Noodles',
    slug: "pasta,_rice_and_noodles",
    pictureUrl: "/images/foods-categories/pasta-rice-and-noodles.jfif"
  },
  { 
    name: 'Salads',
    slug: "salads",
    pictureUrl: "/images/foods-categories/salads.jfif"
  },
  { 
    name: 'Sauces, Spices & Spreads',
    slug: "sauces,_spices_and_spreads",
    pictureUrl: "/images/foods-categories/sauces-spices-and-spreads.jfif"
  },
  { 
    name: 'Snacks',
    slug: "snacks",
    pictureUrl: "/images/foods-categories/snacks.jfif"
  },
  { 
    name: 'Soups',
    slug: "soups",
    pictureUrl: "/images/foods-categories/soups.jfif"
  },
  { 
    name: 'Sweets, Candy & Desserts',
    slug: "sweets,_candy_and_desserts",
    pictureUrl: "/images/foods-categories/sweets-candy-and-desserts.jfif"
  },
  { 
    name: 'Vegetables',
    slug: "vegetables",
    pictureUrl: "/images/foods-categories/vegetables.jfif"
  },
  { 
    name: 'Other',
    slug: "other",
    pictureUrl: "/images/foods-categories/other.jfif"
  },
]

export default function FoodsCategories() {
  return (
    <div className="foods-categories">
      <Slider elementWidth={240}>
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

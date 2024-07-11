import { Meal } from "../types"
import { SimpleGrid } from "@chakra-ui/react"
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void;
}

function MainContent({ meals, loading, openRecipe }: Props) {

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SimpleGrid columns={[2, null, 3]} spacing='20px'>
      { loading &&  skeletons.map(skeleton => <SkeletonCard key={skeleton} />) }
      { !loading && meals.map(m => (
        <MealCard openRecipe={()=> openRecipe(m)} key={m.idMeal} meal={m}/>
      )) }
    </SimpleGrid>
  )
}

export default MainContent
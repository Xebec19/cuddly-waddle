import MealsSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react/cjs/react.production.min";

const Meals = () => {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
}

export default Meals;
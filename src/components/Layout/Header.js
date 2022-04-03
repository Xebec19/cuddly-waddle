import { Fragment } from "react";
import mealsImage from '../../assets/food-banner.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className="classes.Header">
            <h1>ReactMeals</h1>
            <HeaderCartButton />
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Tasty food"/>
        </div>
    </Fragment>
}

export default Header;
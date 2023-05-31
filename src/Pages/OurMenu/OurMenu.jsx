import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import MenuBtn from '../Shared/MenuBtn/MenuBtn';
import MenuSection from '../Shared/MenuSection/MenuSection';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const OurMenu = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                heading={"OUR MENU"}
                subHeading={"Would you like to try a dish?"}
                position={"top"}
            ></Cover>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"---Don't miss---"}
            ></SectionTitle>
            <PopularMenu
                category={"popular"}
            ></PopularMenu>
            <MenuBtn 
                text={"ORDER YOUR FAVOURITE FOOD"}
            ></MenuBtn>
            <MenuSection
                img={dessertImg}
                title={"DESSERTS"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                category={"dessert"}
            ></MenuSection>
            <MenuSection
                img={pizzaImg}
                title={"PIZZAS"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                category={"pizza"}
            ></MenuSection>
            <MenuSection
                img={saladImg}
                title={"SALADS"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                category={"salad"}
            ></MenuSection>
            <MenuSection
                img={soupImg}
                title={"SOUPS"}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                category={"soup"}
            ></MenuSection>
            
        </div>
    );
};

export default OurMenu;
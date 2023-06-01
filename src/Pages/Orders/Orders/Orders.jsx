import Cover from "../../Shared/Cover/Cover";
import bannerImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import CategoryCards from "../../Shared/CategoryCards/CategoryCards";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Orders = () => {

    const categorys = ["salads", "pizzas", "soups", "desserts", "drinks"];
    const category = useParams();
    const { title } = category;
    const initialIndex = categorys.indexOf(title); 
    const [tabIndex, setTabIndex] = useState(initialIndex);

    return (
        <div>
            <Helmet>
                <title>Order Food | Home</title>
            </Helmet>
            <Cover
                img={bannerImg}
                heading={"OUR SHOP"}
                subHeading={"Would you like to try a dish?"}
                position={"top"}
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center w-[1350px] mx-auto mt-20">
                    <Tab>SALADS</Tab>
                    <Tab>PIZZAS</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <CategoryCards
                        category={"salad"}
                    ></CategoryCards>
                </TabPanel>
                <TabPanel>
                    <CategoryCards
                        category={"pizza"}
                    ></CategoryCards>
                </TabPanel>
                <TabPanel>
                    <CategoryCards
                        category={"soup"}
                    ></CategoryCards>
                </TabPanel>
                <TabPanel>
                    <CategoryCards
                        category={"dessert"}
                    ></CategoryCards>
                </TabPanel>
                <TabPanel>
                    <CategoryCards
                        category={"drinks"}
                    ></CategoryCards>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Orders;
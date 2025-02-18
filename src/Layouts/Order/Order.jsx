import React, { useState } from "react";
import Cover from "../../Components/Cover";
import orderCover from "../../assets/assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Cover
        img={orderCover}
        title={"Our Order"}
        subTitle={"Delicious Meals Delivered to Your Doorstep!"}
      ></Cover>
      <Tabs
        className="mt-20 mb-10 text-center"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="text-yellow-500 font-semibold text-[22px] ">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

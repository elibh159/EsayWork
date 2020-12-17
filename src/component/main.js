import React from "react";
import Header from "./header";
import Banner from "./banner";
import Content from "./content";
import PeopleSay from "./peopleSay";
import ImportantPeople from "./importantPeople";
import ContactUs from './contactUs';
import Footer from './footer';
import Partners from './partners';

const Main = () => (
  <div>
    <Header />
    <Banner />
    <Content />
    <PeopleSay />
    <ImportantPeople />
    <Partners />
    <ContactUs />
    <Footer />
  </div>
);
export default Main;

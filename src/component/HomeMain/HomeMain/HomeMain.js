import React from 'react';
import BigProject from '../BigProject/BigProject';
import Ourteam from '../Ourteam/Ourteam';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';
import Messenger from '../../Shared/Messenger/Messenger';

const HomeMain = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Messenger></Messenger>
            <BigProject></BigProject>
            <Ourteam></Ourteam>
            <Testimonials></Testimonials>
            <Faq></Faq>
        </div>
    );
};

export default HomeMain;
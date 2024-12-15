import React from 'react';
import Testimonial from './Testimonial';
import './Testimonials.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../../images/user-one.png'

const Testimonials = () => {
    const testiMonials = [




        {
            name: 'Gareth Bale',
            description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
            address: 'USA',
            img: 'https://i.ibb.co/n1zYTr4/test1.png'
        },
        {
            name: 'Brandon Savage',
            description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
            address: 'USA',
            img: '  https://i.ibb.co/ZxKhRbR/test2.png'
        },
        {
            name: 'Steve Burns',
            description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
            address: 'USA',
            img: ' https://i.ibb.co/TTfpJXb/test3.png'
        },
        {
            name: 'Kevin Canlas',
            description: 'This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.',
            address: 'USA',
            img: 'https://i.ibb.co/9ykHHw8/test4.png'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-50 pb-50">
            <div className="container mt-5">
                <h3 className="miniTitle text-center text-title">TESTIMONIALS</h3>
                <div className="text-center mt-2 pt-2 ">
                    <h4 className="sectionTitle">What Our Clients are Saying?</h4>
                </div>
                {/* <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src={userPic} alt='' />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div className="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testimonial => {
                                        return (
                                            <Testimonial testimonial={testimonial} key={testimonial._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
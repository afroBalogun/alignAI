import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function Reviews(){
    const reviews = [
        {
            ratings: 4,
            review: "Great features for the price! The Pro Plan offers fantastic value for small businesses like ours. We love the analytics and reporting features that give us the insights we need to grow. Excited to explore the Premium Plan in the future!",
            name: "David Adebayo",
            occupation: "Founder, StartupWorks",
            profilePic: "david.png"
        },
        {
            ratings: 5,
            review: "As a fast-growing business, we needed a scalable solution that could grow with us. AlignAI not only delivered but also provided top-notch support to tailor the platform to our unique needs. The dedicated account manager has been invaluable!",
            name: "James Taylor",
            occupation: "CEO, NextGen Solutions",
            profilePic: "james.png"
        },
    ]

    const reviewCards = reviews.map((review) => {
        const stars = Array.from({ length: review.ratings }, (_, i) => (
            <FaStar key={i} color="#FFD700" />
        ))

        return (
            <SwiperSlide className="swiperslide">
                <div key={review.name} className="review-card">
                    <div className="rating">
                        {stars}
                    </div>
            
                    <p className="review">
                        "{review.review}"
                    </p>
            
                    <div className="who-reviewed">
                        <img src={`images/${review.profilePic}`} alt={review.name} />
                        <div className="reviewer-details">
                            <h4>{review.name}</h4>
                            <p>—{review.occupation}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        )
    })

    const review = reviews.map((review) => {
        const stars = Array.from({ length: review.ratings }, (_, i) => (
            <FaStar key={i} color="#FFD700" />
        ))

        return (
            <div className="review-slide">
                <div key={review.name} className="review-card">
                    <div className="rating">
                        {stars}
                    </div>
            
                    <p className="review">
                        "{review.review}"
                    </p>
            
                    <div className="who-reviewed">
                        <img src={`images/${review.profilePic}`} alt={review.name} />
                        <div className="reviewer-details">
                            <h4>{review.name}</h4>
                            <p>—{review.occupation}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    })
    return(
        <div className="reviews">
            <h1 className="review-title">What are people saying?</h1>
            <p className="review-text">Proof not promises, our services are great but don’t just here it from us alone!</p>
            
            <Swiper className="swiper review-container"
                spaceBetween={50}
                slidesPerView={1.4}
            >
                {reviewCards}
            </Swiper>

            <div className="review-slider">
                {review}
            </div>
        </div>
    )
}
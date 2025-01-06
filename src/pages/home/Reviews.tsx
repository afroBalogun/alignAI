import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Reviews() {
    const reviews = [
        {
            ratings: 4,
            review: "Great features for the price! The Pro Plan offers fantastic value for small businesses like ours. We love the analytics and reporting features that give us the insights we need to grow. Excited to explore the Premium Plan in the future!",
            name: "David Adebayo",
            occupation: "Founder, StartupWorks",
            profilePic: "david.png",
        },
        {
            ratings: 5,
            review: "As a fast-growing business, we needed a scalable solution that could grow with us. AlignAI not only delivered but also provided top-notch support to tailor the platform to our unique needs. The dedicated account manager has been invaluable!",
            name: "James Taylor",
            occupation: "CEO, NextGen Solutions",
            profilePic: "james.png",
        },
    ];

    // Reusable function to render review stars
    const renderStars = (ratings: number) =>
        Array.from({ length: ratings }, (_, i) => <FaStar key={i} color="#FFD700" />);

    // Reusable review card component
    const renderReviewCard = (review: typeof reviews[0]) => (
        <div className="review-card" key={review.name}>
            <div className="rating">{renderStars(review.ratings)}</div>
            <p className="review">"{review.review}"</p>
            <div className="who-reviewed">
                <img src={`images/${review.profilePic}`} alt={review.name} />
                <div className="reviewer-details">
                    <h4>{review.name}</h4>
                    <p>—{review.occupation}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="reviews">
            <h1 className="review-title">What are people saying?</h1>
            <p className="review-text">
                Proof, not promises. Our services are great, but don’t just hear it from us alone!
            </p>

            {/* Swiper Component for Reviews */}
            <Swiper
                className="swiper review-container"
                spaceBetween={50}
                slidesPerView={1.4}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.name} className="swiperslide">
                        {renderReviewCard(review)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Static Review Cards */}
            <div className="review-slider">
                {reviews.map((review) => (
                    <div className="review-slide" key={`static-${review.name}`}>
                        {renderReviewCard(review)}
                    </div>
                ))}
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";

import { Review } from "@src/entities/entities";

import ReviewCustomer from "@src/components/core/Reviews/ReviewCustomer/ReviewCustomer";
import { CarrouselWithTitleAndArrows } from "@src/components/composed/Carrousels/CarrouselWithTitleAndArrows/CarrouselWithTitleAndArrows";

import { reviews as reviewsList } from "@src/constants/reviews";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/containers/OurHappyCustomersSection/OurHappyCustomersSection.css";

export const OurHappyCustomersSection = () => {
  const [reviews, SetReviews] = useState<Review[]>([]);

  const [idsReviews, setIdsReviews] = useState<string[]>([]);

  const clearIdsRoot = () => {
    setIdsReviews([]);
  };

  const onInit = () => {
    const reviews: Review[] = reviewsList;

    SetReviews(reviews);
  };

  const onReviewsChange = () => {
    if (reviews?.length === 0 || !reviews) return;

    if (idsReviews.length > 0) {
      clearIdsRoot();
    }

    setIdsReviews(getIdsByLength(reviews!.length));
  };

  useEffect(onInit, []);
  useEffect(onReviewsChange, [reviews]);

  return (
    <section className="our-happy-customers">
      <CarrouselWithTitleAndArrows>
        {idsReviews.length > 0 &&
          reviews.map((r, i) => {
            return (
              <ReviewCustomer
                key={r.id}
                idRoot={idsReviews[i]}
                name={r.name}
                description={r.description}
                maxStars={5}
                valueStars={r.value}
                className="carousel-with-title-and-arrows__item"
                classNameWrapper="carousel-with-title-and-arrows__item-wrapper"
              ></ReviewCustomer>
            );
          })}
      </CarrouselWithTitleAndArrows>
    </section>
  );
};

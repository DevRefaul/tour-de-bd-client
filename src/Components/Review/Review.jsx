import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SingleReviewOnHome from "../SingleReviewOnHome/SingleReviewOnHome";

const Review = () => {
  const users = [
    {
      name: "Albert Einstein",
      time: "3",
      rating: "4.8",
      message:
        "It was a wonderful time with this man.He is awesome. I have explored many places that i don't know about before.",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Kim Jong Woun",
      time: "10",
      rating: "4.3",
      message:
        "It was a wonderful time with this man.He is awesome. I have explored many places that i don't know about before.",
      img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Donald Trump",
      time: "5",
      rating: "4.7",
      message:
        "It was a wonderful time with this man.He is awesome. I have explored many places that i don't know about before.",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Noredra Modi",
      time: "17",
      rating: "4.6",
      message:
        "It was a wonderful time with this man.He is awesome. I have explored many places that i don't know about before.",
      img: "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="my-8 w-[80%] mx-auto">
      <h2 className="text-3xl font-semibold text-teal-400 text-center py-4">
        Reviews
      </h2>
      <Splide
        aria-label="user reviews"
        options={{
          type: "loop",
          pagination: false,
          perPage: "2",
          arrows: false,
          autoplay: true,
          height: "auto",
          gap: "1rem",
          breakpoints: {
            1023: {
              perPage: 1,
              gap: "1rem",
            },
          },
        }}
      >
        {users.map((user, idx) => (
          <SplideSlide key={idx}>
            <SingleReviewOnHome user={user} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Review;

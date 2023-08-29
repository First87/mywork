import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import Image from "next/image";
import { motion } from "framer-motion";


function Slide() {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);
// /  // Sample items for Carousel
  const items = [
    {
      src: "/IMG_E4390.jpg",
    },
    {
      src: "/u1.jpg",
      
    },


  ];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  damping: 120,
                  stiffness: 500,
                },
              },
              hidden: {
                opacity: 0,
                x: -200,
                transition: {
                  type: "spring",
                  damping: 0,
                  stiffness: 0,
                },
              },
            }}
          >
            <Image
            className="banner1"
              src={item.src}
              alt="banner"
              height={500}
              width={2000}
              style={{width:"100%",height:"auto"}}
              
            />
          </motion.div>
        </div>

        
      </CarouselItem>
    );
  });

  return (
    <div className="">
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
      </Carousel>
    </div>
  );
}

export default Slide;

"use client";

import React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "motion/react";

export const centralColumnStyle = "w-[90%] max-w-[1340px] mx-auto";
export const pageYPadding = "py-10 md:py-12 lg:py-20 xl:py-30 2xl:py-40";
const defaultTitleClass =
  "text-2xl md:text-3xl font-semibold mb-2 text-foreground";
const defaultDescriptionClass =
  "text-base md:text-lg font-medium mb-2 text-foreground max-w-[400px] leading-[130%]";
const imageClass =
  "absolute top-[50%] -translate-y-[50%] ml-auto w-auto h-fit object-cover  transition-opacity duration-300";

export interface ItemContent {
  title: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

interface Props extends React.ComponentProps<"div"> {
  items: ItemContent[];
  titleClass?: string;
  descriptionClass?: string;
}

const ScrollRevealContentA = ({
  items,
  titleClass = defaultTitleClass,
  descriptionClass = defaultDescriptionClass,
  className,
  ...props
}: Props) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const ref0 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref0,
  });
  useMotionValueEvent(scrollYProgress, "change", () => {
    // @ts-ignore
    setScrollProgress(scrollYProgress.current);
  });

  const count = items.length;
  const segmentSize = 1 / count;

  return (
    <div
      className={cn("bg-background w-full  ", className)}
      ref={ref0}
      {...props}
    >
      <div className="w-full mx-auto">
        <div className="flex w-full mx-auto relative z-20">
          <div
            className={cn(
              centralColumnStyle,
              "sticky top-0 flex flex-col w-full items-start justify-center h-[100vh]"
            )}
          >
            <div className="flex flex-row gap-3  w-full h-full">
              <div className=" !w-full h-auto flex flex-col justify-center gap-10 md:gap-auto ">
                {items.map((item, index) => {
                  const thresholdStart = index * segmentSize;
                  const thresholdEnd = (index + 1) * segmentSize;
                  const number = String(index + 1).padStart(2, "0");
                  return (
                    <PointItem
                      key={index}
                      active={true}
                      number={number}
                      title={item.title}
                      description={item.description}
                      thresholdStart={thresholdStart}
                      thresholdEnd={thresholdEnd}
                      scrollProgress={scrollProgress}
                    />
                  );
                })}
              </div>
              <div className="flex flex-col  justify-center items-center  sm:w-full relative h-full ">
                {items.map((item, index) => {
                  const threshold = index * segmentSize;
                  return (
                    <Image
                      key={index}
                      width={item.image.width}
                      height={item.image.height}
                      src={item.image.url}
                      alt={item.image.alt}
                      className={cn(
                        imageClass,
                        scrollProgress > threshold ? "opacity-100" : "opacity-0"
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Scroll height scales with number of items */}
          <div style={{ height: `${count * 100}vh` }} />
        </div>
      </div>
    </div>
  );
};

export default ScrollRevealContentA;

const getBarPercentageHeight = (
  scrollProgress: number,
  thresholdStart: number,
  thresholdEnd: number
) => {
  if (scrollProgress < thresholdStart) {
    return 0;
  }
  if (scrollProgress > thresholdEnd) {
    return 100;
  }
  return (
    ((scrollProgress - thresholdStart) / (thresholdEnd - thresholdStart)) * 100
  );
};

const PointItem = ({
  active,
  number,
  title,
  description,
  thresholdStart,
  thresholdEnd,
  scrollProgress,
}: {
  active: boolean;
  number: string;
  title: string;
  description: string;
  thresholdStart: number;
  thresholdEnd: number;
  scrollProgress: number;
}) => {
  const barHeightPercentage = getBarPercentageHeight(
    scrollProgress,
    thresholdStart,
    thresholdEnd
  );
  const isActive = barHeightPercentage > 0;
  return (
    <div
      className={cn(
        "flex flex-col interactive w-full",
        active ? "opacity-100" : "opacity-50"
      )}
    >
      <div className="w-full">
        <h3
          className={cn(
            defaultTitleClass,
            "mb-4 ml-5",
            isActive ? "opacity-100" : "opacity-50"
          )}
        >
          {number}
        </h3>
      </div>
      <div className="w-full flex relative left-[16px]">
        <div className="w-[70px] flex items-start justify-center relative">
          <div className="h-full w-[2px] bg-foreground/10 absolute top-0 left-[50%] -translate-x-1/2" />
          <div
            className="h-full w-[2px] bg-foreground absolute top-0 left-[50%] -translate-x-1/2"
            style={{ height: `${barHeightPercentage}%` }}
          />
        </div>
        <div className="w-[calc(100% - 40px)] pl-4">
          <div className="flex flex-col gap-1">
            <h3
              className={cn(
                defaultTitleClass,
                isActive ? "opacity-100" : "opacity-50"
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                defaultDescriptionClass,
                isActive ? "opacity-100" : "opacity-50"
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

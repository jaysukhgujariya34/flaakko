"use client";

import React, { FC, useState, useEffect } from "react";
import backgroundLineSvg from "@/images/Moon.svg";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Next from "@/shared/NextPrev/Next";
import Prev from "@/shared/NextPrev/Prev";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";
import Image from "next/image";
import { BIG_SCREEN_SLIDES as DATA, SMALL_SCREEN_SLIDES } from "./data";
import { useMediaQuery } from "react-responsive";

export interface SectionHero2Props {
  className?: string;
}

let TIME_OUT: NodeJS.Timeout | null = null;

const SectionHero2: FC<SectionHero2Props> = ({ className = "" }) => {
  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);
  const [showContent, setShowContent] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? 5500 : null
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };
  // =================

  const isBigScreen = useMediaQuery({
    query: "(min-width: 900px)",
  });

  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isBigScreen]);

  const Loading = () => (
    <div
      role="status"
      className="flex items-center justify-center mx-5 h-96 nc-SectionHero2Item bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 nc-SectionHero2Item--animation inset-0 object-contain sm:mt-10 md:mt-5 sm:mx-20 md:mx-20 xl:mx-52  "
      style={{ borderRadius: "1.5rem" }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = isBigScreen ? DATA[index] : SMALL_SCREEN_SLIDES[index];
    if (!isActive) {
      return null;
    }
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <div
            className="relative  nc-SectionHero2Item nc-SectionHero2Item--animation inset-0 object-contain sm:mt-10 md:mt-5 sm:mx-20 md:mx-20 xl:mx-52  "
            style={{ borderRadius: "1.5rem" }}
            key={index}
          >
            <div className="mx-5">
              <div className="absolute bottom-0 left-5 sm:bottom-5 sm:left-10 container pt-14 sm:pt-20 lg:pt-44 pb-5">
                <div
                  className={`relative z-[1] w-full max-w-3xl space-y-8 sm:space-y-14 nc-SectionHero2Item__left`}
                >
                  <div className="space-y-5 sm:space-y-6">
                    <span className="nc-SectionHero2Item__subheading block text-base md:text-xl text-white font-medium">
                      {item.subHeading}
                    </span>
                    <h2 className="nc-SectionHero2Item__heading font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-white">
                      {item.heading}
                    </h2>
                  </div>

                  <ButtonPrimary
                    className="nc-SectionHero2Item__button dark:bg-slate-900 "
                    sizeClass="py-2 px-6 sm:py-3 sm:px-5"
                    href={item.btnLink}
                  >
                    <span>{item.btnText}</span>
                  </ButtonPrimary>
                </div>
              </div>
              <Image
                // fill
                // sizes="(max-width: 900px) 100vw, 100vw"
                src={item.image}
                style={{ borderRadius: "1.5rem", marginTop: "5px" }}
                alt="hero"
              />
            </div>
          </div>
        )}
      </>
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default SectionHero2;

"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function Section4() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const questionRef = useRef(null)
  const dividerRef = useRef(null)
  const linksRef = useRef(null)
  const bottomBarRef = useRef(null)

  useGSAP(
    () => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      })

      // Question text animation
      gsap.from(questionRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: questionRef.current,
          start: "top 85%",
          end: "top 55%",
          toggleActions: "play none none reverse",
        },
      })

      // Divider animation
      gsap.from(dividerRef.current, {
        scaleY: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      })

      // Links animation with stagger
      const linkItems = linksRef.current?.querySelectorAll("a")
      if (linkItems) {
        gsap.from(linkItems, {
          x: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Bottom bar animation
      gsap.from(bottomBarRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomBarRef.current,
          start: "top 95%",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] bg-[#F1761C] font-sans flex flex-col justify-between pt-24 lg:pt-32"
    >
      {/* Main Content Container */}
      <div className="flex flex-col items-center px-6 md:px-12 lg:px-24 mb-24">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-[40px] md:text-[60px] lg:text-[80px] text-white font-bold tracking-wide mb-20 md:mb-32 text-center drop-shadow-md"
        >
          Start Your Glow Journey
        </h1>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center w-full max-w-6xl gap-12 md:gap-0">
          {/* Left Side: Question Text */}
          <div
            ref={questionRef}
            className="flex-1 flex justify-end items-center text-center md:text-left pr-0 md:pr-16 lg:pr-24"
          >
            <h2 className="text-[22px] md:text-[28px] lg:text-[32px] text-white font-semibold leading-relaxed max-w-sm drop-shadow-sm">
              Have questions about our products? We'd love to hear from you.
            </h2>
          </div>

          {/* Vertical Divider */}
          <div
            ref={dividerRef}
            className="hidden md:block w-[2px] bg-white self-stretch opacity-80"
          ></div>
          <div className="block md:hidden h-[2px] w-24 bg-white opacity-80"></div>

          {/* Right Side: Links */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-16 lg:pl-24 gap-5 md:gap-6">
            <a
              href="#"
              className="text-[18px] md:text-[22px] lg:text-[24px] text-white font-bold hover:opacity-80 transition-opacity tracking-wide drop-shadow-sm"
            >
              Email Address
            </a>
            <a
              href="#"
              className="text-[18px] md:text-[22px] lg:text-[24px] text-white font-bold hover:opacity-80 transition-opacity tracking-wide drop-shadow-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[18px] md:text-[22px] lg:text-[24px] text-white font-bold hover:opacity-80 transition-opacity tracking-wide drop-shadow-sm"
            >
              TikTok
            </a>
            <a
              href="#"
              className="text-[18px] md:text-[22px] lg:text-[24px] text-white font-bold hover:opacity-80 transition-opacity tracking-wide drop-shadow-sm"
            >
              Customer Support
            </a>
            <a
              href="#"
              className="text-[18px] md:text-[22px] lg:text-[24px] text-white font-bold hover:opacity-80 transition-opacity tracking-wide drop-shadow-sm"
            >
              Location
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div ref={bottomBarRef} className="w-full">
        <div className="w-full bg-white py-6 shadow-lg">
          <p className="text-center text-[#F1761C] font-bold text-lg md:text-xl tracking-widest">
            Made with Love
          </p>
        </div>
        {/* Orange spacing below the bar to match the picture */}
        <div className="h-16 md:h-24 bg-[#F1761C] w-full"></div>
      </div>
    </section>
  )
}

export default Section4

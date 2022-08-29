import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="best-ad">
          <motion.div
            initial={{ left: mobile? "178":"238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club in the Town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={{ ...transition, type: "tween" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={Hero_image} className="hero-image" alt="Hero" />
        <motion.img
        initial={{ right: "11rem" }}
        whileInView={{ right: "20rem" }}
        transition={{ ...transition, type: "tween" }} 
         src={Hero_image_back} className="hero-image-back" alt="HeroBack" />
        <motion.div
        initial={{ right: "34rem" }}
        whileInView={{ right: "28rem" }}
        transition={{ ...transition, type: "tween" }}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

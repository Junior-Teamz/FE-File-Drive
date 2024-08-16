import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: "phone" });
  }, []);

  return (
    <section className="relative my-28 bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:flex lg:items-center">
        <div className="lg:w-1/2">
          <div className="mb-8 lg:mb-0" data-aos="fade-right">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl">
              About Us
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              porro doloribus consequatur, necessitatibus praesentium asperiores
              dolores dicta veniam maxime officiis.
            </p>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              praesentium?
            </p>
          </div>
        </div>
        <div
          className="relative mt-10 h-54 w-full lg:w-1/2 lg:h-auto lg:mt-0"
          data-aos="fade-left"
        >
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            className="h-full w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

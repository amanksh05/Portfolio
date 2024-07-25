"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from './Home.module.css';

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll("section");
    let currentSection = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - viewportHeight / 2) {
          section.classList.add(styles.visible);
          section.classList.remove(styles.exit);
          if (index > 0) {
            sections[index - 1].classList.add(styles.exit);
          }
          currentSection = index;
        } else {
          section.classList.remove(styles.visible);
        }
      });

      if (currentSection < sections.length - 1) {
        if (scrollPosition >= sections[currentSection + 1].offsetTop - viewportHeight / 2) {
          sections[currentSection].classList.remove(styles.visible);
          sections[currentSection].classList.add(styles.exit);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex flex-col items-center">
      <section id="intro" className={`flex min-h-screen flex-col items-center justify-center ${styles.section}`}>
        <div className="flex flex-row justify-center items-center px-20 py-20 gap-10">
          <div className="flex flex-col gap-5">
            {/* Introduction content */}
            <div className="flex flex-col gap-2">
              <div className="font-aeonik tracking-wide text-4xl font-semibold">
                Hi! I am Aman Kumar
              </div>
              <div className="font-geist text-lg tracking-wider font-medium">
                UX/UI DESIGNER | DEVELOPER
              </div>
            </div>
            <div className="font-aeonik tracking-wider text-lg">
              Self taught UX/UI designer and developer by profession, pursuing B.tech CSE.
            </div>
          </div>
          <div className="relative w-64 h-64 overflow-hidden rounded-full border-2 border-gray-400">
            {/* Image / avatar */}
            <Image
              src="/Ethnic.png"
              alt="Avatar"
              layout="fill"
              objectFit="cover"
              className="image-zoom"
            />
          </div>
        </div>
      </section>

      <section id="projects" className={`flex min-h-screen flex-col items-center justify-center bg-gray-800 py-20 ${styles.section}`}>
        <h2 className="text-center text-3xl font-aeonik mb-10">Projects</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {/* Add your project items here */}
          <div className="bg-slate-700 w-64 h-64">Project 1</div>
          <div className="bg-slate-700 w-64 h-64">Project 2</div>
          <div className="bg-slate-700 w-64 h-64">Project 3</div>
          {/* Add more project items as needed */}
        </div>
      </section>

      <section id="about" className={`flex min-h-screen flex-col items-center justify-center w-full py-20 bg-gray-900 ${styles.section}`}>
        <h2 className="text-center text-3xl font-aeonik mb-10">About Me</h2>
        <div className="text-center max-w-prose mx-auto">
          <p>
            This is the about me section. You can add more details about yourself here.
          </p>
        </div>
      </section>
    </main>
  );
}

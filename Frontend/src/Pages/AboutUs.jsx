import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { OrbitControls } from "@react-three/drei";
import Navbar from "../components/Navbar";
import useStore from "../store/store";
import { useGSAP } from "@gsap/react";
import { Anah, Avik, Mahim } from "../Assets/index.js";

// Rotating 3D Sports Logo Component
function RotatingCube() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshLambertMaterial emissive="#669bbc" color="#2a9d8f" />
    </mesh>
  );
}

export default function AboutUs() {
  const containerRef = useRef();
  const { setMenuOpen } = useStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ".ob-member",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".Navbar",
      {
        opacity: 0,
        y: -20,
        ease: "power1.inOut",
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.2,
      }
    );
  }, []);

  // OB Members Data
  const obMembers = [
    {
      name: "Anah Patel",
      role: "Joint Secretary",
      img: Anah,
    },
    {
      name: "Mahim Thakkar",
      role: "Secretary",
      img: Mahim,
    },
    {
      name: "Avik Shah",
      role: "Treasurer",
      img: Avik,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br min-h-[100vh] from-gray-800 via-gray-900 to-black text-white flex flex-col items-center overflow-hidden max-w-full"
    >
      <div className="Navbar min-h-[12vh] h-[12vh] w-full sticky top-0 z-50 overflow-visible">
        <Navbar selected={"About Us"} />
      </div>

      <div
        onClick={() => setMenuOpen(false)}
        className="sm:w-full w-[80%] mb-28 md:mb-0 h-[40vh] sm:max-h-[88vh] md:w-2/3 lg:w-1/2 text-center mt-10 md:mt-20"
      >
        <h1 className="sm:text-5xl text-3xl font-extrabold mb-8 about-text text-yellow-400">
          The Sports Club Family
        </h1>
        <p className="text-lg mb-6 about-text">
          Welcome to the annual sports fest organized by our prestigious sports
          club! We aim to bring the spirit of sportsmanship and teamwork to
          everyone. Enjoy thrilling competitions, fun activities, and
          community-building events.
        </p>
        <p className="text-lg mb-4 about-text">
          Join us in celebrating the passion and dedication of our athletes,
          fostering a love for sports and camaraderie among participants and
          spectators alike.
        </p>
      </div>

      {/* OB Members Section */}
      <div className="Navbar w-full h-[90vh] sm:h-[70vh] flex  flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col md:flex-row w-full sm:w-[60%] h-[90%] sm:h-[60%] justify-around items-center gap-10">
          {obMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="relative w-[70%] sm:w-[60%] h-[100%] bg-black rounded-[2rem] overflow-hidden ob-member"
            >
              <img
                className="object-cover w-full h-full"
                src={member.img}
                alt={member.role}
              />
              <div className="absolute bottom-0 w-full bg-blur text-white backdrop-blur-md flex flex-col items-center">
                <h1 className="text-lg font-semibold">{member.name}</h1>
                <h3 className="text-sm">{member.role}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[100%] h-[100%] about-text flex items-center justify-center">
        <Canvas
          style={{
            height: "inherit",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OrbitControls enableRotate enablePan enableZoom />
          <ambientLight position={[1, 1, 1]} intensity={1} color={"#9CDBA6"} />
          <RotatingCube />
        </Canvas>
      </div>
    </div>
  );
}

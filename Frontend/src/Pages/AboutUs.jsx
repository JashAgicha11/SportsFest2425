import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { OrbitControls, Sparkles } from "@react-three/drei"
import * as THREE from "three";
import Navbar from "../components/Navbar";
import useStore from "../store/store";


// Rotating 3D Sports Logo Component
function RotatingCube (){
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current){
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01

    }
  }, [])

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.2,1.2,1.2]}/>
      <meshLambertMaterial emissive="#669bbc" color="#2a9d8f" />
      {/* <Sparkles count={100} scale={1} size={6} speed={0.002} color={"orange"} noise={0.2}/> */}

    </mesh>
  );
}

export default function AboutUs() {
  const containerRef = useRef();
  const {setMenuOpen} = useStore();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ".canvas-container",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-br h-[100vh]  from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col items-center overflow-hidden"
    >
      <div className="h-[12vh] w-full sticky top-0">
        <Navbar selected={"About Us"} />
      </div>
      <div onClick={() => setMenuOpen(false)} className="sm:w-full w-[80%] max-h-[88vh] md:w-2/3 lg:w-1/2 text-center mt-20">
        <h1 className="text-5xl text-nowrap font-extrabold mb-8 about-text text-yellow-400">
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
      <div className="canvas-container w-[100%] h-[100%] about-text flex items-center">
        <Canvas
          style={{
            height: "inherit",
            // width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OrbitControls enableRotate enablePan enableZoom />

          <ambientLight position={[1, 1, 1]} intensity={1} color={"#9CDBA6"} />

          {/* <color attach="background" args={["#F0F0F0"]} /> */}

          <RotatingCube />
        </Canvas>
      </div>
    </div>
  );
}


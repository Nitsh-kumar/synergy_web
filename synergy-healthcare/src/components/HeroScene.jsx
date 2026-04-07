import React, { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './ErrorBoundary';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Separate component for the model to handle its own suspense
function HumanBodyModel({ mouseRef }) {
  const modelRef = useRef();
  const { scene, animations } = useGLTF('/lkn.glb');
  const mixerRef = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixerRef.current.clipAction(clip).play();
      });
    }
    return () => {
      if (mixerRef.current) mixerRef.current.stopAllAction();
    };
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
    
    // Smooth mouse tracking on the model itself
    if (modelRef.current && mouseRef.current) {
      const targetRotationY = mouseRef.current.x * Math.PI * 0.2;
      modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
      
      const targetRotationX = -mouseRef.current.y * Math.PI * 0.05;
      modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={modelRef} scale={[0.05, 0.05, 0.05]}>
      <primitive object={scene} />
    </group>
  );
}

// Fallback when loading or if model fails
function FallbackModel() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
      <meshStandardMaterial color="#1B4D3E" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollGroupRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // GSAP ScrollTrigger on the PARENT group to avoid conflict with mouse rotation
    let ctx = gsap.context(() => {
      if (scrollGroupRef.current) {
        gsap.to(scrollGroupRef.current.rotation, {
          y: Math.PI * 2,
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      }
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        background: 'linear-gradient(160deg, #F4F7F4 0%, #E8F0E8 50%, #D4E8D0 100%)',
      }}
    >
      <ErrorBoundary>
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 18], fov: 45 }}
          shadows
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor(new THREE.Color('#F4F7F4'), 0);
          }}
        >
          <ambientLight intensity={1.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          {/* Scroll Group handles the global rotation */}
          <group ref={scrollGroupRef}>
            {/* Float handles the idle animation */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <Suspense fallback={<FallbackModel />}>
                <HumanBodyModel mouseRef={mouseRef} />
              </Suspense>
            </Float>
          </group>

          <Environment preset="city" />
        </Canvas>
      </ErrorBoundary>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 pointer-events-none text-center">
        <h1 
          className="font-black tracking-tight"
          style={{ 
            color: '#2D4A1E',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            textShadow: '0 10px 30px rgba(45,74,30,0.1)'
          }}
        >
          Expert Physiotherapy Care
        </h1>
        <p className="text-xl sm:text-2xl mt-4 font-medium" style={{ color: '#1B4D3E' }}>
          Healing Ghaziabad, One Step at a Time.
        </p>
        <div className="mt-8 animate-bounce">
          <svg className="w-8 h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1B4D3E]/10 to-transparent pointer-events-none" />
    </section>
  );
}

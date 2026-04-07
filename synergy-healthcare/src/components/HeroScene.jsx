import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './ErrorBoundary';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

function FallbackModel() {
  const meshRef = useRef();
  useFrame(() => {
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

const STATS = [
  { value: '10+', label: 'Years Exp.' },
  { value: '5K+', label: 'Patients' },
  { value: '99%', label: 'Recovery' },
];

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

  const bookAppointment = () =>
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  const viewServices = () =>
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        height: '100svh',
        minHeight: '100vh',
        background: 'linear-gradient(150deg, #F4F7F4 0%, #E8F0E8 40%, #D4E8D0 100%)',
      }}
    >
      {/* 3D Canvas — full background on all sizes */}
      <ErrorBoundary>
        <Canvas
          className="!absolute inset-0 w-full h-full"
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
          <group ref={scrollGroupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <Suspense fallback={<FallbackModel />}>
                <HumanBodyModel mouseRef={mouseRef} />
              </Suspense>
            </Float>
          </group>
          <Environment preset="city" />
        </Canvas>
      </ErrorBoundary>

      {/* ── MOBILE layout (< sm) ─────────────────────────────── */}
      <div className="sm:hidden absolute inset-0 flex flex-col justify-start pt-20 px-4 z-10">
        {/* Glass card containing all content */}
        <div
          className="rounded-3xl p-5 w-full"
          style={{
            backgroundColor: 'rgba(244,247,244,0.93)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(27,77,62,0.1)',
            boxShadow: '0 8px 32px rgba(27,77,62,0.08)',
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-3"
            style={{
              backgroundColor: 'rgba(192,57,43,0.1)',
              color: '#C0392B',
              border: '1px solid rgba(192,57,43,0.2)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#C0392B' }} />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              Ghaziabad&apos;s Trusted Center
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-black leading-tight mb-2"
            style={{ color: '#2D4A1E', fontSize: '1.85rem' }}
          >
            Expert{' '}
            <span style={{ color: '#C0392B' }}>Physiotherapy</span>
            <br />
            &amp; Rehabilitation
          </h1>

          {/* Subtitle */}
          <p className="text-sm mb-4 leading-snug" style={{ color: '#3a6b55' }}>
            Healing Ghaziabad, one step at a time.
          </p>

          {/* Stats row */}
          <div
            className="flex divide-x rounded-2xl overflow-hidden mb-5"
            style={{ backgroundColor: 'rgba(27,77,62,0.06)', divideColor: 'rgba(27,77,62,0.1)' }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex-1 text-center py-2.5">
                <div className="font-black text-base" style={{ color: '#1B4D3E' }}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium" style={{ color: '#666' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons — full width on mobile */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={bookAppointment}
              className="w-full py-3.5 rounded-xl text-white font-bold text-sm tracking-wide active:scale-95 transition-transform"
              style={{ backgroundColor: '#1B4D3E' }}
            >
              Book Appointment →
            </button>
            <button
              onClick={viewServices}
              className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide active:scale-95 transition-transform"
              style={{
                color: '#1B4D3E',
                border: '2px solid rgba(27,77,62,0.35)',
                backgroundColor: 'transparent',
              }}
            >
              View Our Services
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-4 animate-bounce" style={{ color: '#1B4D3E', opacity: 0.4 }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── DESKTOP layout (sm+) ─────────────────────────────── */}
      {/* Top gradient */}
      <div className="hidden sm:block absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1B4D3E]/10 to-transparent pointer-events-none" />

      {/* Left text panel */}
      <div className="hidden sm:flex absolute inset-0 flex-col justify-center px-12 lg:px-20 pointer-events-none">
        <div className="max-w-lg">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{
              backgroundColor: 'rgba(192,57,43,0.12)',
              color: '#C0392B',
              border: '1px solid rgba(192,57,43,0.25)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#C0392B' }} />
            Ghaziabad&apos;s Trusted Physiotherapy Center
          </div>

          {/* Heading */}
          <h1
            className="font-black leading-tight mb-4 animate-fade-in-up"
            style={{
              color: '#2D4A1E',
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              textShadow: '0 4px 20px rgba(45,74,30,0.08)',
            }}
          >
            Expert{' '}
            <span style={{ color: '#C0392B' }}>Physiotherapy</span>
            <br />
            &amp; Rehabilitation
          </h1>

          {/* Subtitle */}
          <p className="text-base lg:text-lg font-medium mb-8 leading-relaxed" style={{ color: '#3a6b55', opacity: 0.9 }}>
            Healing Ghaziabad, One Step at a Time.
            <br />
            <span className="text-sm font-normal" style={{ color: '#1B4D3E', opacity: 0.7 }}>
              Advanced pain management &amp; post-surgery rehabilitation.
            </span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pointer-events-auto">
            <button
              onClick={bookAppointment}
              className="px-6 py-3 rounded-full text-white font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ backgroundColor: '#1B4D3E' }}
            >
              Book Appointment →
            </button>
            <button
              onClick={viewServices}
              className="px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'rgba(27,77,62,0.08)',
                color: '#1B4D3E',
                border: '2px solid rgba(27,77,62,0.4)',
              }}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Desktop stats bar */}
      <div className="hidden sm:flex absolute bottom-8 left-12 lg:left-20 gap-3 pointer-events-none">
        {[
          { value: '10+', label: 'Years Experience' },
          { value: '5,000+', label: 'Patients Treated' },
          { value: '99%', label: 'Recovery Rate' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl px-5 py-3 shadow-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(27,77,62,0.1)',
            }}
          >
            <div className="font-black text-xl" style={{ color: '#1B4D3E' }}>{stat.value}</div>
            <div className="text-xs font-medium" style={{ color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Desktop scroll indicator */}
      <div
        className="hidden sm:block absolute bottom-8 right-12 animate-bounce pointer-events-none"
        style={{ color: '#1B4D3E', opacity: 0.4 }}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

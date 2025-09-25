import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const points = React.useMemo(() => {
    const temp = new Float32Array(1000);
    for (let i = 0; i < 1000; i++) {
      temp[i] = (Math.random() - 0.5) * 10;
    }
    return temp;
  }, []);

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (orb1Ref.current) {
      orb1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      orb1Ref.current.rotation.y += 0.01;
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3 + 2) * 1.5;
      orb2Ref.current.rotation.x += 0.02;
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7 + 4) * 1.8;
      orb3Ref.current.rotation.z += 0.015;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[-3, 0, -5]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.1} />
      </mesh>
      <mesh ref={orb2Ref} position={[3, 0, -8]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#CD7F32" transparent opacity={0.08} />
      </mesh>
      <mesh ref={orb3Ref} position={[0, 0, -12]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#FFD700" transparent opacity={0.06} />
      </mesh>
    </>
  );
}

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.2} color="#D4AF37" />
        <FloatingParticles />
        <FloatingOrbs />
      </Canvas>
      
      {/* Additional CSS animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-arabic-gold/5 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-luxury-gold-400/3 to-transparent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-arabic-bronze/4 to-transparent rounded-full animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;

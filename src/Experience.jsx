import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import Hamburger from "./Hamburger";
import { Perf } from "r3f-perf";

export default function Experience() {
    const { viewport } = useThree();
    console.log(viewport.width, viewport.height)

    return (
        <>
            {/* <Perf position="top-left" /> */}
            <OrbitControls enablePan={false} enableZoom={false} autoRotate/>
            <directionalLight
                castShadow
                position={[1, 2, 3]}
                intensity={1.5}
                shadow-normalBias={0.04}
                shadow-mapSize={[1024, 1024]}
            />
            <ambientLight intensity={0.5} />
            <Suspense>
                <Hamburger
                    scale={(window.innerWidth > 500) ? 0.35 : 0.25}
                    position={[0, -1, 0]}
                />
            </Suspense>
        </>
    );
}

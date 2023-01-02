import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export default function Hamburger(props) {
    const { nodes, materials } = useGLTF("./hamburger-draco.glb");

    const [open, setOpen] = useState(false);
    const heading = document.querySelector('.hamburger');

    const topBunRef = useRef();
    const cheeseRef = useRef();
    const steakRef = useRef();
    const bottomBunRef = useRef();

    const toggleHamburger = () => {
        if (!open) {
            gsap.to(topBunRef.current.position, { y: 4.77, duration: 0.5 });
            gsap.to(cheeseRef.current.position, { y: 4.9, duration: 0.5 });
            gsap.to(bottomBunRef.current.position, { y: -1.77, duration: 0.5 });

            if(window.innerWidth > 500){
                heading.classList.remove('active')
            }

            setOpen(true);
        } else {
            gsap.to(topBunRef.current.position, { y: 1.77, duration: 0.5 });
            gsap.to(cheeseRef.current.position, { y: 3.03, duration: 0.5 });
            gsap.to(bottomBunRef.current.position, { y: 0, duration: 0.5 });

            heading.classList.add('active')

            setOpen(false);
        }
    };

    return (
        <group {...props} dispose={null} onClick={toggleHamburger}>
            <mesh
                ref={cheeseRef}
                castShadow
                receiveShadow
                geometry={nodes.cheese.geometry}
                material={materials.CheeseMaterial}
                position={[0, 3.04, 0]}
            />
            <mesh
                ref={steakRef}
                castShadow
                receiveShadow
                geometry={nodes.meat.geometry}
                material={materials.SteakMaterial}
                position={[0, 2.82, 0]}
            />
            <mesh
                ref={topBunRef}
                castShadow
                receiveShadow
                geometry={nodes.topBun.geometry}
                material={materials.BunMaterial}
                position={[0, 1.77, 0]}
            />
            <mesh
                ref={bottomBunRef}
                castShadow
                receiveShadow
                geometry={nodes.bottomBun.geometry}
                material={materials.BunMaterial}
            />
        </group>
    );
}

useGLTF.preload("./hamburger-draco.glb");

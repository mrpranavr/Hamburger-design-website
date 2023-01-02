import "./styles.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <h1 className="hamburger active">HAMBURGER</h1>
        <Canvas
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Experience />
        </Canvas>
    </>
);

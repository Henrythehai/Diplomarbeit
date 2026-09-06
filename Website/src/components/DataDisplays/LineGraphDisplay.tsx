//styles
import './LineGraphDisplay.css'
import {useEffect, useRef} from "react";

interface CanvasProps {
    width: number;
    height: number;
}

export const LineGraphDisplay = ({ width, height }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const container = canvas.parentElement;
        if (!container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            const rect = container.getBoundingClientRect();

            canvas.width = rect.width;
            canvas.height = rect.height;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#4F7CAC";
            ctx.fillRect(20, 20, 100, 100);
        };

        resizeCanvas();

        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(container);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="canvasContainer">
            <canvas ref={canvasRef} />
        </div>
    );
};

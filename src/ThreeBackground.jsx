import React, { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create tactile noise grain pattern canvas
    const noiseCanvas = document.createElement('canvas');
    noiseCanvas.width = 256;
    noiseCanvas.height = 256;
    const noiseCtx = noiseCanvas.getContext('2d');
    const imgData = noiseCtx.createImageData(256, 256);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const val = Math.floor(Math.random() * 255);
      imgData.data[i] = val;
      imgData.data[i + 1] = val;
      imgData.data[i + 2] = val;
      imgData.data[i + 3] = 18; // Crisp tactile grain
    }
    noiseCtx.putImageData(imgData, 0, 0);
    const noisePattern = ctx.createPattern(noiseCanvas, 'repeat');

    // Vibrant Cyan & Midnight Fluid Aurora Blobs
    const blobs = [
      { xFrac: 0.85, yFrac: 0.18, rFrac: 0.60, color: '#00d4ff', speedX: 1.1, speedY: 0.9 },
      { xFrac: 0.15, yFrac: 0.82, rFrac: 0.65, color: '#0096c7', speedX: 0.9, speedY: 1.2 },
      { xFrac: 0.90, yFrac: 0.75, rFrac: 0.48, color: '#023e8a', speedX: 0.8, speedY: 1.0 },
      { xFrac: 0.35, yFrac: 0.25, rFrac: 0.40, color: '#0077b6', speedX: 1.3, speedY: 0.8 }
    ];

    // Constellation micro-particles
    const particleCount = 48;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    // Smooth mouse follower
    let mouse = { x: width * 0.5, y: height * 0.3, targetX: width * 0.5, targetY: height * 0.3 };
    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let t = 0;

    const render = () => {
      t += 0.016;

      // Mouse lerp for smooth inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Pitch black base matching dark cyber aesthetic
      ctx.fillStyle = '#020408';
      ctx.fillRect(0, 0, width, height);

      // Render vibrant fluid aurora gradient blobs
      blobs.forEach((blob, idx) => {
        const offset = idx * 1.9;
        const currentX = (blob.xFrac * width) + Math.sin(t * blob.speedX + offset) * 160;
        const currentY = (blob.yFrac * height) + Math.cos(t * blob.speedY + offset) * 140 - (scrollY * 0.12);
        const radius = (blob.rFrac * Math.max(width, height)) + Math.sin(t * 1.4 + offset) * 50;

        const grad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, radius);
        grad.addColorStop(0, blob.color);
        grad.addColorStop(0.35, blob.color + 'aa');
        grad.addColorStop(0.70, blob.color + '22');
        grad.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive mouse cursor aura spotlight
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 380);
      mouseGrad.addColorStop(0, 'rgba(0, 212, 255, 0.22)');
      mouseGrad.addColorStop(0.5, 'rgba(0, 150, 255, 0.08)');
      mouseGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 380, 0, Math.PI * 2);
      ctx.fill();

      // Render constellation nodes and faint connecting web
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle node
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.14;
            ctx.strokeStyle = `rgba(0, 212, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Faint connection to mouse cursor
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const mAlpha = (1 - mdist / 140) * 0.22;
          ctx.strokeStyle = `rgba(96, 180, 255, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Apply film grain texture overlay
      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = noisePattern;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg3dCanvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block'
      }}
    />
  );
}

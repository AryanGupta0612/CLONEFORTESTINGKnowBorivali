import React, { useEffect, useRef } from 'react';
import QRCodeJS from 'qrcode.js';

interface QRCodeProps {
  url: string;
  size?: number;
  className?: string;
}

function QRCode({ url, size = 100, className = '' }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const qr = new QRCodeJS({
        text: url,
        width: size,
        height: size,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCodeJS.CorrectLevel.M,
      });
      
      canvasRef.current.innerHTML = '';
      canvasRef.current.appendChild(qr);
    }
  }, [url, size]);

  return (
    <div className={`inline-block ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default QRCode;
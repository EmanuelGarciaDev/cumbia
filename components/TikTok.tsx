'use client'
import React, { useEffect, useState } from 'react'

const TikTok = () => {
      const [isMounted, setIsMounted] = useState(false);
    
      useEffect(() => {
        setIsMounted(true);
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      if (!isMounted) {
        return null; // or return a placeholder
      }
  return (
    <div>
        <blockquote 
            className="tiktok-embed" 
            cite="https://www.tiktok.com/@cumbiaparatodxs/video/7449909739737124102" 
            data-video-id="7449909739737124102" 
            style={{maxWidth: '605px', minWidth: '325px'}}> 
            <section> 
                <a 
                    target="_blank" 
                    title="@cumbiaparatodxs" 
                    href="https://www.tiktok.com/@cumbiaparatodxs?refer=embed"
                >
                    @cumbiaparatodxs
                </a> LA DOCTORA CUMBIA 😻 Venite a bailar la verdadera cumbia, en el Mercedes Sosa, España y Colón, Avellaneda. . . . . <a title="cumbia" target="_blank" href="https://www.tiktok.com/tag/cumbia?refer=embed">#cumbia</a> <a title="fiesta" target="_blank" href="https://www.tiktok.com/tag/fiesta?refer=embed">#fiesta</a> <a title="420" target="_blank" href="https://www.tiktok.com/tag/420?refer=embed">#420</a> <a title="avellaneda" target="_blank" href="https://www.tiktok.com/tag/avellaneda?refer=embed">#avellaneda</a> <a title="zonasur" target="_blank" href="https://www.tiktok.com/tag/zonasur?refer=embed">#zonasur</a> <a target="_blank" title="♬ sonido original - cumbiaparatodxs" href="https://www.tiktok.com/music/sonido-original-7449909755915291397?refer=embed">♬ sonido original - cumbiaparatodxs</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  )
}

export default TikTok
import React, { useEffect } from "react";
import gsap from "gsap";
function MyComponent() {
  useEffect(() => {
    var tl = gsap.timeline({
      // Configuration options
    });

    tl.to(".element", {
      duration: 1,
      opacity: 1,
      y: 100,
      ease: "power2.inOut",
    });
  }, []);

  return <div className="element">This element will be animated.</div>;
}

export default MyComponent;

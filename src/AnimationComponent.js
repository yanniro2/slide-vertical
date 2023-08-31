import React, { useEffect } from "react";
import gsap from "gsap";

function AnimationComponent() {
  useEffect(() => {
    var tl = gsap.timeline({
      // Configuration options
    });

    tl.set("#est", { opacity: 0, y: 1800 });
    // ... continue porting your animation logic
  }, []);

  return <div>Animation Component</div>;
}

export default AnimationComponent;

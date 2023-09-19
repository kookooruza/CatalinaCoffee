gsap.from("#animationOne", {scrollTrigger: "#animationOne", duration: 2, x:'-20', ease:"power4.out", opacity:0,scrub: true})
gsap.from("#animationTwo", {scrollTrigger: "#animationTwo", duration: 2, x:'20', ease:"power4.out", opacity:0, scrub: true})

gsap.from ("#animationThree", {scrollTrigger: "#animationThree", duration: 1.5, opacity:0, scrub: true})
gsap.from ("#animationFour", {scrollTrigger: "#animationFour", x:"-50", duration: 1.5, opacity:0, stagger:0.2, scrub: true})
gsap.from ("#animationFive", {scrollTrigger: "#animationFive", x:"50", duration: 1, opacity:0, scrub: true})
gsap.from ("#animationSix", {scrollTrigger: "#animationSix", duration: 1.5, opacity:0, scrub: true})
gsap.from ("#animationSeven", {scrollTrigger: "#animationSeven", duration: 2.5, opacity:0, scrub: true})

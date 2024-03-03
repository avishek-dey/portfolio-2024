// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".scroller", {
  y: 50,
  duration: 1,
  repeat: -1,
  yoyo: true,
});

// gsap.from(".section-1 h1", {
//   y: 100,
//   duration: 0.5,
//   opacity: 0,
// });

// gsap.from(".section-1 h4", {
//   y: -100,
//   duration: 0.5,
//   opacity: 0,
// });

// gsap.to(".section-1 h1", {
//   rotationX: "35deg",
//   duration: 5,
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: "h1",
//     // markers:true,
//     scrub: true,
//     start: "top 50%",
//     end: "bottom 20%",
//   },
// });

var bar = document.querySelectorAll("#control");

gsap.to(bar, {
  paddingRight: "0px",
  duration: 2,
  ease: "power2",
  scrollTrigger: {
    scroller: ".main",
    trigger: "#control",
    // markers:true,
    start: "top 80%",
    end: "bottom 20%",
  },
});

const numberElement = document.querySelectorAll("#number");

gsap.to(numberElement, {
  duration: 2, // Animation duration in seconds
  innerHTML: 99, // The final number to display
  roundProps: "innerHTML", // Round the number for whole values
  ease: "power2.out",
  scrollTrigger: {
    scroller: ".main",
    trigger: "#control",
    // markers:true,
    start: "top 80%",
    end: "bottom 20%",
  }, // Easing function
});

var title = document.querySelector(".text");

// gsap.from(title, {
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   ease: "power2",
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: ".section-2",
//     // markers:true,
//     start: "top 40%",
//     end: "bottom 20%",
//   },
// });

var card = document.querySelectorAll(".card-group");

// gsap.from(card, {
//   scale: 1.5,
//   rotationX: "-35deg",
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.1,
//   ease: "power2",
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: ".section-3",
//     // scrub: true,
//     // markers: true,
//     start: "top 40%",
//     end: "bottom 80%",
//   },
// });

gsap.from(".section-5 card", {
  rotationX: "35deg",
  duration: 5,
  scrollTrigger: {
    scroller: ".main",
    trigger: "card",
    // markers:true,
    scrub: true,
    start: "top 50%",
    end: "bottom 20%",
  },
});

// // Get the div element you want to move
// var divToMove = document.getElementById("myCursor");

// // Add an event listener to track mouse movement
// document.addEventListener("mousemove", function (event) {
//   // Calculate the position of the div with a little delay
//   var newX = event.clientX + 20; // Adding 10 for the delay
//   var newY = event.clientY + 20; // Adding 10 for the delay

//   // Set the new position of the div
//   divToMove.style.left = newX + -20 + "px";
//   divToMove.style.top = newY + -20 + "px";
// });

// ticker animation

var words = [
  " Design ",
  " Developement ",
  "Illustration",
  "Code",
  "Branding",
  "Graphic Design",
  " Print Media ",
  " Frontend ",
  "UI/UX",
  "Interface",
  "Experience",
  " Design ",
  " Developement ",
  "Illustration",
  "Code",
  "Branding",
  "Graphic Design",
  " Print Media ",
  " Frontend ",
  "UI/UX",
  "Interface",
  "Experience",
  " Design ",
  " Developement ",
  "Illustration",
  "Code",
  "Branding",
  "Graphic Design",
  " Print Media ",
  " Frontend ",
  "UI/UX",
  "Interface",
  "Experience",
  " Design ",
  " Developement ",
  "Illustration",
  "Code",
  "Branding",
  "Graphic Design",
  " Print Media ",
  " Frontend ",
  "UI/UX",
  "Interface",
  "Experience",
  " Design ",
  " Developement ",
  "Illustration",
  "Code",
  "Branding",
  "Graphic Design",
  " Print Media ",
  " Frontend ",
  "UI/UX",
  "Interface",
  "Experience",
  " Design ",
  " Developement ",
  "Illustration",
  "Code",
  "Branding",
  "Graphic Design",
  " Print Media ",
  " Frontend ",
  "UI/UX",
  "Interface",
  "Experience",
];
var sep = "●";

// var dot = document.getElementById("output")

var print = (dot = innerHTML = `<h2> ● </h2>`);

var separator = document.createElement("div");
var stringsOnly = words.filter(function (element) {
  return typeof element === "string";
});

var concatenatedString = stringsOnly.join(print);
document.querySelector(
  "#ticker"
).innerHTML = `<div class="text">${concatenatedString}</div>`;

var textColor = "Black"; // Set the color you want

concatenatedString.style.color = textColor; // Apply the color to the element

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

function animateCard() {
  // Your GSAP animation code for card
  gsap.from(card, {
    scale: 1.5,
    rotationX: "-35deg",
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2",
    scrollTrigger: {
      scroller: ".main",
      trigger: ".section-3",
      // scrub: true,
      // markers: true,
      start: "top 40%",
      end: "bottom 80%",
    },
  });

  gsap.from(title, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2",
    scrollTrigger: {
      scroller: ".main",
      trigger: ".section-2",
      // markers:true,
      start: "top 40%",
      end: "bottom 20%",
    },
  });

  gsap.from(".section-1 h1", {
    y: 100,
    duration: 0.5,
    opacity: 0,
  });

  gsap.from(".section-1 h4", {
    y: -100,
    duration: 0.5,
    opacity: 0,
  });

  gsap.to(".section-1 h1", {
    rotationX: "35deg",
    duration: 5,
    scrollTrigger: {
      scroller: ".main",
      trigger: "h1",
      // markers:true,
      scrub: true,
      start: "top 50%",
      end: "bottom 20%",
    },
  });
}

function handleResize() {
  if (window.innerWidth <= 480) {
    // Do nothing or apply specific styles for small screens
    // You can also choose to remove existing animations if needed
  } else {
    animateCard(); // Apply animation for larger screens
  }
}

handleResize(); // Initial check

window.addEventListener("resize", handleResize);

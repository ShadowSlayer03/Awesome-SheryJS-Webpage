function initLocomotive(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
initLocomotive();

const tl = gsap.timeline();

tl.from(".nav-links",{
    duration: 1,
    y: 20,
    stagger: 0.2,
    opacity: 0,
    ease: Power3,
})

Shery.textAnimate("#headings h2", {
    style: 2,
    y: 10,
    delay: 3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  });


tl.from("#img-and-subtext",{
    stagger: 0.3,
    opacity: 0,
    delay: 0.2,
    duration: 2,
    y: 50,
    ease : Expo,
  },"ani")  

tl.from("#img-and-subtext img",{
    scale: 0.005,
    opacity: 0,
    duration: 2,
    ease: Expo.easenInOut,
},"ani")


tl.from(".anim2",{
    stagger: 0.3,
    opacity: 0,
    delay: 0.2,
    duration: 2,
    y: 50,
    ease : Expo,
  },"ani1")

tl.from("#sustainability img",{
    scale: 0.005,
    duration: 2,
    ease: Expo.easenInOut,
},"ani1")  

Shery.imageEffect("#img-and-subtext img", {
    style: 1 /*OR 5 for different variant */,
    config: {"a":{"value":1,"range":[0,30]},"b":{"value":-0.76,"range":[-1,1]},"zindex":{"value":"5","range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });

Shery.imageEffect("#sustainability img", {
    style: 2,
    config: {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":3},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"5","range":[-9999999,9999999]},"aspect":{"value":0.6826388888888889},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

//------------------------- 
const tl1 = gsap.timeline({
    scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 50%",
    end: "bottom 0%",
    //markers: true,
}});

tl1.from("#page2 h2",{
    x: -50,
    duration: 1,
    delay: 0.1,
    opacity: 0,
})

tl1.from("#p2-para",{
    x: 50,
    stagger: 0.3,
    duration: 1,
    delay: 0.1,
    opacity: 0,
})

tl1.from(".p2-para-span",{
    scale: 0.5,
    duration: 1.2,
    stagger: 0.2,
})

// ----------------------------
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pictures",
        scroller: "#main",
        start: "top 60%",
        end: "bottom 0%",
        //markers: true,
    }
})

tl2.from("#pics-left",{
    y: 50,
    scale: 0.0005,
    opacity: 0,
    duration: 2.5,
    stagger: 0.4,
})

tl2.from("#pics-right",{
    y: 50,
    scale: 0.0005,
    opacity: 0,
    duration: 2.5,
    stagger: 0.4,
})


Shery.imageEffect("#pics-left img", {
    style: 3,
    config: {"uFrequencyX":{"value":23.66,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20},"zindex":{"value":"5","range":[-9999999,9999999]},"aspect":{"value":0.7664194915254238},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    //debug: true,
  });

Shery.imageEffect("#pics-right img", {
    style: 3,
    config: {"uFrequencyX":{"value":16.79,"range":[0,100]},"uFrequencyY":{"value":40.46,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":30},"zindex":{"value":"5","range":[-9999999,9999999]},"aspect":{"value":0.6748251714334134},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.5,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    //debug: true,
})


Shery.imageEffect("#p3-left", {
    style: 3,
    config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":21.68},"zindex":{"value":"5","range":[-9999999,9999999]},"aspect":{"value":1.4283549282611556},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2],"_gsap":{"id":48}},"discard_threshold":{"value":0.41,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.11,"range":[0,2]},"noise_scale":{"value":40.46,"range":[0,100]}},
    // debug: true,
    gooey: true,
  });


  let p4Button = document.querySelector("#page4 button");
  let p4Video = document.querySelector("#page4 video");
  let p4H3 = document.querySelector("#page4 h3");
  let audio = document.querySelector("#page4 audio");
    
  p4Button.addEventListener('mouseenter', () => {
    console.log('Mouse entered');
    p4Video.style.opacity = "1";
    p4Video.play();
    p4H3.style.color = "#fff";
  });
  
  p4Button.addEventListener('mouseleave', () => {
      console.log('Mouse left');
      p4Video.style.opacity = "0";
      p4Video.pause();
      p4H3.style.color = "#000";
  });
  

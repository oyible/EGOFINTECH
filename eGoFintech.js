// let t1 = gsap.timeline();

// ti.timeline(default{duration: 1.2s, ease: 1s, reapet: 4s})

var welimage = gsap.timeline({default: {duration: 1.5, delay:1}})

welimage.to(".welcomeanim", {x:20, repeat: -1, yoyo:true})

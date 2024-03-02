gsap.from('#nav #nav-left,#nav #nav-right',{
  scale: 0,
  duration: 1,
  delay: 0.5
})
gsap.from("#nav #nav-center",{
  y: -100,
  duration: 1,
  dealy: 0.5
})
  gsap.from("#img1, #img2, #img3, #imgfront #img4",{
    scale: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.3,
    rotate: 0,
  })
  gsap.from('#imgfront h2',{
    opacity: 0,
    delay: 3.5,
    duration: 0.5
  })


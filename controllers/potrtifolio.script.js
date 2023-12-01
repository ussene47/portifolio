new TypeIt("#destacado", {
    strings: ["Desenvolvedor de Software"],
    speed: 30,
    waitUntilVisible: true,
    loop:true
  }).go();



 // Animation

  const Observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show")
      }else{
        entry.target.classList.remove("show")
      }
    })
  })



  const myElement =document.querySelectorAll(".hidden")
  myElement.forEach((obs)=>{Observer.observe(obs)})
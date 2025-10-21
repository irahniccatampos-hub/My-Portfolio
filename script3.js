document.addEventListener('DOMContentLoaded', function() {

    const video1 = document.getElementById('projectVideo1');
    const video2 = document.getElementById('projectVideo2');
    const video3 = document.getElementById('projectVideo3');

    const sideBar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon')

    const hoverSign = document.querySelector('.hover-sign');

    const videoList =[video1, video2, video3].filter(v => v);

    videoList.forEach (function(video){
        video.addEventListener("mouseover", function(){
            video.play()
            if (hoverSign) {
                hoverSign.classList.add("active")
            }
        })
        video.addEventListener("mouseout", function(){
            video.pause();
            if (hoverSign) {
                hoverSign.classList.remove("active")
            }
        })
    })

    if (sideBar && menu && closeIcon) {
        menu.addEventListener("click", function() {
            console.log("Menu clicked! Toggling sidebar."); 
            sideBar.classList.remove("close-sidebar");
            sideBar.classList.add("open-sidebar");
        });

        closeIcon.addEventListener("click", function() {
            console.log("Close icon clicked! Toggling sidebar.");
            sideBar.classList.remove("open-sidebar");
            sideBar.classList.add("close-sidebar");
        });
    }
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

  
 
 
  const animatedItems = document.querySelectorAll("[data-animate]");

  function handleScroll() {
    animatedItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight - 100 && rect.bottom > 100;

      if (inView) {
        item.classList.add("visible");
      } else {
        item.classList.remove("visible");
      }
    });

    // Animate the timeline line fill based on scroll position
    const timeline = document.querySelector(".timeline");
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollPercent = Math.min(
      1,
      Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
    );

    document.documentElement.style.setProperty("--line-fill", scrollPercent);
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();






});
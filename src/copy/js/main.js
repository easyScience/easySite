(function() {

  "use strict"

  // Onload

  window.onload = function() {
    var loadingScreen = document.getElementById("_loading-screen")
    loadingScreen.style.transition = "0.5s opacity"
    loadingScreen.style.opacity = 0
    window.setTimeout(function() {
      loadingScreen.classList.replace("block", "hidden")
    }, 500)
  }

  // Onscroll

  window.onscroll = function() {

    var loadingScreen = document.getElementById("_loading-screen")
    var header = document.getElementById("_header")
    var sticky = header.offsetTop
    if (window.pageYOffset > sticky) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        header.classList.remove("_sticky_light")
        header.classList.add("_sticky_dark")
      } else {
        header.classList.remove("_sticky_dark")
        header.classList.add("_sticky_light")
      }
    } else {
      header.classList.remove("_sticky_dark")
      header.classList.remove("_sticky_light")
    }

    /*
    var backToTop = document.querySelector("._back-to-top")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.style.display = "flex"
    } else {
        backToTop.style.display = "none"
    }
    */
  }

  // Scroll animation
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease-out-quad', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  })

  // Theme switch

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById('_light_theme_icon').classList.replace('hidden', 'inline')
    document.getElementById('_dark_theme_icon').classList.replace('inline', 'hidden')
    if (window.pageYOffset > document.getElementById("_header").offsetTop) {
      document.getElementById("_header").classList.replace("_sticky_light", "_sticky_dark")
    }
    document.getElementById('_hero-video').poster = "assets/img/hero_dark.png"
    document.getElementById('_hero-poster').src = "assets/img/hero_dark.png"
  } else {
    document.getElementById('_dark_theme_icon').classList.replace('hidden', 'inline')
    document.getElementById('_light_theme_icon').classList.replace('inline', 'hidden')
    if (window.pageYOffset > document.getElementById("_header").offsetTop) {
      document.getElementById("_header").classList.replace("_sticky_dark", "_sticky_light")
    }
    document.getElementById('_hero-video').poster = "assets/img/hero_light.png"
    document.getElementById('_hero-poster').src = "assets/img/hero_light.png"
  }

  document.getElementById('_theme_switch_button').addEventListener('click', function() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      document.getElementById('_light_theme_icon').classList.replace('inline', 'hidden')
      document.getElementById('_dark_theme_icon').classList.replace('hidden', 'inline')
      if (window.pageYOffset > document.getElementById("_header").offsetTop) {
        document.getElementById("_header").classList.replace("_sticky_dark", "_sticky_light")
      }
      document.getElementById('_hero-video').poster = "assets/img/hero_light.png"
      document.getElementById('_hero-poster').src = "assets/img/hero_light.png"
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      document.getElementById('_dark_theme_icon').classList.replace('inline', 'hidden')
      document.getElementById('_light_theme_icon').classList.replace('hidden', 'inline')
      if (window.pageYOffset > document.getElementById("_header").offsetTop) {
        document.getElementById("_header").classList.replace("_sticky_light", "_sticky_dark")
      }
      document.getElementById('_hero-video').poster = "assets/img/hero_dark.png"
      document.getElementById('_hero-poster').src = "assets/img/hero_dark.png"
    }
  })

  // Hero play

  document.getElementById('_hero-play-button').addEventListener('click', function() {
    document.getElementById('_hero-play-button').classList.replace('visible', 'invisible')
    document.getElementById('_hero-poster').classList.replace('visible', 'invisible')
    document.getElementById('_hero-video').classList.replace('invisible', 'visible')
    document.getElementById('_hero-video').play()
  })

  document.getElementById('_hero-video').onended = function() {
    document.getElementById('_hero-play-button').classList.replace('invisible', 'visible')
    document.getElementById('_hero-poster').classList.replace('invisible', 'visible')
    document.getElementById('_hero-video').classList.replace('visible', 'invisible')
  }

})()

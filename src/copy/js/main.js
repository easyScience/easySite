(function() {

  "use strict"

  // Scroll animation
  let wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,      // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  })
  wow.init()

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

  // Elements
  let _hero_video = document.getElementById('_hero-video') || document.createElement('video')
  let _hero_poster = document.getElementById('_hero-poster') || document.createElement('img')
  let _hero_play_button = document.getElementById('_hero-play-button') || document.createElement('button')

  // Theme switch

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById('_light_theme_icon').classList.replace('hidden', 'inline')
    document.getElementById('_dark_theme_icon').classList.replace('inline', 'hidden')
    if (window.pageYOffset > document.getElementById("_header").offsetTop) {
      document.getElementById("_header").classList.replace("_sticky_light", "_sticky_dark")
    }
    _hero_video.poster = "assets/img/hero_dark.png"
    _hero_poster.src = "assets/img/hero_dark.png"
  } else {
    document.getElementById('_dark_theme_icon').classList.replace('hidden', 'inline')
    document.getElementById('_light_theme_icon').classList.replace('inline', 'hidden')
    if (window.pageYOffset > document.getElementById("_header").offsetTop) {
      document.getElementById("_header").classList.replace("_sticky_dark", "_sticky_light")
    }
    _hero_video.poster = "assets/img/hero_light.png"
    _hero_poster.src = "assets/img/hero_light.png"
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
      _hero_video.poster = "assets/img/hero_light.png"
      _hero_poster.src = "assets/img/hero_light.png"
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      document.getElementById('_dark_theme_icon').classList.replace('inline', 'hidden')
      document.getElementById('_light_theme_icon').classList.replace('hidden', 'inline')
      if (window.pageYOffset > document.getElementById("_header").offsetTop) {
        document.getElementById("_header").classList.replace("_sticky_light", "_sticky_dark")
      }
      _hero_video.poster = "assets/img/hero_dark.png"
      _hero_poster.src = "assets/img/hero_dark.png"
    }
  })

  // Hero play

  _hero_play_button.addEventListener('click', function() {
    _hero_play_button.classList.replace('visible', 'invisible')
    _hero_poster.classList.replace('visible', 'invisible')
    _hero_video.classList.replace('invisible', 'visible')
    _hero_video.play()
  })

  _hero_video.onended = function() {
    _hero_play_button.classList.replace('invisible', 'visible')
    _hero_poster.classList.replace('invisible', 'visible')
    _hero_video.classList.replace('visible', 'invisible')
  }

})()

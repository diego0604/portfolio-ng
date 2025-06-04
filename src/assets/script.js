document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 50,
  })

  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")
  const navLinksItems = document.querySelectorAll(".nav-links li a")
  const header = document.querySelector("header")
  const sections = document.querySelectorAll("section")
  const tabBtns = document.querySelectorAll(".tab-btn")
  const skillCategories = document.querySelectorAll(".skill-category")
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")
  const contactForm = document.getElementById("contactForm")
  const mountainBgs = document.querySelectorAll(".mountain-bg")
  const borderedImages = document.querySelectorAll(".bordered-image")
  const themeToggleDesktop = document.querySelector(".theme-toggle-desktop")
  const themeToggleMobile = document.querySelector(".theme-toggle-mobile")

  const body = document.body

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
    hamburger.setAttribute("aria-expanded", hamburger.classList.contains("active"))
  })

  themeToggleDesktop.addEventListener("click", () => {
    console.log(body.classList);
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light")
      localStorage.setItem("theme", "light")
    } else {
      body.classList.replace("light", "dark")
      localStorage.setItem("theme", "dark")
    }
  })

  themeToggleMobile.addEventListener("click", () => {
    console.log(body.classList);
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light")
      localStorage.setItem("theme", "light")
    } else {
      body.classList.replace("light", "dark")
      localStorage.setItem("theme", "dark")
    }
  })


  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    body.classList.replace("light", savedTheme)
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.replace("light", "dark")
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        body.classList.replace("light", "dark")
      } else {
        body.classList.replace("dark", "light")
      }
    }
  })

  navLinksItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
      hamburger.setAttribute("aria-expanded", "false")
    })
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  function setActiveLink() {
    let current = ""
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (scrollPosition >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinksItems.forEach((item) => {
      item.classList.remove("active")
      item.setAttribute("aria-current", "false")
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active")
        item.setAttribute("aria-current", "page")
      }
    })
  }

  window.addEventListener("scroll", setActiveLink)

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabBtns.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })
      this.classList.add("active")
      this.setAttribute("aria-selected", "true")

      skillCategories.forEach((category) => {
        category.classList.remove("active")
        category.setAttribute("hidden", "")
      })

      const target = this.getAttribute("data-target")
      const activePanel = document.getElementById(target)
      activePanel.classList.add("active")
      activePanel.removeAttribute("hidden")

      animateSkillBars(activePanel)
    })
  })

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })
      this.classList.add("active")
      this.setAttribute("aria-selected", "true")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, 100)
        } else {
          const categories = card.getAttribute("data-category").split(" ")
          if (categories.includes(filter)) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        }
      })
    })
  })

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (name && subject && message) {
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
    } else {
      alert("Please fill in all fields.")
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  function animateSkillBars(container = document) {
    const skillBars = container.querySelectorAll(".skill-progress")

    skillBars.forEach((bar) => {
      const barWidth = bar.style.width
      bar.style.width = "0"

      setTimeout(() => {
        bar.style.width = barWidth
      }, 300)
    })
  }

  const skillsSection = document.querySelector("#skills")
  let skillsAnimated = false

  function checkSkillsVisibility() {
    if (!skillsAnimated) {
      const sectionTop = skillsSection.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight - 100) {
        animateSkillBars(document.querySelector(".skill-category.active"))
        skillsAnimated = true
      }
    }
  }

  window.addEventListener("scroll", checkSkillsVisibility)

  function updateParallax() {
    const scrollPosition = window.pageYOffset

    mountainBgs.forEach((bg) => {
      const parent = bg.parentElement
      const parentOffset = parent.offsetTop
      const parentHeight = parent.offsetHeight

      if (scrollPosition + window.innerHeight > parentOffset && scrollPosition < parentOffset + parentHeight) {
        const relativePosition = (scrollPosition - parentOffset) * 0.3
        bg.style.backgroundPosition = `center ${relativePosition}px`
      }
    })
  }

  window.addEventListener("scroll", updateParallax)

  function checkBorderedImages() {
    borderedImages.forEach((image) => {
      const imageTop = image.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (imageTop < windowHeight - 100) {
        image.classList.add("animate-border")
      }
    })
  }

  window.addEventListener("scroll", checkBorderedImages)

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.03)"
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = ""
      this.style.boxShadow = ""
    })
  })

  function revealOnScroll() {
    const elements = document.querySelectorAll(".project-card, .skill-item, .about-content, .contact-content")

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("revealed")
      }
    })
  }

  window.addEventListener("scroll", revealOnScroll)

  function initPage() {
    setActiveLink()
    updateParallax()
    checkBorderedImages()
    checkSkillsVisibility()
    revealOnScroll()

    if (window.scrollY < 100) {
      setTimeout(() => {
        const heroText = document.querySelector(".hero-text")
        const heroImage = document.querySelector(".hero-image")

        if (heroText) heroText.classList.add("animated")
        if (heroImage) heroImage.classList.add("animated")
      }, 500)
    }
  }

  initPage()

  window.addEventListener("resize", () => {
    AOS.refresh()
  })
})


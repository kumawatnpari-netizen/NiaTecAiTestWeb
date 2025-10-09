// Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Mobile Dropdown Toggle
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const dropdownLink = dropdown.querySelector(".nav-link")
  const dropdownContent = dropdown.querySelector(".dropdown-content")
  
  if (dropdownLink && dropdownContent) {
    dropdownLink.addEventListener("click", (e) => {
      // Only toggle on mobile (screen width < 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault()
        dropdown.classList.toggle("active")
      }
    })
  }
})

// Close mobile menu when clicking on a non-dropdown link
document.querySelectorAll(".nav-link").forEach((link) => {
  // Skip dropdown parent links
  if (!link.parentElement.classList.contains("dropdown")) {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  }
})

// Close dropdown when clicking on dropdown item
document.querySelectorAll(".dropdown-content a").forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
    // Close all dropdowns
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active")
    })
  })
})

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact Form Submission
// const contactForm = document.getElementById("contact-form")
// const successModal = document.getElementById("success-modal")
// const closeModal = document.getElementById("close-modal")

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault()

//   // Simulate form submission (replace with actual Formspree integration)
//   setTimeout(() => {
//     successModal.classList.add("active")
//     contactForm.reset()
//   }, 1000)
// })

// closeModal.addEventListener("click", () => {
//   successModal.classList.remove("active")
// })

// // Close modal when clicking outside
// successModal.addEventListener("click", (e) => {
//   if (e.target === successModal) {
//     successModal.classList.remove("active")
//   }
// })
// ✅ Contact Form Submission (Formspree + Your Thank You Modal)
const contactForm = document.getElementById("contact-form");
const successModal = document.getElementById("success-modal");
const closeModalBtn = document.getElementById("close-modal");

if (contactForm && successModal && closeModalBtn) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        // ✅ Yaha tumhara Thank You modal hi dikh raha hai
        successModal.classList.add("active");
        contactForm.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Error submitting form!");
    }
  });

  // ✅ Close modal button
  closeModalBtn.addEventListener("click", () => {
    successModal.classList.remove("active");
  });

  // ✅ Close modal when clicking outside
  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
      successModal.classList.remove("active");
    }
  });
}


// Chat Widget Functionality
const chatToggle = document.getElementById("chat-toggle")
const chatWindow = document.getElementById("chat-window")
const chatClose = document.getElementById("chat-close")
const chatInputField = document.getElementById("chat-input-field")
const chatSend = document.getElementById("chat-send")
const chatMessages = document.getElementById("chat-messages")

chatToggle.addEventListener("click", () => {
  chatWindow.classList.toggle("active")
})

chatClose.addEventListener("click", () => {
  chatWindow.classList.remove("active")
})



// // Chat bot responses
// const botResponses = {
//   products: "We offer SmartSanchalan (AI PDF Editor) and InterviewMate (AI Interview Bot). Which one interests you?",
//   pricing:
//     "Our pricing is designed to be affordable for Indian businesses. Please contact us for a custom quote based on your needs.",
//   contact:
//     "You can reach us through the contact form on this page, or email us directly. We'll get back to you within 24 hours!",
//   capabilities:
//     "We specialize in AI & ML Solutions, NLP & Chatbots, OCR & PDF Automation, and Software Development. What specific capability interests you?",
//   demo: 'I\'d be happy to arrange a demo! Please fill out the contact form with your details and mention "Demo Request" in your message.',
//   support: "We provide 24x7 AI bot support for all our enterprise clients. Our support team is always ready to help!",
//   // neha: "Hello Madam ji",
//   // pari: "Hello Sir",
//   default:
//     "Thank you for your message! Our team will get back to you soon. You can also fill out the contact form for more detailed inquiries.",
//   // General
//   hello: "Hi! 👋 Welcome to NiaTec. How can I assist you today?",
//   hi: "Hello! I'm NiaTec Bot. Do you want to know about our products or services?",
//   help: "Sure! Tell me what you need help with: Products, Capabilities, Pricing, or Contact.",

//   // Products
//   products: "We currently offer two products: SmartSanchalan (AI PDF Editor) and InterviewMate (AI Interview Assistant). Which one would you like to explore?",
//   smartsanchalan: "SmartSanchalan is our AI-powered PDF editor with OCR, content extraction, and real-time collaboration tools.",
//   interviewmate: "InterviewMate is an AI interview assistant that analyzes candidates with NLP, sentiment analysis, and automated scoring.",

//   // Capabilities
//   capabilities: "Our core capabilities include AI & ML Solutions, NLP & Chatbots, OCR & PDF Automation, and Software/App Development.",

//   // Industries
//   industries: "We work with FinTech and EdTech industries, building AI tools tailored for them.",

//   // Enterprise
//   enterprise: "NiaTec Enterprise provides scalable, enterprise-grade AI solutions with secure and affordable pricing.",

//   // Pricing
//   pricing: "Our pricing is designed to be affordable for Indian businesses. Please contact us for a custom quote based on your needs.",

//   // Contact
//   contact: "You can reach us through the contact form on this page, or email us directly at contact@niatec.com.",
// }



// const keywordGroups = {
//   help: [
//     "help",
//     "madad",
//     "madad chahiye",
//     "mujhe apki help chahiye",
//     "mujhe apki madad chahiye",
//     "please help"
//   ]
// }

// // ✅ sirf ek hi function rakho
// function getBotResponse(userMessage) {
//   const message = userMessage.toLowerCase().trim()

//   // Check special keywords
//   for (const [key, keywords] of Object.entries(keywordGroups)) {
//     for (const word of keywords) {
//       if (message.includes(word)) {
//         if (key === "help") {
//           return "Sure, I'm here to help! Please tell me what you need."
//         }
//       }
//     }
//   }

//   // Check normal responses
//   for (const [key, response] of Object.entries(botResponses)) {
//     if (message.includes(key)) {
//       return response
//     }
//   }

//   // Default response
//   return botResponses.default
// }






// function addMessage(message, isUser = false) {
//   const messageDiv = document.createElement("div")
//   messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`
//   messageDiv.innerHTML = `<p>${message}</p>`
//   chatMessages.appendChild(messageDiv)
//   chatMessages.scrollTop = chatMessages.scrollHeight
// }

// function getBotResponse(userMessage) {
//   const message = userMessage.toLowerCase().trim()

//   for (const [key, response] of Object.entries(botResponses)) {
//     if (message.includes(key)) {
//       return response
//     }
//   }

//   return botResponses.default
// }

// function sendMessage() {
//   const message = chatInputField.value.trim()
//   if (message) {
//     addMessage(message, true)
//     chatInputField.value = ""

//     // Simulate bot typing delay
//     setTimeout(() => {
//       const botResponse = getBotResponse(message)
//       addMessage(botResponse, false)
//     }, 1000)
//   }
// }

// chatSend.addEventListener("click", sendMessage)

// chatInputField.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     sendMessage()
//   }
// })

// Chat bot responses
const botResponses = {
  products: "We offer SmartSanchalan (AI PDF Editor) and InterviewMate (AI Interview Bot). Which one interests you?",
  pricing: "Our pricing is designed to be affordable for Indian businesses. Please contact us for a custom quote based on your needs.",
  contact: "You can reach us through the contact form on this page, or email us directly. We'll get back to you within 24 hours!",
  capabilities: "We specialize in AI & ML Solutions, NLP & Chatbots, OCR & PDF Automation, and Software Development. What specific capability interests you?",
  demo: "I'd be happy to arrange a demo! Please fill out the contact form with your details and mention 'Demo Request' in your message.",
  support: "We provide 24x7 AI bot support for all our enterprise clients. Our support team is always ready to help!",
  default: "Thank you for your message! Our team will get back to you soon. You can also fill out the contact form for more detailed inquiries.",

  // General
  hello: "Hi! 👋 Welcome to NiaTec. How can I assist you today?",
  hi: "Hello! I'm NiaTec Bot. Do you want to know about our products or services?",
  help: "Sure! Tell me what you need help with: Products, Capabilities, Pricing, or Contact.",

  // Products
  smartsanchalan: "SmartSanchalan is our AI-powered PDF editor with OCR, content extraction, and real-time collaboration tools.",
  YesBuddy: "YesBuddy is an AI interview assistant that analyzes candidates with NLP, sentiment analysis, and automated scoring.",

  // Industries
  industries: "We work with FinTech and EdTech industries, building AI tools tailored for them.",

  // Enterprise
  enterprise: "NiaTec Enterprise provides scalable, enterprise-grade AI solutions with secure and affordable pricing."
}


// extera keyword ---
const keywordGroups = {
  hello: [
    "Hello My name is",
    "Hello My name is",
    "Hello Mera naam",
  ],
  // me: [
  //   "im parikshit",
  //   "pari",
  //   "me parikshit kumawat",
  //   "me pari",
  // ],

}

// ✅ Only ONE function
function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase().trim()

  // Check keyword groups
  for (const [key, keywords] of Object.entries(keywordGroups)) {
    for (const word of keywords) {
      if (message.includes(word)) {
        if (key === "hello") {
          return "Hi! 👋 Welcome to NiaTec. How can I assist you today?"
        }
      }
    }
  }

  // Check normal responses
  for (const [key, response] of Object.entries(botResponses)) {
    if (message.includes(key)) {
      return response
    }
  }


  // Default
  return botResponses.default
}

// ✅ Message functions
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`
  messageDiv.innerHTML = `<p>${message}</p>`
  chatMessages.appendChild(messageDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function sendMessage() {
  const message = chatInputField.value.trim()
  if (message) {
    addMessage(message, true)
    chatInputField.value = ""

    setTimeout(() => {
      const botResponse = getBotResponse(message)
      addMessage(botResponse, false)
    }, 1000)
  }
}

chatSend.addEventListener("click", sendMessage)
chatInputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage()
  }
})




// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe all sections for animations
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})

// Add pulse animation to glow boxes
document.querySelectorAll(".glow-box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.classList.add("pulse")
  })

  box.addEventListener("mouseleave", () => {
    box.classList.remove("pulse")
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.98)"
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.95)"
  }
})

// Initialize animations on page load
window.addEventListener("load", () => {
  const heroElement = document.querySelector(".hero")
  if (heroElement) {
    heroElement.classList.add("fade-in-up")
  }
})

// Demo Modal Functionality
// Function to open modal
function openModal(modal) {
  if (modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

// Function to close modal
function closeModal(modal) {
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// SmartSanchalan Modal Elements
const smartsanchalanBtn = document.getElementById("smartsanchalan-demo-btn")
const smartsanchalanModal = document.getElementById("smartsanchalan-modal")
const smartsanchalanModalClose = document.getElementById("smartsanchalan-modal-close")

// InterviewMate Modal Elements
const interviewmateBtn = document.getElementById("interviewmate-demo-btn")
const interviewmateModal = document.getElementById("interviewmate-modal")
const interviewmateModalClose = document.getElementById("interviewmate-modal-close")

// Muneemjii Modal Elements
const muneemjiiBtn = document.getElementById("muneemjii-demo-btn")
const muneemjiiModal = document.getElementById("muneemjii-modal")
const muneemjiiModalClose = document.getElementById("muneemjii-modal-close")

console.log("=== MODAL DEBUG INFO ===")
console.log("SmartSanchalan Button:", smartsanchalanBtn)
console.log("SmartSanchalan Modal:", smartsanchalanModal)
console.log("SmartSanchalan Close:", smartsanchalanModalClose)
console.log("InterviewMate Button:", interviewmateBtn)
console.log("InterviewMate Modal:", interviewmateModal)
console.log("InterviewMate Close:", interviewmateModalClose)
console.log("Muneemjii Button:", muneemjiiBtn)
console.log("Muneemjii Modal:", muneemjiiModal)
console.log("Muneemjii Close:", muneemjiiModalClose)
console.log("========================")

// SmartSanchalan Modal - Open
if (smartsanchalanBtn && smartsanchalanModal) {
  smartsanchalanBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("SmartSanchalan button clicked!")
    openModal(smartsanchalanModal)
  })
}

// SmartSanchalan Modal - Close button
if (smartsanchalanModalClose && smartsanchalanModal) {
  smartsanchalanModalClose.addEventListener("click", () => {
    closeModal(smartsanchalanModal)
  })
  
  // Keyboard accessibility for close button
  smartsanchalanModalClose.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      closeModal(smartsanchalanModal)
    }
  })
}

// SmartSanchalan Modal - Click outside to close
if (smartsanchalanModal) {
  smartsanchalanModal.addEventListener("click", (e) => {
    if (e.target === smartsanchalanModal) {
      closeModal(smartsanchalanModal)
    }
  })
}

// InterviewMate Modal - Open
if (interviewmateBtn && interviewmateModal) {
  interviewmateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("InterviewMate button clicked!")
    openModal(interviewmateModal)
  })
}

// InterviewMate Modal - Close button
if (interviewmateModalClose && interviewmateModal) {
  interviewmateModalClose.addEventListener("click", () => {
    closeModal(interviewmateModal)
  })
  
  // Keyboard accessibility for close button
  interviewmateModalClose.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      closeModal(interviewmateModal)
    }
  })
}

// InterviewMate Modal - Click outside to close
if (interviewmateModal) {
  interviewmateModal.addEventListener("click", (e) => {
    if (e.target === interviewmateModal) {
      closeModal(interviewmateModal)
    }
  })
}

// Muneemjii Modal - Open
if (muneemjiiBtn && muneemjiiModal) {
  muneemjiiBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Muneemjii button clicked!")
    openModal(muneemjiiModal)
  })
}

// Muneemjii Modal - Close button
if (muneemjiiModalClose && muneemjiiModal) {
  muneemjiiModalClose.addEventListener("click", () => {
    closeModal(muneemjiiModal)
  })
  
  // Keyboard accessibility for close button
  muneemjiiModalClose.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      closeModal(muneemjiiModal)
    }
  })
}

// Muneemjii Modal - Click outside to close
if (muneemjiiModal) {
  muneemjiiModal.addEventListener("click", (e) => {
    if (e.target === muneemjiiModal) {
      closeModal(muneemjiiModal)
    }
  })
}

// Close any open modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (smartsanchalanModal && smartsanchalanModal.classList.contains("active")) {
      closeModal(smartsanchalanModal)
    }
    if (interviewmateModal && interviewmateModal.classList.contains("active")) {
      closeModal(interviewmateModal)
    }
    if (muneemjiiModal && muneemjiiModal.classList.contains("active")) {
      closeModal(muneemjiiModal)
    }
    // Close lightbox if open
    const lightbox = document.getElementById("image-lightbox")
    if (lightbox && lightbox.classList.contains("active")) {
      closeLightbox()
    }
  }
})

// Image Lightbox Functionality
const lightbox = document.getElementById("image-lightbox")
const lightboxImage = document.getElementById("lightbox-image")
const lightboxClose = document.getElementById("lightbox-close")

// Function to open lightbox
function openLightbox(imageSrc, imageAlt) {
  if (lightbox && lightboxImage) {
    lightboxImage.src = imageSrc
    lightboxImage.alt = imageAlt || "Full screen view"
    lightbox.classList.add("active")
    document.body.classList.add("lightbox-open")
  }
}

// Function to close lightbox
function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove("active")
    document.body.classList.remove("lightbox-open")
    // Clear image after animation
    setTimeout(() => {
      if (lightboxImage) {
        lightboxImage.src = ""
      }
    }, 300)
  }
}

// Close lightbox when clicking the close button
if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox)
}

// Close lightbox when clicking outside the image
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })
}

// Add click event to all demo grid images
function initializeLightboxImages() {
  const demoGridItems = document.querySelectorAll(".demo-grid-item")
  
  demoGridItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img")
      if (img) {
        openLightbox(img.src, img.alt)
      }
    })
    
    // Make items keyboard accessible
    item.setAttribute("tabindex", "0")
    item.setAttribute("role", "button")
    item.setAttribute("aria-label", "Click to view full screen image")
    
    // Handle keyboard events
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        const img = item.querySelector("img")
        if (img) {
          openLightbox(img.src, img.alt)
        }
      }
    })
  })
}

// Initialize lightbox for images when modals are opened
const originalOpenModal = openModal
openModal = function(modal) {
  originalOpenModal(modal)
  // Small delay to ensure modal content is rendered
  setTimeout(() => {
    initializeLightboxImages()
  }, 100)
}

// Also initialize on page load in case images are already visible
window.addEventListener("load", () => {
  initializeLightboxImages()
})

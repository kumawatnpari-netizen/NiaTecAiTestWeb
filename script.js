// Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
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
const closeModal = document.getElementById("close-modal");

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
closeModal.addEventListener("click", () => {
  successModal.classList.remove("active");
});

// ✅ Close modal when clicking outside
successModal.addEventListener("click", (e) => {
  if (e.target === successModal) {
    successModal.classList.remove("active");
  }
});


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
  interviewmate: "InterviewMate is an AI interview assistant that analyzes candidates with NLP, sentiment analysis, and automated scoring.",

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
  document.querySelector(".hero").classList.add("fade-in-up")
})

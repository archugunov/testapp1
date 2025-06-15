import { Controller } from "@hotwired/stimulus"

// Modal controller for showing/hiding dialogs
export default class extends Controller {
  static targets = ["dialog", "backdrop", "closeButton"]
  static classes = ["open", "closing"]
  
  connect() {
    this.boundCloseOnEscape = this.closeOnEscape.bind(this)
    this.boundCloseOnBackdrop = this.closeOnBackdrop.bind(this)
  }
  
  disconnect() {
    document.removeEventListener("keydown", this.boundCloseOnEscape)
  }
  
  open() {
    // Show modal
    this.element.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")
    
    // Add event listeners
    document.addEventListener("keydown", this.boundCloseOnEscape)
    if (this.hasBackdropTarget) {
      this.backdropTarget.addEventListener("click", this.boundCloseOnBackdrop)
    }
    
    // Focus management
    setTimeout(() => {
      const firstFocusable = this.element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      if (firstFocusable) {
        firstFocusable.focus()
      }
    }, 100)
    
    // Animate in
    requestAnimationFrame(() => {
      this.element.classList.add(this.openClass || "opacity-100")
    })
  }
  
  close() {
    // Animate out
    this.element.classList.add(this.closingClass || "opacity-0")
    this.element.classList.remove(this.openClass || "opacity-100")
    
    // Remove after animation
    setTimeout(() => {
      this.element.classList.add("hidden")
      this.element.classList.remove(this.closingClass || "opacity-0")
      document.body.classList.remove("overflow-hidden")
    }, 200)
    
    // Clean up event listeners
    document.removeEventListener("keydown", this.boundCloseOnEscape)
    if (this.hasBackdropTarget) {
      this.backdropTarget.removeEventListener("click", this.boundCloseOnBackdrop)
    }
  }
  
  closeOnEscape(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }
  
  closeOnBackdrop(event) {
    if (event.target === this.backdropTarget) {
      this.close()
    }
  }
  
  toggle() {
    if (this.element.classList.contains("hidden")) {
      this.open()
    } else {
      this.close()
    }
  }
} 
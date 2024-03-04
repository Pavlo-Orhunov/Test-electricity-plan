// ------------- tabs function -------------
function initializeTabSwitching(containerSelector) {
  const container = document.querySelector(containerSelector)

  if (!container) {
    console.error(`Container with selector ${containerSelector} not found.`)
    return
  }

  container.addEventListener("click", documentActions)

  function documentActions(e) {
    const targetElement = e.target

    if (
      targetElement.classList.contains("tab-button") &&
      !targetElement.classList.contains("_active")
    ) {
      const activeElement = container.querySelector(".tab-button._active")
      const elements = container.querySelectorAll(".tab-item")
      const elementType = targetElement.dataset.tabType

      activeElement.classList.remove("_active")
      targetElement.classList.add("_active")

      elements.forEach((element) => {
        !elementType || element.dataset.tabType === elementType
          ? (element.hidden = false)
          : (element.hidden = true)
      })
    }

    if (targetElement.closest(".tab-btn")) {
      const tabNavBtn = targetElement.closest(".tab-btn")
      if (!tabNavBtn.classList.contains("_active")) {
        const activeTabNavBtn = container.querySelector(".tab-btn._active")
        activeTabNavBtn.classList.remove("_active")
        tabNavBtn.classList.add("_active")

        const tabContents = container.querySelectorAll(".tab-content")
        const activeTabContent = container.querySelector(".tab-content._active")

        activeTabContent.classList.remove("_active")
        tabContents[getIndex(tabNavBtn)].classList.add("_active")
      }
    }
  }

  function getIndex(el) {
    return Array.from(el.parentNode.children).indexOf(el)
  }
}

// apply to the listed containers only
initializeTabSwitching(".has-all-button-tabs-1")
initializeTabSwitching(".has-all-button-tabs-2")

initializeTabSwitching(".no-all-button-tabs-1")
initializeTabSwitching(".no-all-button-tabs-2")
// ------------- END OF tabs function -------------

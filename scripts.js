const accordionItems = document.querySelectorAll('.questions_item')

accordionItems.forEach(item => {
  const accordionHeader = item.querySelector('.questions_header')
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')
    toggleItem(item)
    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

function toggleItem(item) {
  const accordionContent = item.querySelector('.questions_content')
  item.classList.toggle('accordion-open')
  if (item.classList.contains('accordion-open')) {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
  } else {
    accordionContent.style.height = null
  }
}

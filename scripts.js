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


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

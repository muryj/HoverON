const sElAll = (el) => document.querySelectorAll(el)
const sEl = (el) => document.querySelector(el)

console.log(sEl('#yo'))

sElAll('li a').forEach(a => {
  a.href = ''
  console.log(a)
  a.onclick = (e) => {
    console.log('hey')
    e.preventDefault()
    sEl('.md-modal').classList.add('md-open')
  }
})

sEl('.modal-close').onclick = () =>
  sEl('.md-modal').classList.remove('md-open')
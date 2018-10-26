const textAreaHTML = document.querySelector('.md-content__html'),
      textAreaCSS = document.querySelector('.md-content__css');

const checkWhatSectionTheButtonIs = (el) => {
  const numbers = document.querySelectorAll('section')
  el.parentElement.classList.forEach(c => {
    for (let i = 0; i < numbers.length; i++) {
      if ( c.match(i) ) {
        setContentForTextArea(i-1)
      }
    } 
  })
}

const setContentForTextArea = (number) => {
  textAreaHTML.innerText = code[number].html,
  textAreaCSS.innerText = code[number].css
}

document.querySelectorAll('nav').forEach(n => {
  let modalBtn = document.createElement('button');
  modalBtn.setAttribute('class', 'md-trigger md-open');
  modalBtn.setAttribute('data-modal', 'modal-12');
  modalBtn.innerHTML = 'View Code';
  n.appendChild(modalBtn);
})

document.querySelectorAll('.md-open').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.md-modal').classList.add('md-show');
    checkWhatSectionTheButtonIs(btn)
  })
})

document.querySelector('.md-close').addEventListener('click', () => {
  document.querySelector('.md-modal').classList.remove('md-show')
})






const code = [
{
  html: `
  <nav class="cl-effect-1">
    <a href="#">Some text here..</a>
  </nav>`,
  css: `
  .cl-effect-1 a::before,
  .cl-effect-1 a::after {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }

  .cl-effect-1 a::before {
    margin-right: 10px;
    content: '[';
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }

  .cl-effect-1 a::after {
    margin-left: 10px;
    content: ']';
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  .cl-effect-1 a:hover::before,
  .cl-effect-1 a:hover::after,
  .cl-effect-1 a:focus::before,
  .cl-effect-1 a:focus::after {
    opacity: 1;
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }
  `
},
{
  html: `
<nav class="cl-effect-2">
  <a href="#">
    <span data-hover="Ratatouille">Ratatouille</span>
  </a>
</nav>
`,
  css: `
.cl-effect-2 a {
  line-height: 44px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
}

.cl-effect-2 a span {
  position: relative;
  display: inline-block;
  padding: 0 14px;
  background: #2195de;
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.csstransforms3d .cl-effect-2 a span::before {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0965a0;
  content: attr(data-hover);
  -webkit-transition: background 0.3s;
  -moz-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  transform-origin: 50% 0;
}

.cl-effect-2 a:hover span,
.cl-effect-2 a:focus span {
  -webkit-transform: rotateX(90deg) translateY(-22px);
  -moz-transform: rotateX(90deg) translateY(-22px);
  transform: rotateX(90deg) translateY(-22px);
}

.csstransforms3d .cl-effect-2 a:hover span::before,
.csstransforms3d .cl-effect-2 a:focus span::before {
  background: #28a2ee;  
}
`
},
{
  html: `
<nav class="cl-effect-3">
  <a href="#">Some text here..</a>
</nav>`,
  css:
`
.cl-effect-3 a {
  padding: 8px 0;
}

.cl-effect-3 a::after {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0,0,0,0.1);
  content: '';
  opacity: 0;
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
  -moz-transition: opacity 0.3s, -moz-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  transform: translateY(10px);
}

.cl-effect-3 a:hover::after,
.cl-effect-3 a:focus::after {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}
`
},
{
  html: `
<nav class="cl-effect-4">
  <a href="#">Some text here..</a>
</nav>`,
  css:
`
.cl-effect-4 a {
  padding: 0 0 10px;
}

.cl-effect-4 a::after {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #fff;
  content: '';
  opacity: 0;
  -webkit-transition: height 0.3s, opacity 0.3s, -webkit-transform 0.3s;
  -moz-transition: height 0.3s, opacity 0.3s, -moz-transform 0.3s;
  transition: height 0.3s, opacity 0.3s, transform 0.3s;
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  transform: translateY(-10px);
}

.cl-effect-4 a:hover::after,
.cl-effect-4 a:focus::after {
  height: 5px;
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  transform: translateY(0px);
}
`
},
{
  html: `
<nav class="cl-effect-5">
  <a href="#">Some text here..</a>
</nav>`,
  css:
`
.cl-effect-5 a {
  overflow: hidden;
  padding: 0 4px;
  height: 1em;
}

.cl-effect-5 a span {
  position: relative;
  display: inline-block;
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
}

.cl-effect-5 a span::before {
  position: absolute;
  top: 100%;
  content: attr(data-hover);
  font-weight: 700;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.cl-effect-5 a:hover span,
.cl-effect-5 a:focus span {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  transform: translateY(-100%);
}
`
},
{
  html: `
<nav class="cl-effect-6">
  <a href="#">Some text here..</a>
</nav>`,
  css:
`
.cl-effect-6 a {
  margin: 0 10px;
  padding: 10px 20px;
}

.cl-effect-6 a::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: '';
  -webkit-transition: top 0.3s;
  -moz-transition: top 0.3s;
  transition: top 0.3s;
}

.cl-effect-6 a::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background: #fff;
  content: '';
  -webkit-transition: height 0.3s;
  -moz-transition: height 0.3s;
  transition: height 0.3s;
}

.cl-effect-6 a:hover::before {
  top: 100%;
  opacity: 1;
}

.cl-effect-6 a:hover::after {
  height: 100%;
} 
`
},
{
  html: `
<nav class="cl-effect-7">
  <a href="#">Some text here..</a>
</nav>`,
  css:
`
.cl-effect-7 a {
  padding: 12px 10px 10px;
  color: #566473;
  text-shadow: none;
  font-weight: 700;
}

.cl-effect-7 a::before,
.cl-effect-7 a::after {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 3px;
  background: #566473;
  content: '';
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
  -webkit-transform: scale(0.85);
  -moz-transform: scale(0.85);
  transform: scale(0.85);
}

.cl-effect-7 a::after {
  opacity: 0;
  -webkit-transition: top 0.3s, opacity 0.3s, -webkit-transform 0.3s;
  -moz-transition: top 0.3s, opacity 0.3s, -moz-transform 0.3s;
  transition: top 0.3s, opacity 0.3s, transform 0.3s;
}

.cl-effect-7 a:hover::before,
.cl-effect-7 a:hover::after,
.cl-effect-7 a:focus::before,
.cl-effect-7 a:focus::after {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

.cl-effect-7 a:hover::after,
.cl-effect-7 a:focus::after {
  top: 0%;
  opacity: 1;
}
`
}
]
(() => {
  const sEl = (el) => document.querySelector(el);
  const sElAll = (el) => document.querySelectorAll(el);
  const input = sEl('#search');

  let priceElementObject = []
  sElAll('.priceElement').forEach(el => {
    priceElementObject.push(el)
  })

  let titles = [];  
  sElAll('.priceElement span').forEach(span => {
    titles.push(span.childNodes[0].data);
  })
  
  const checkForEffect = (inputValue) => {
    titles.map(title => {
      if (inputValue != '') {
        if ( title.indexOf(inputValue) === 0) {
          priceElementObject.map(div => {
            if (div.children[1].innerHTML != title) {
              div.style.display = 'none'
            }
          })
        }
      } else {
        priceElementObject.map(div => {
          div.style.display = 'flex'
        })
      }
    })
  }

  input.oninput = () => checkForEffect(input.value)

})()
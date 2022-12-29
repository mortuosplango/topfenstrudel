// find all content texts
ready('div.status__content__text', el =>  
  { 
    // look for the special strudel hashtag
    if (el.innerText.includes('// #strudel')) {
      // make a new strudel repl
      const repl = document.createElement('strudel-repl')
      repl.innerHTML = `\n<!-- \n${el.innerText} \n --> \n`

      // pack it in a div so react (?) doesn't throw an error 
      // as the repl is a restricted element and it tries to read an attribute from it
      const div = document.createElement('div')
      div.appendChild(repl)

      // replace post text with repl
      el.innerHTML = div.outerHTML
    }
  })

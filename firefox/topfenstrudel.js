// find all content texts
ready('div.status__content__text', el =>  
  { 
    const strudelLinkOld = el.querySelector('a.status-link[href^="https://strudel.tidalcycles.org" i]')
    const strudelLink = strudelLinkOld || el.querySelector('a.status-link[href^="https://strudel.cc" i]')
    // look for strudel share link
    if (strudelLink) {
      // make a new strudel repl
      const url = strudelLink.getAttribute('href')
      const repl = document.createElement('strudel-repl')
      repl.setAttribute('url', url)
      // pack it in a div so react (?) doesn't throw an error 
      // as the repl is a restricted element and it tries to read an attribute from it
      const div = document.createElement('div')
      div.appendChild(repl)
      el.appendChild(div)
    }
    // OR look for the special strudel hashtag
    else if (el.innerText.includes('// #strudel')) {
      // make a new strudel repl
      const repl = document.createElement('strudel-repl')
      repl.setAttribute('code', el.innerText)

      // pack it in a div so react (?) doesn't throw an error 
      // as the repl is a restricted element and it tries to read an attribute from it
      const div = document.createElement('div')
      div.appendChild(repl)

      // replace post text with repl
      el.replaceChild(div, el.firstChild)
    }
  })

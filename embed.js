// from https://unpkg.com/@strudel.cycles/embed@0.2.0/embed.js, 
// changes: 
// * added timeout
// * set width to standard timeline width on hachyderm

class Strudel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    setTimeout(() => {
      const code = (this.innerHTML + '').replace('<!--', '').replace('-->', '').trim();
      const iframe = document.createElement('iframe');
      const src = `https://strudel.tidalcycles.org/#${encodeURIComponent(btoa(code))}`;
      // const src = `http://localhost:3000/#${encodeURIComponent(btoa(code))}`;
      iframe.setAttribute('src', src);
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '300');
      this.appendChild(iframe);

    },
    // need to set some timeout to not mess up scrolling in Mastodon 
    150);
  }
}
customElements.define('strudel-repl', Strudel);


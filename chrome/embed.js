// from https://unpkg.com/@strudel.cycles/embed@0.2.0/embed.js, 
// changes: 
// * added timeout
// * set width to 100%
// * use url attribute instead of inline code if url is supplied
// * use code attribute instead of reading/writing innerHTML

class Strudel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    setTimeout(() => {
      const url = this.getAttribute('url')
      const code = this.getAttribute('code')?.trim();
      const iframe = document.createElement('iframe');
      const src = url?.startsWith('https://strudel.tidalcycles.org') || url?.startsWith('https://strudel.cc')
        ? url 
        : `https://strudel.cc/#${encodeURIComponent(btoa(code))}`;
      iframe.setAttribute('src', src);
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '300');
      this.appendChild(iframe);
    },
    // need to set some timeout to not mess up scrolling in Mastodon 
    500);
  }
}
customElements.define('strudel-repl', Strudel);


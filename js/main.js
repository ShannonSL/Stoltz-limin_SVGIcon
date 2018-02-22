(()  => {
console.log('svg script file loaded');

let svgs = document.querySelectorAll('svg');

function logThisSVG() {
  console.log(this.id);
}

svg.forEach(svg => svg.addEventListener('click', logThisSVG));
})();

const revert = () => {
    document.getElementById('SWIMS').style.cssText = `
    -webkit-animation:none;
    -moz-animation:none;
    animation:none;
  `;
}
const rotate = () => {
    document.getElementById('SWIMS').style.cssText = `
    -webkit-animation:spin 1s linear;
    -moz-animation:spin 1s linear;
    animation:spin 1s linear;
  `;
  setTimeout(revert,1000);
}
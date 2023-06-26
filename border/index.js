(() => {
  const divElaments = document.querySelectorAll('div');
  for (const divElament of divElaments) {
    divElament.style.cssText = `
    border: 1px solid grey;
    margin-bottom: 10px;
    width: 100px;
    text-align: center;   
    `
      }
})();
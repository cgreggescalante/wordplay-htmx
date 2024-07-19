window.onload = () => {
  fetch('https://raw.githubusercontent.com/mdn/dom-examples/main/to-do-notifications/README.md')
    .then(response => response.text())
    .then(text => {
      console.log(text);
      console.log(text.length)
    })
}
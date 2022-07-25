const getData = api =>
  fetch(api)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))

export default getData

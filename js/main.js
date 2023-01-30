//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = 'https://uselessfacts.jsph.pl/random.json?language=en'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

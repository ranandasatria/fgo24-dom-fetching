async function getCharacters() {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();
      const characters = data.results

      const container = document.getElementById('character-container')

      characters.forEach(character => {

        const card = document.createElement('div')
        card.className = 'character-card'
        container.appendChild(card);

        const name = document.createElement('div')
        name.className = 'character-name'
        name.textContent = character.name
        
        const image = document.createElement('img')
        image.src = character.image
        image.alt = character.name

        card.appendChild(image)
        card.appendChild(name)
       
      })
     
    } catch (error) {
      console.error('Gagal mengambil data:', error)
    }
  }
  
getCharacters()
  

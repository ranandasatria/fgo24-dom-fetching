async function fetchData() {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    return data.results
  } catch (error){
    console.error('Gagal fetch data', error)
    return []
  } 
}

function defaultDisplay(data) {
  const container = document.getElementById('character-container')
  container.replaceChildren()
   // container.innerHTML = '' // bisa pakai innerHTML untuk mereset isi container setelah fungsi search dipanggil

  data.forEach(character => {
    const card = document.createElement('div')
    card.className = 'character-card'

    const name = document.createElement('div')
    name.className = 'character-name'
    name.textContent = character.name

    const image = document.createElement('img')
    image.src = character.image
    image.alt = character.name

    card.appendChild(image)
    card.append(name)
    container.appendChild(card)
  });
}


let allCharacters = []

function searchCharacters() {
  const container = document.getElementById('character-container')

  const searchContainer = document.createElement('div')
  searchContainer.className = 'searchContainer'

  const searchInput = document.createElement ('input')
  searchInput.className = 'searchInput'
  searchInput.type = 'search'
  searchInput.placeholder = 'Search characters...'

  searchContainer.appendChild(searchInput)
  container.parentNode.insertBefore(searchContainer, container)

  searchInput.addEventListener('input', function () {
    const keyword = searchInput.value.toLowerCase()
    const filtered = allCharacters.filter(character => character.name.toLowerCase().includes(keyword)
  )
  defaultDisplay(filtered)
  })
}

async function startDisplay() {
  allCharacters = await fetchData()
  defaultDisplay(allCharacters)
  searchCharacters()
}

startDisplay()
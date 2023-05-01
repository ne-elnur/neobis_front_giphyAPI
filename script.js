const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const resultsEl = document.getElementById('results')

searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const q = searchInput.value
    search(q)
})

function search(q) {
    const apiKey = 'ziCJtmcN4905sTwTdfSbmCPFmuAsXNh5'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.data[0].images.fixed_height.url)
            const gifs = data.data
            let resultsHTML = ''

            gifs.forEach(gif => {
                const url = gif.images.fixed_height.url
                const title = gif.title

                resultsHTML += `
          <div>
            <img class="gif" src="${url}" alt="${title}" />
          </div>
        `
            })

            resultsEl.innerHTML = resultsHTML
        })
        .catch(err => {
            console.error(err)
        })
}

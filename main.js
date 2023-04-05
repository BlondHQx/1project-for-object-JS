let gameManager = new CharactersManager()

document.querySelector("#displayFormBtn").addEventListener('click', () => {
    gameManager.displayModal()
});

document.querySelector("#displayModal").addEventListener('click', () => {
    gameManager.displayForm();
});

function search(key, elem) {
    if (key.keyCode == 13) {
        gameManager.search(elem)
    }
}

document.querySelector('.btn-search').addEventListener('click', () => {

    if (document.querySelector('.contain-filter').classList.contains('animate__fadeInRight')) {
        document.querySelector('.contain-filter').classList.remove('animate__fadeInRight');
        document.querySelector('.contain-filter').style.display = 'none';
    } else {
        document.querySelector('.contain-filter').classList.remove('animate__fadeOutRight');
        document.querySelector('.contain-filter').style.display = 'flex';
        document.querySelector('.contain-filter').classList.add('animate__fadeInRight');
    }
})

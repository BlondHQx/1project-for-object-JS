let gameManager = new CharactersManager()

document.querySelector("#displayFormBtn").addEventListener('click',()=>{
    gameManager.displayModal()
})

document.querySelector("#displayModal").addEventListener('click', () => {
    console.log("kjsdnsd");
    gameManager.displayForm();
});







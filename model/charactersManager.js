class CharactersManager {
    constructor() {
        this.characters = [];
    }
    addCharacters(charac) {
        this.characters.push(charac);
        this.displayCharacters();
    }
    displayCharacters() {
        document.querySelector('.card-container').innerHTML = ""
        gameManager.characters.forEach(elem => {
            document.querySelector('.card-container').innerHTML += ` <div class="oplist_card_container">
            <section class="oplist_card">
                <img class="oplist_card_img" src="./assets/img/Removal-844.png" alt="Jäger Img">
                <img class="oplist_card_icon" src="./assets/img/Y0R6_BADGE_Jager_L (1).png" alt="Jäger Icon">
                <span class="name">${elem.name}</span>
                <span class="type">${elem.type}</span>
                <span class="squad">${elem.squad}</span>
                <span class="role">${elem.role}</span>
                <span class="health">${elem.health}</span>
                <span class="speed">${elem.speed}</span>
                <span class="difficulty">${elem.difficulty}</span>
                <div class="button-wrapper">
                    <button id="updateCharac" class="btn outline">UPDATE</button>
                    <button id="updateDelete" class="btn fill">DELETE</button>
                </div>
            </section>
            </div>`
            document.querySelector("#updateCharac").addEventListener('click', () => {
                document.querySelector("#containerForm").style.display = 'none';
                this.displayForm();
                this.displayModalUpdate(elem);
            });
            document.querySelector("#updateDelete").addEventListener('click', () => {
                this.deleteCharac(elem);
            });
        })

    }
    displayModal() {
        document.querySelector("#containerForm").innerHTML += `
        <div>
            <form>
                <p>Update Operator :</p>
                <input id="name" class="name"type="text" placeholder="name" ><br>
                <input id="type" class="type"type="text" placeholder="type"><br>
                <input id="squad" class="squad" type="text" placeholder="squad""><br>
                <input id="role" class=""type="text" placeholder="role"><br>
                <input id="health" class="health"type="text" placeholder="health"><br>
                <input id="speed" class="speed"type="text" placeholder="speed"><br>
                <input id="difficulty" class="difficulty"type="text" placeholder="difficulty"><br>
                <input id="submit" class="submit" type="button" value="Submit"><br>
            </form>

            <div class="drops">
                <div class="drop drop-1"></div>
                <div class="drop drop-2"></div>
                <div class="drop drop-3"></div>
                <div class="drop drop-4"></div>
                <div class="drop drop-5"></div>
            </div>
        </div>`;

        document.querySelector("#submit").addEventListener('click', () => {
            this.deleteform();
            let name = document.querySelector('#name').value;
            let type = document.querySelector('#type').value;
            let squad = document.querySelector('#squad').value;
            let role = document.querySelector('#role').value;
            let health = document.querySelector('#health').value;
            let speed = document.querySelector('#speed').value;
            let difficulty = document.querySelector('#difficulty').value;
            let newCharac = new Character(name, type, squad, role, health, speed, difficulty);
            this.addCharacters(newCharac)
        });
    }
    displayForm() {
        document.querySelector("#mainContainer").style.display = "block"
        document.querySelector("#mainContainer").style.position = "absolute"
        document.querySelector("#operator").style.display = "none"
        document.querySelector("header").style.display = "none"
    }
    deleteform() {
        document.querySelector("#mainContainer").style.display = "none"
        document.querySelector("#mainContainer").style.position = "relative"
        document.querySelector("#operator").style.display = "flex"
        document.querySelector("header").style.display = "block"
    }
    displayModalUpdate(charac) {
        document.querySelector("#containerFormUpdate").innerHTML +=
            `<div>
            <form>
                <p>Update Operator :</p>
                <input id="updateName" class="name"type="text" value="${charac.name}"><br>
                <input id="updateType" class="type"type="text" value="${charac.type}"><br>
                <input id="updateSquad" class="squad" type="text" value="${charac.squad}"><br>
                <input id="updateRole" class=""type="text" value="${charac.role}"><br>
                <input id="updateHealth" class="health"type="text" value="${charac.health}"><br>
                <input id="updateSpeed" class="speed"type="text" value="${charac.speed}"><br>
                <input id="updateDifficulty" class="difficulty"type="text" value="${charac.difficulty}"><br>
                <input id="updateSubmit" class="submit" type="button" value="Submit"><br>
            </form>

            <div class="drops">
                <div class="drop drop-1"></div>
                <div class="drop drop-2"></div>
                <div class="drop drop-3"></div>
                <div class="drop drop-4"></div>
                <div class="drop drop-5"></div>
            </div>
            </div>`;
        document.querySelector("#updateSubmit").addEventListener('click', () => {
            this.deleteform();
            let name = document.querySelector('#updateName').value;
            let type = document.querySelector('#updateType').value;
            let squad = document.querySelector('#updateSquad').value;
            let role = document.querySelector('#updateRole').value;
            let health = document.querySelector('#updateHealth').value;
            let speed = document.querySelector('#updateSpeed').value;
            let difficulty = document.querySelector('#updateDifficulty').value;
            let newCharac = new Character(name, type, squad, role, health, speed, difficulty);
            this.updateCharac(newCharac, charac);
        });
    }
    updateCharac(charac, oldcharac) {
        let index = this.characters.indexOf(oldcharac);
        this.characters[index] = charac;
        this.displayCharacters();
    }
    deleteCharac(charac) {
        let index = this.characters.indexOf(charac);
        this.characters.splice(index, 1);
        this.displayCharacters();
    }
}

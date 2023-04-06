//MAIN METHOD FOR MANAGE CARDS
class CharactersManager {
    constructor() {
        this.characters = [];
    }
    addCharacters(charac) {
        this.characters.push(charac);
        this.displayCharacters(this.characters);
        console.log(charac);
    }
    //DISPLAY OPERATOR CARDS
    displayCharacters(characters) {
        let img;
        let parent = document.querySelector('.card-container')
        parent.innerHTML = "";
        characters.forEach(elem => {
            if (elem.type == "defender") {
                img = "./assets/img/defender.svg"
            } else {
                img = "./assets/img/attacker.svg"
            }
            //CREATE ELEMENT V.2
            let container = document.createElement('div');
            container.classList.add('oplist_card_container');
            parent.appendChild(container);
            let sectionCard = document.createElement('section');
            sectionCard.classList.add('oplist_card');
            container.appendChild(sectionCard);
            let imgOne = document.createElement('img');
            imgOne.classList.add('oplist_card_img');
            imgOne.src = "./assets/img/Removal-844.png";
            sectionCard.appendChild(imgOne);
            let imgTwo = document.createElement('img');
            imgTwo.classList.add('oplist_card_icon');
            imgTwo.src = img;
            sectionCard.appendChild(imgTwo);
            let spanName = document.createElement('span');
            spanName.classList.add('span_card', 'name');
            spanName.innerText = elem.name;
            sectionCard.appendChild(spanName);
            let spanType = document.createElement('span');
            spanType.classList.add('span_card', 'type');
            spanType.innerText = elem.type;
            sectionCard.appendChild(spanType);
            let spanSquad = document.createElement('span');
            spanSquad.classList.add('span_card', 'Squad');
            spanSquad.innerText = elem.squad;
            sectionCard.appendChild(spanSquad);
            let spanRole = document.createElement('span');
            spanRole.classList.add('span_card', 'Role');
            spanRole.innerText = elem.role;
            sectionCard.appendChild(spanRole);
            let spanHealth = document.createElement('span');
            spanHealth.classList.add('span_card', 'Health');
            spanHealth.innerText = elem.health;
            sectionCard.appendChild(spanHealth);
            let spanSpeed = document.createElement('span');
            spanSpeed.classList.add('span_card', 'Speed');
            spanSpeed.innerText = elem.speed;
            sectionCard.appendChild(spanSpeed);
            let spanDifficulty = document.createElement('span');
            spanDifficulty.classList.add('span_card', 'Difficulty');
            spanDifficulty.innerText = elem.difficulty;
            sectionCard.appendChild(spanDifficulty);
            let divBtn = document.createElement('div');
            divBtn.classList.add('button-wrapper');
            sectionCard.appendChild(divBtn);
            let btnUpdate = document.createElement('button');
            btnUpdate.classList.add("btn", "outline");
            btnUpdate.innerText = "UPDATE";
            divBtn.appendChild(btnUpdate);
            let btnDelete = document.createElement('button');
            btnDelete.classList.add("btn", "fill");
            btnDelete.innerText = "DELETE";
            divBtn.appendChild(btnDelete);
            
            //EVENT FOR BTN
            btnUpdate.addEventListener('click', () => {
                document.querySelector("#containerForm").style.display = 'none';
                this.displayForm();
                this.displayModalUpdate(elem);
            });
            btnDelete.addEventListener('click', () => {
                this.deleteCharac(elem);
            });
    });
}
//FORM FOR CREATE OPERATOR
displayModal() {
    // let parent = document.querySelector('#op_card_container')
    document.querySelector("#containerForm").innerHTML += `
        <div>
            <form>
                <div id="close_Form" class="close-container">
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                    <label  class="close">close</label>
                </div>
            <p>Create Operator :</p>
                <input id="name" class="name"type="text" placeholder="name" ><br>
                <select id="type" class="type selectType">
                <option value="attacker">Attacker</option>
                <option value="defender">Defender</option>
                </select>
                <input id="squad" class="squad" type="text" placeholder="squad""><br>
                <input id="role" class="role"type="text" placeholder="role"><br>
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
        </div>`
    //CLOSE FORM ANYTIME WITH 'X'
    document.querySelector('#close_Form').addEventListener('click', () => {
        this.closeform();
    });
    //SUBMIT OPTION FOR CREATE CARD
    document.querySelector("#submit").addEventListener('click', () => {
        let name = document.querySelector('.name').value;
        let type = document.querySelector('.selectType').value;
        let squad = document.querySelector('.squad').value;
        let role = document.querySelector('.role').value;
        let health = document.querySelector('.health').value;
        let speed = document.querySelector('.speed').value;
        let difficulty = document.querySelector('.difficulty').value;
        let newCharac = new Character(name, type, squad, role, health, speed, difficulty);
        this.addCharacters(newCharac);
        this.closeform();
    });
}
//METHOD FOR DISPLAYED THE FORM
displayForm() {
    document.querySelector('#containerForm').innerHTML = ""
    document.querySelector('#containerFormUpdate').innerHTML = ""
    document.querySelector("#mainContainer").style.display = "block"
    document.querySelector("#mainContainer").style.position = "absolute"
    document.querySelector("#operator").style.display = "none"
    document.querySelector("header").style.display = "none"
}
//METHOD FOR HIDE THE FORM
closeform() {
    document.querySelector('#containerForm').innerHTML = ""
    document.querySelector('#containerFormUpdate').innerHTML = ""
    document.querySelector("#mainContainer").style.display = "none"
    document.querySelector("#mainContainer").style.position = "relative"
    document.querySelector("#operator").style.display = "flex"
    document.querySelector("header").style.display = "block"
}
//UPDATED FORM FOR CARDS 
displayModalUpdate(charac) {
    document.querySelector("#containerFormUpdate").innerHTML +=
        `<div>
            <form>
                <div id="close_FormUpdate" class="close-container">
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                    <label  class="close">close</label>
                </div>
                <p>Update Operator :</p>
                <input id="updateName" class="name"type="text" value="${charac.name}"><br>
                <select id="updateType">${charac.type}
                <option value="attacker">Attacker</option>
                <option value="defender">Defender</option>
                </select><br>
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
    //CLOSE FORM ANYTIME WITH 'X'
    document.querySelector('#close_FormUpdate').addEventListener('click', () => {
        this.closeform();
    });
    //SUBMIT BUTTON OF UPDATED FORM 
    document.querySelector("#updateSubmit").addEventListener('click', () => {
        let name = document.querySelector('#updateName').value;
        let type = document.querySelector('#updateType').value;
        let squad = document.querySelector('#updateSquad').value;
        let role = document.querySelector('#updateRole').value;
        let health = document.querySelector('#updateHealth').value;
        let speed = document.querySelector('#updateSpeed').value;
        let difficulty = document.querySelector('#updateDifficulty').value;
        let newCharac = new Character(name, type, squad, role, health, speed, difficulty);
        this.updateCharac(newCharac, charac);
        this.closeform();
    });
}
//MAIN METHOD FOR UPDATED CHARACTERS
updateCharac(charac, oldcharac) {
    console.log(charac.type);
    let index = this.characters.indexOf(oldcharac);
    this.characters[index] = charac;
    this.displayCharacters(this.characters);
}
//DELETE METHOD FOR DELETE CHARACTERS
deleteCharac(charac) {
    let index = this.characters.indexOf(charac);
    this.characters.splice(index, 1);
    this.displayCharacters(this.characters);
}
//FILTER METHOD FOR SEARCH BAR
search(elem) {
    let criterial = elem.name
    let value = elem.value
    if (value == "") {
        this.displayCharacters(this.characters)
        return
    }
    let result = this.characters.filter(element => {
        return element[criterial] == value
    })
    this.displayCharacters(result)

}
}
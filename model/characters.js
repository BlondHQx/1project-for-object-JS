class Character {
    constructor(_name, _type, _squad, _role, _health, _speed, _difficulty,) {
        this.id = Math.floor(Math.random() * Date.now())
        this.name = _name;
        this.type = _type;
        this.squad = _squad;
        this.role = _role;
        this.health = _health;
        this.speed = _speed;
        this.difficulty = _difficulty;
    }
};
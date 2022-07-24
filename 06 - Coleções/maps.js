function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key)
        }
    }
    return admins;
}

let usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("João", "Admin");
usuarios.set("Maria", "User");
usuarios.set("Natália", "Admin");

console.log(getAdmins(usuarios));
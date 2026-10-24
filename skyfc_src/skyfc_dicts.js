import * as d from "./dicts/index.js"


export default function dicts(obj) {
    main_dicts(obj);
    d.inventory_dicts(obj);
}

function main_dicts(obj) {
    obj.character_dict = {
        "Estelle": 0,
        "Joshua": 1,
        "Scherazard": 2,
        "Olivier": 3,
        "Kloe": 4,
        "Agate": 5,
        "Tita": 6,
        "Zin": 7,
        "None": 255,
    };
}

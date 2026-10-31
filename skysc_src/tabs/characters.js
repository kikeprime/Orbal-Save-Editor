export function create_characters() {
    const skyscdiv = document.getElementById("skyscdiv");
    const char_options = window.skysc.characters
        .map((c, idx) => `\n\t<option value=${idx}>${c.name}</option>`)
        .join("");
    skyscdiv.innerHTML = `
    <div>
        <div style="display: flex; gap: 20px">
            <select id="skyscchartabs">
                ${char_options}
            </select>
            <select id="skysccharsubtabs">
                <option value="Stats">Stats</option>
                <option value="Equipment">Equipment</option>
                <option value="Orbment">Orbment</option>
                <option value="Crafts">Crafts</option>
            </select>
        </div>
        <div id="skyscchardiv"></div>
    </div>`;
    const skyscchartabs = document.getElementById("skyscchartabs");
    const skysccharsubtabs = document.getElementById("skysccharsubtabs");
    function tab_sel() {
        create_character(skyscchartabs.value, skysccharsubtabs.value);
    }
    skyscchartabs.addEventListener("change", tab_sel);
    skysccharsubtabs.addEventListener("change", tab_sel);
    create_character(skyscchartabs.value, skysccharsubtabs.value);
}

function create_character(id, tab) {
    switch (tab) {
        case "Stats": {
            create_stats(id);
            break;
        }
        case "Equipment": {
            create_equipment(id);
            break;
        }
        case "Orbment": {
            create_orbment(id);
            break;
        }
        case "Crafts": {
            create_crafts(id);
            break;
        }
        default: {
            const skyscchardiv = document.getElementById("skyscchardiv");
            skyscchardiv.innerHTML = "";
            break;
        }
    }
}

function create_stats(id) {
    const skyscchardiv = document.getElementById("skyscchardiv");
    const c = window.skysc.characters[id];
    const level = `
    <div>
        <h3>Level:</h3>
        <input
            type="number"
            id="level"
            min=35
            max=99
            step=1
            value=${c.level.value}
        >
    </div>`;
    const exp = `
    <div>
        <h3>EXP:</h3>
        <input
            type="number"
            id="exp"
            min=0
            max=999999
            step=1
            value=${c.exp.value}
        >
    </div>`;
    const hp = `
    <div>
        <h3>HP:</h3>
        <input
            type="number"
            id="hp"
            min=0
            max=999999
            step=1
            value=${c.hp.value}
        >
    </div>`;
    const maxhp = `
    <div>
        <h3>Max HP:</h3>
        <input
            type="number"
            id="maxhp"
            min=0
            max=999999
            step=1
            value=${c.maxhp.value}
        >
    </div>`;
    const ep = `
    <div>
        <h3>EP:</h3>
        <input
            type="number"
            id="ep"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.ep.value}
        >
    </div>`;
    const maxep = `
    <div>
        <h3>Max EP:</h3>
        <input
            type="number"
            id="maxep"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.maxep.value}
        >
    </div>`;
    const cp = `
    <div>
        <h3>CP:</h3>
        <input
            type="number"
            id="cp"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.cp.value}
        >
    </div>`;
    const maxcp = `
    <div>
        <h3>Max CP:</h3>
        <input
            type="number"
            id="maxcp"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.maxcp.value}
        >
    </div>`;
    const str = `
    <div>
        <h3>STR:</h3>
        <input
            type="number"
            id="str"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.str.value}
        >
    </div>`;
    const def = `
    <div>
        <h3>DEF:</h3>
        <input
            type="number"
            id="def"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.def.value}
        >
    </div>`;
    const ats = `
    <div>
        <h3>ATS:</h3>
        <input
            type="number"
            id="ats"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.ats.value}
        >
    </div>`;
    const adf = `
    <div>
        <h3>ADF:</h3>
        <input
            type="number"
            id="adf"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.adf.value}
        >
    </div>`;
    const spd = `
    <div>
        <h3>SPD:</h3>
        <input
            type="number"
            id="spd"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.spd.value}
        >
    </div>`;
    const mov = `
    <div>
        <h3>MOV:</h3>
        <input
            type="number"
            id="mov"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.mov.value}
        >
    </div>`;
    const dex = `
    <div>
        <h3>DEX:</h3>
        <input
            type="number"
            id="dex"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.dex.value}
        >
    </div>`;
    const agl = `
    <div>
        <h3>AGL:</h3>
        <input
            type="number"
            id="agl"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.agl.value}
        >
    </div>`;
    const rng = `
    <div>
        <h3>RNG:</h3>
        <input
            type="number"
            id="rng"
            min=0
            max=${0xFFFF}
            step=1
            value=${c.rng.value}
        >
    </div>`;
    skyscchardiv.innerHTML = `
    <div>
        <div style="display: flex; gap: 20px">
            ${level}
            ${exp}
        </div>
        <div style="display: flex; gap: 20px">
            ${hp}
            ${maxhp}
        </div>
        <div style="display: flex; gap: 20px">
            ${ep}
            ${maxep}
        </div>
        <div style="display: flex; gap: 20px">
            ${cp}
            ${maxcp}
        </div>
        <div style="display: flex; gap: 20px">
            ${str}
            ${def}
        </div>
        <div style="display: flex; gap: 20px">
            ${ats}
            ${adf}
        </div>
        <div style="display: flex; gap: 20px">
            ${spd}
            ${mov}
        </div>
		${dex}
		${agl}
		${rng}
    </div>`;
    stats_callbacks(id);
}

function stats_callbacks(id) {
    const c = window.skysc.characters[id];
    const level = document.getElementById("level");
    level.addEventListener("change", () => {
        if (level.validity.valid)
            c.level.value = level.value;
        level.value = c.level.value;
    });
    const exp = document.getElementById("exp");
    exp.addEventListener("change", () => {
        if (exp.validity.valid)
            c.exp.value = exp.value;
        exp.value = c.exp.value;
    });
    const hp = document.getElementById("hp");
    hp.addEventListener("change", () => {
        if (hp.validity.valid)
            c.hp.value = hp.value;
        hp.value = c.hp.value;
    });
    const maxhp = document.getElementById("maxhp");
    maxhp.addEventListener("change", () => {
        if (maxhp.validity.valid)
            c.maxhp.value = maxhp.value;
        maxhp.value = c.maxhp.value;
    });
    const ep = document.getElementById("ep");
    ep.addEventListener("change", () => {
        if (ep.validity.valid)
            c.ep.value = ep.value;
        ep.value = c.ep.value;
    });
    const maxep = document.getElementById("maxep");
    maxep.addEventListener("change", () => {
        if (maxep.validity.valid)
            c.maxep.value = maxep.value;
        maxep.value = c.maxep.value;
    });
    const str = document.getElementById("str");
    str.addEventListener("change", () => {
        if (str.validity.valid)
            c.str.value = str.value;
        str.value = c.str.value;
    });
    const def = document.getElementById("def");
    def.addEventListener("change", () => {
        if (def.validity.valid)
            c.def.value = def.value;
        def.value = c.def.value;
    });
    const ats = document.getElementById("ats");
    ats.addEventListener("change", () => {
        if (ats.validity.valid)
            c.ats.value = ats.value;
        ats.value = c.ats.value;
    });
    const adf = document.getElementById("adf");
    adf.addEventListener("change", () => {
        if (adf.validity.valid)
            c.adf.value = adf.value;
        adf.value = c.adf.value;
    });
    const spd = document.getElementById("spd");
    spd.addEventListener("change", () => {
        if (spd.validity.valid)
            c.spd.value = spd.value;
        spd.value = c.spd.value;
    });
    const mov = document.getElementById("mov");
    mov.addEventListener("change", () => {
        if (mov.validity.valid)
            c.mov.value = mov.value;
        mov.value = c.mov.value;
    });
    const dex = document.getElementById("dex");
    dex.addEventListener("change", () => {
        if (dex.validity.valid)
            c.dex.value = dex.value;
        dex.value = c.dex.value;
    });
    const agl = document.getElementById("agl");
    agl.addEventListener("change", () => {
        if (agl.validity.valid)
            c.agl.value = agl.value;
        agl.value = c.agl.value;
    });
    const rng = document.getElementById("rng");
    rng.addEventListener("change", () => {
        if (rng.validity.valid)
            c.rgn.value = rng.value;
        rng.value = c.rng.value;
    });
}

function create_equipment(id) {
    const skyscchardiv = document.getElementById("skyscchardiv");
    const c = window.skysc.characters[id];
    const weapon_options = window.skysc.weapon_list[c.name]
        .map((label) => `\n\t<option value=${window.skysc.inventory_dict[label]}>${label}</option>`)
        .join("");
    const armor_options = window.skysc.armor_list
        .map((label) => `\n\t<option value=${window.skysc.inventory_dict[label]}>${label}</option>`)
        .join("");
    const boots_options = window.skysc.boots_list
        .map((label) => `\n\t<option value=${window.skysc.inventory_dict[label]}>${label}</option>`)
        .join("");
    const accessory_options = window.skysc.accessory_list
        .map((label) => `\n\t<option value=${window.skysc.inventory_dict[label]}>${label}</option>`)
        .join("");
    const weapon = `
    <div>
        <h3>Weapon:</h3>
        <select id="weapon">
            ${weapon_options}
        </select>
    </div>`;
    const armor = `
    <div>
        <h3>Armor:</h3>
        <select id="armor">
            ${armor_options}
        </select>
    </div>`;
    const boots = `
    <div>
        <h3>Boots:</h3>
        <select id="boots">
            ${boots_options}
        </select>
    </div>`;
    const accessory1 = `
    <div>
        <h3>Accessory 1:</h3>
        <select id="accessory1">
            ${accessory_options}
        </select>
    </div>`;
    const accessory2 = `
    <div>
        <h3>Accessory 2:</h3>
        <select id="accessory2">
            ${accessory_options}
        </select>
    </div>`;
    skyscchardiv.innerHTML = `
    <div>
        ${weapon}
        ${armor}
        ${boots}
        ${accessory1}
        ${accessory2}
    </div>`;
    equipment_callbacks(id);
}

function equipment_callbacks(id) {
    const c = window.skysc.characters[id];
    const weapon = document.getElementById("weapon");
    weapon.value = c.weapon.value;
    weapon.addEventListener("change", () => {
        c.weapon.value = weapon.value;
    });
    const armor = document.getElementById("armor");
    armor.value = c.armor.value;
    armor.addEventListener("change", () => {
        c.armor.value = armor.value;
    });
    const boots = document.getElementById("boots");
    boots.value = c.boots.value;
    boots.addEventListener("change", () => {
        c.boots.value = boots.value;
    });
    const accessory1 = document.getElementById("accessory1");
    accessory1.value = c.accessory1.value;
    accessory1.addEventListener("change", () => {
        c.accessory1.value = accessory1.value;
    });
    const accessory2 = document.getElementById("accessory2");
    accessory2.value = c.accessory2.value;
    accessory2.addEventListener("change", () => {
        c.accessory2.value = accessory2.value;
    });
}

function create_orbment(id) {
    const skyscchardiv = document.getElementById("skyscchardiv");
    const c = window.skysc.characters[id];
    const quartz_options = window.skysc.quartz_list
        .map((label) => `\n\t<option value=${window.skysc.inventory_dict[label]}>${label}</option>`)
        .join("");
    let orbment = "";
    for (let i = 0; i < 6; i++) {
        orbment += `
        <div style="display: flex; align-items: center; gap: 10px">
            <select class="skysc-orbment" name=${i}>
                ${quartz_options}
            </select>
            Level:
            <select class="skysc-orbment-level" name=${i}>
                <option value=0>0</option>
                <option value=1>1</option>
                <option value=2>2</option>
                <option value=3>3</option>
            </select>
        </div>`
    }
    skyscchardiv.innerHTML = `
    <div id="orbment">
        ${orbment}
    </div>`;
    orbment_callbacks(id);
}

function orbment_callbacks(id) {
    const c = window.skysc.characters[id];
    const orbment = document.getElementById("orbment");
    orbment.querySelectorAll("select.skysc-orbment").forEach(select => {
        select.value = c.orbment[select.name].quartz.value;
        select.addEventListener("change", () => {
            c.orbment[select.name].quartz.value = select.value;
        });
    });
    orbment.querySelectorAll("select.skysc-orbment-level").forEach(select => {
        select.value = c.orbment[select.name].level.value;
        select.addEventListener("change", () => {
            c.orbment[select.name].level.value = select.value;
        });
    });
}

function create_crafts(id) {
    const skyscchardiv = document.getElementById("skyscchardiv");
    const c = window.skysc.characters[id];
    const craft_options = window.skysc.craft_list
        .map(label => `<option value=${window.skysc.craft_dict[label]}>${label}</option>`)
        .join("");
    let crafts = "";
    for (let i = 0; i < c.crafts.length; i++) {
        crafts += `
        <div style="display: flex; align-items: center; gap: 20px">
            <select name=${i}>${craft_options}</select>
            <input
                type="checkbox"
                name=${i}
                ${c.crafts[i].state.value ? "checked" : ""}
            >
            <label style="display: flex; align-items: center; gap: 10px">
                Price:
                <input
                    type="number"
                    name=${i}
                    value=${c.crafts[i].price.value}
                    min=0
                    max=255
                    step=1
                >
            </label>
        </div>`;
    }
    const scrafts = c.scrafts
        .map((value, i) => `<select name=${i}>${craft_options}</select>`)
        .join("");
    skyscchardiv.innerHTML = `
    <div>
        <h3>Crafts:</h3>
        <div id="crafts">
            ${crafts}
        </div>
        <h3>S-Crafts:</h3>
        <div id="scrafts">
            ${scrafts}
        </div>
    </div>`;
    crafts_callbacks(id);
}

function crafts_callbacks(id) {
    const c = window.skysc.characters[id];
    const crafts = document.getElementById("crafts");
    crafts.querySelectorAll("select").forEach(select => {
        select.value = c.crafts[select.name].craft.value;
    });
    crafts.querySelectorAll("input[type=checkbox]").forEach(input => {
        input.addEventListener("change", () => {
            if (input.checked)
                c.crafts[input.name].state.value = 1;
            else
                c.crafts[input.name].state.value = 0;
        });
    });
    crafts.querySelectorAll("input[type=number]").forEach(input => {
        input.addEventListener("change", () => {
            if (input.validity.valid)
                c.crafts[input.name].price.value = input.value;
            input.value = c.crafts[input.name].price.value;
        });
    });
    const scrafts = document.getElementById("scrafts");
    scrafts.querySelectorAll("select").forEach(select => {
        select.value = c.scrafts[select.name];
        select.addEventListener("change", () => {
            c.scrafts[select.name] = select.value;
        });
    });
}

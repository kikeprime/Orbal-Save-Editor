export function create_characters() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    const char_options = window.skyfc.characters
        .map((c, idx) => `\n\t<option value=${idx}>${c.name}</option>`)
        .join("");
    skyfcdiv.innerHTML = `
    <div>
        <div style="display: flex; gap: 20px">
            <select id="skyfcchartabs">
                ${char_options}
            </select>
            <select id="skyfccharsubtabs">
                <option value="Stats">Stats</option>
                <option value="Equipment">Equipment</option>
                <option value="Orbment">Orbment</option>
            </select>
        </div>
        <div id="skyfcchardiv"></div>
    </div>`;
    const skyfcchartabs = document.getElementById("skyfcchartabs");
    const skyfccharsubtabs = document.getElementById("skyfccharsubtabs");
    function tab_sel() {
        create_character(skyfcchartabs.value, skyfccharsubtabs.value);
    }
    skyfcchartabs.addEventListener("change", tab_sel);
    skyfccharsubtabs.addEventListener("change", tab_sel);
    create_character(skyfcchartabs.value, skyfccharsubtabs.value);
}

function create_character(id, tab) {
    switch (tab) {
        case "Stats": {
            create_stats(id);
            break;
        }
        /*
        case "Equipment": {
            create_equipment(id);
            break;
        }
        */
        default: {
            const skyfcchardiv = document.getElementById("skyfcchardiv");
            skyfcchardiv.innerHTML = "";
            break;
        }
    }
}

function create_stats(id) {
    const skyfcchardiv = document.getElementById("skyfcchardiv");
    const c = window.skyfc.characters[id];
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
    const level = `
    <div>
        <h3>Level:</h3>
        <input
            type="number"
            id="level"
            min=1
            max=50
            step=1
            value=${c.level.value}
        >
    </div>`;
    const hp = `
    <div>
        <h3>HP:</h3>
        <input
            type="number"
            id="hp"
            min=0
            max=${0xFFFF}
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
            max=${0xFFFF}
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
    skyfcchardiv.innerHTML = `
    <div>
        <div style="display: flex; gap: 20px">
            ${exp}
            ${level}
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
    const c = window.skyfc.characters[id];
    const exp = document.getElementById("exp");
    exp.addEventListener("change", () => {
        if (exp.validity.valid)
            c.exp.value = exp.value;
        exp.value = c.exp.value;
    });
    const level = document.getElementById("level");
    level.addEventListener("change", () => {
        if (level.validity.valid)
            c.level.value = level.value;
        level.value = c.level.value;
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

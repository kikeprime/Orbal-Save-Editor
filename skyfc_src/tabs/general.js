export function create_general() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    const playtime = create_playtime();
    const difficulty = `
    <h3>Difficulty:</h3>
    <select id="difficulty">
        <option value=3>Easy</option>
        <option value=0>Normal</option>
        <option value=1>Hard</option>
        <option value=2>Nightmare</option>
    </select>`;
    const party_options = Object.entries(window.skyfc.character_dict)
        .map(([label, value]) => `\n\t<option value=${value}>${label}</option>`)
        .join("");
    const party = `
    <div>
        <h3>Party:</h3>
        <div id="party" style="display: flex">
            <select name=0>
                ${party_options}
            </select>
            <select name=1>
                ${party_options}
            </select>
            <select name=2>
                ${party_options}
            </select>
            <select name=3>
                ${party_options}
            </select>
        </div>
    </div>`;
    const mira = `
    <div>
        <h3>Mira:</h3>
        <input
            type="number"
            id="mira"
            min=0
            max=999999
            step=1
            value=${window.skyfc.mira.value}
        >
    </div>`;
    skyfcdiv.innerHTML = `
    <div>
        ${playtime}
        ${difficulty}
        ${party}
        ${mira}
    </div>`;
    general_callbacks();
}

function create_playtime() {
    const playtime = window.skyfc.get_playtime();
    return `
    <h3>Playtime:</h3>
    <div id="playtime" style="display: flex; gap: 20px">
        <input
            type="number"
            id="hours"
            min=0
            max=400
            step=1
            value=${playtime[0]}
        >
        <input
            type="number"
            id="minutes"
            min=0
            max=59
            step=1
            value=${playtime[1]}
        >
        <input
            type="number"
            id="seconds"
            min=0
            max=59
            step=1
            value=${playtime[2]}
        >
    </div>`;
}

function playtime_callbacks() {
    const playtime = document.getElementById("playtime");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    function update_playtime() {
        if (
            hours.validity.valid &&
            minutes.validity.valid &&
            seconds.validity.valid
        ) {
            window.skyfc.set_playtime(
                Number(hours.value),
                Number(minutes.value),
                Number(seconds.value),
                0,
            );
        }
        const [h, m, s, f, cs] = window.skyfc.get_playtime();
        hours.value = h;
        minutes.value = m;
        seconds.value = s;
    }
    hours.addEventListener("change", update_playtime);
    minutes.addEventListener("change", update_playtime);
    seconds.addEventListener("change", update_playtime);
}

function general_callbacks() {
    playtime_callbacks();
    const difficulty = document.getElementById("difficulty");
    difficulty.value = window.skyfc.difficulty.value;
    difficulty.addEventListener("change", () => {
        window.skyfc.difficulty.value = difficulty.value;
    });
    const party = document.getElementById("party");
    Array.from(party.querySelectorAll("select")).forEach(select => {
        select.value = window.skyfc.party[select.name];
        select.addEventListener("change", () => {
            window.skyfc.party[select.name] = select.value;
        });
    });
    const mira = document.getElementById("mira");
    mira.addEventListener("change", () => {
        if (mira.validity.valid)
            window.skyfc.mira.value = mira.value;
        mira.value = window.skyfc.mira.value;
    });
}

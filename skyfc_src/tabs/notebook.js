export function create_notebook() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    const bp = `
    <div>
        <h3>BP:</h3>
        <input
            type="number"
            id="bp"
            min=0
            max=368
            step=1
            value=${skyfc.bp.value}
        >
    </div>`;
    skyfcdiv.innerHTML = `
    <div>
        ${bp}
        <div>
            <h3>Region:</h3>
            <select id="skyfcbntabs">
                ${
                    Object.keys(skyfc.notebook_dict)
                        .map(label => `<option value=${label}>${label}</option>`)
                        .join("")
                }
            </select>
        </div>
        <div id="skyfcbndiv" style="-webkit-text-size-adjust: 100%; text-size-adjust: 100%"></div>
    </div>`;
    notebook_callbacks();
    const skyfcbntabs = document.getElementById("skyfcbntabs");
    function tab_sel() {
        create_quests(skyfcbntabs.value);
    }
    skyfcbntabs.addEventListener("change", tab_sel);
    tab_sel();
}

function notebook_callbacks() {
    const bp = document.getElementById("bp");
    bp.addEventListener("change", () => {
        if (bp.validity.valid)
            skyfc.bp.value = bp.value;
        bp.value = skyfc.bp.value;
    });
}

function create_quests(region) {
    const skyfcbndiv = document.getElementById("skyfcbndiv");
    function create_quest(name) {
        const quest = skyfc.quests[skyfc.quest_dict[name]];
        const state = `
        <div>
            <label style="display: flex; align-items: center; gap: 10px">
                Bit 0:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 0}
                    ${quest.state.value & (1 << 0) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Viewed:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 1}
                    ${quest.state.value & (1 << 1) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Accepted 1:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 2}
                    ${quest.state.value & (1 << 2) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Accepted 2:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 3}
                    ${quest.state.value & (1 << 3) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Completed:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 4}
                    ${quest.state.value & (1 << 4) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Reported:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 5}
                    ${quest.state.value & (1 << 5) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Expired:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 6}
                    ${quest.state.value & (1 << 6) ? "checked" : ""}
                >
            </label>
            <label style="display: flex; align-items: center; gap: 10px">
                Bit 7:
                <input
                    type=checkbox
                    name="state"
                    value=${1 << 7}
                    ${quest.state.value & (1 << 7) ? "checked" : ""}
                >
            </label>
        </div>`;
        const bonus_bp = `
        <input
            type="number"
            name="bonus_bp"
            value=${quest.bonus_bp.value}
            min=${-0x8000}
            max=${0x7FFF}
            step=1
        >`;
        const mira = `
        <input
            type="number"
            name="mira"
            value=${quest.mira.value}
            min=${-0x8000}
            max=${0x7FFF}
            step=1
        >`;
        let progress = "<div>";
        for (let i = 0; i < 16; i++) {
            const comment = name in skyfc.quest_progress_dict ? skyfc.quest_progress_dict[name][i] : "";
            progress += `
            <label style="display: flex; align-items: center; gap: 10px">
                Bit ${i}:
                <input
                    type=checkbox
                    name="progress"
                    value=${1 << i}
                    ${quest.progress.value & (1 << i) ? "checked" : ""}
                >
                ${comment}
            </label>`;
        }
        progress += "</div>";
        return `
        <div id="${name}">
            <h3>${name}:</h3>
            <h4>State:</h4>
            ${state}
            <h4>Bonus BP:</h4>
            ${bonus_bp}
            <h4>Mira Modifier:</h4>
            ${mira}
            <h4>Progress:</h4>
            ${progress}
        </div>`;
    }
    skyfcbndiv.innerHTML = skyfc.notebook_dict[region]
        .map(name => create_quest(name))
        .join("");
    quest_callbacks(region);
}

function quest_callbacks(region) {
    skyfc.notebook_dict[region].forEach(name => {
        const quest = skyfc.quests[skyfc.quest_dict[name]];
        const questdiv = document.getElementById(name);
        questdiv.querySelectorAll("input[name=state]").forEach(input => {
            input.addEventListener("change", () => {
                if (input.checked)
                    quest.state.value |= input.value;
                else
                    quest.state.value &= ~input.value;
            });
        });
        questdiv.querySelectorAll("input[name=bonus_bp]").forEach(input => {
            input.addEventListener("change", () => {
                if (input.validity.valid)
                    quest.bonus_bp.value = input.value;
                input.value = quest.bonus_bp.value;
            });
        });
        questdiv.querySelectorAll("input[name=mira]").forEach(input => {
            input.addEventListener("change", () => {
                if (input.validity.valid)
                    quest.mira.value = input.value;
                input.value = quest.mira.value;
            });
        });
        questdiv.querySelectorAll("input[name=progress]").forEach(input => {
            input.addEventListener("change", () => {
                if (input.checked)
                    quest.progress.value |= input.value;
                else
                    quest.progress.value &= ~input.value;
            });
        });
    });
}

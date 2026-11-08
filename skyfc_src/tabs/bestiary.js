export function create_bestiary() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    const battles_fought = `
    <div>
        <h3>Battles Fought:</h3>
        <input
            type="number"
            id="battles_fought"
            min=0
            max=${0xFFFF}
            step=1
            value=${skyfc.battles_fought.value}
        >
    </div>`;
    const battles_won = `
    <div>
        <h3>Battles Won:</h3>
        <input
            type="number"
            id="battles_won"
            min=0
            max=${0xFFFF}
            step=1
            value=${skyfc.battles_won.value}
        >
    </div>`;
    const battles_lost = `
    <div>
        <h3>Battles Lost:</h3>
        <input
            type="number"
            id="battles_lost"
            min=0
            max=${0xFFFF}
            step=1
            value=${skyfc.battles_lost.value}
        >
    </div>`;
    const battles_retreated = `
    <div>
        <h3>Battles Retreated From:</h3>
        <input
            type="number"
            id="battles_retreated"
            min=0
            max=${0xFFFF}
            step=1
            value=${skyfc.battles_retreated.value}
        >
    </div>`;
    const battles_retreated_evo = !skyfc.evo ? "" : `
    <div>
        <h3>Battles Retreated From (Evo):</h3>
        <input
            type="number"
            id="battles_retreated_evo"
            min=0
            max=${0xFFFF}
            step=1
            value=${skyfc.battles_retreated_evo.value}
        >
    </div>`;
    const enemies_defeated = !skyfc.evo ? "" : `
    <div>
        <h3>Enemies Defeated:</h3>
        <input
            type="number"
            id="enemies_defeated"
            min=0
            max=999999
            step=1
            value=${skyfc.enemies_defeated.value}
        >
    </div>`;
    const sbreaks = !skyfc.evo ? "" : `
    <div>
        <h3>S-Breaks Triggered:</h3>
        <input
            type="number"
            id="sbreaks"
            min=0
            max=999999
            step=1
            value=${skyfc.sbreaks.value}
        >
    </div>`;
    const preemptive_attacks = !skyfc.evo ? "" : `
    <div>
        <h3>Pre-emptive Attacks:</h3>
        <input
            type="number"
            id="preemptive_attacks"
            min=0
            max=999999
            step=1
            value=${skyfc.preemptive_attacks.value}
        >
    </div>`;
    const surprise_attacks = !skyfc.evo ? "" : `
    <div>
        <h3>Surprise Attacks:</h3>
        <input
            type="number"
            id="surprise_attacks"
            min=0
            max=999999
            step=1
            value=${skyfc.surprise_attacks.value}
        >
    </div>`;
    const retries = !skyfc.evo ? "" : `
    <div>
        <h3>Number of Retries:</h3>
        <input
            type="number"
            id="retries"
            min=0
            max=999999
            step=1
            value=${skyfc.retries.value}
        >
    </div>`;
    skyfcdiv.innerHTML = `
    <div>
        ${battles_fought}
        ${battles_won}
        ${battles_lost}
        ${battles_retreated}
        ${battles_retreated_evo}
        ${enemies_defeated}
        ${sbreaks}
        ${preemptive_attacks}
        ${surprise_attacks}
        ${retries}
    </div>`;
    bestiary_callbacks();
}

function bestiary_callbacks() {
    const battles_fought = document.getElementById("battles_fought");
    battles_fought.addEventListener("change", () => {
        if (battles_fought.validity.valid)
            skyfc.battles_fought.value = battles_fought.value;
        battles_fought.value = skyfc.battles_fought.value;
    });
    const battles_won = document.getElementById("battles_won");
    battles_fought.addEventListener("change", () => {
        if (battles_won.validity.valid)
            skyfc.battles_won.value = battles_won.value;
        battles_won.value = skyfc.battles_won.value;
    });
    const battles_lost = document.getElementById("battles_lost");
    battles_lost.addEventListener("change", () => {
        if (battles_lost.validity.valid)
            skyfc.battles_lost.value = battles_lost.value;
        battles_lost.value = skyfc.battles_lost.value;
    });
    const battles_retreated = document.getElementById("battles_retreated");
    battles_retreated.addEventListener("change", () => {
        if (battles_retreated.validity.valid)
            skyfc.battles_retreated.value = battles_retreated.value;
        battles_retreated.value = skyfc.battles_retreated.value;
    });
    if (skyfc.evo) {
        const battles_retreated_evo = document.getElementById("battles_retreated_evo");
        battles_retreated_evo.addEventListener("change", () => {
            if (battles_retreated_evo.validity.valid)
                skyfc.battles_retreated_evo.value = battles_retreated_evo.value;
            battles_retreated_evo.value = skyfc.battles_retreated_evo.value;
        });
        const enemies_defeated = document.getElementById("enemies_defeated");
        enemies_defeated.addEventListener("change", () => {
            if (enemies_defeated.validity.valid)
                skyfc.enemies_defeated.value = enemies_defeated.value;
            enemies_defeated.value = skyfc.enemies_defeated.value;
        });
        const sbreaks = document.getElementById("sbreaks");
        sbreaks.addEventListener("change", () => {
            if (sbreaks.validity.valid)
                skyfc.sbreaks.value = sbreaks.value;
            sbreaks.value = skyfc.sbreaks.value;
        });
        const preemptive_attacks = document.getElementById("preemptive_attacks");
        preemptive_attacks.addEventListener("change", () => {
            if (preemptive_attacks.validity.valid)
                skyfc.preemptive_attacks.value = preemptive_attacks.value;
            preemptive_attacks.value = skyfc.preemptive_attacks.value;
        });
        const surprise_attacks = document.getElementById("surprise_attacks");
        surprise_attacks.addEventListener("change", () => {
            if (surprise_attacks.validity.valid)
                skyfc.surprise_attacks.value = surprise_attacks.value;
            surprise_attacks.value = skyfc.surprise_attacks.value;
        });
        const retries = document.getElementById("retries");
        retries.addEventListener("change", () => {
            if (retries.validity.valid)
                skyfc.retries.value = retries.value;
            retries.value = skyfc.retries.value;
        });
    }
}

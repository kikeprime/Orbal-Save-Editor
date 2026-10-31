export function create_bestiary() {
    const skyscdiv = document.getElementById("skyscdiv");
    const battles_fought = `
    <div>
        <h3>Battles Fought:</h3>
        <input
            type="number"
            id="battles_fought"
            min=0
            max=${0xFFFF}
            step=1
            value=${window.skysc.battles_fought.value}
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
            value=${window.skysc.battles_won.value}
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
            value=${window.skysc.battles_lost.value}
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
            value=${window.skysc.battles_retreated.value}
        >
    </div>`;
    const battles_retreated_evo = !window.skysc.evo ? "" : `
    <div>
        <h3>Battles Retreated From (Evo):</h3>
        <input
            type="number"
            id="battles_retreated_evo"
            min=0
            max=${0xFFFF}
            step=1
            value=${window.skysc.battles_retreated_evo.value}
        >
    </div>`;
    const enemies_defeated = !window.skysc.evo ? "" : `
    <div>
        <h3>Enemies Defeated:</h3>
        <input
            type="number"
            id="enemies_defeated"
            min=0
            max=999999
            step=1
            value=${window.skysc.enemies_defeated.value}
        >
    </div>`;
    const sbreaks = !window.skysc.evo ? "" : `
    <div>
        <h3>S-Breaks Triggered:</h3>
        <input
            type="number"
            id="sbreaks"
            min=0
            max=999999
            step=1
            value=${window.skysc.sbreaks.value}
        >
    </div>`;
    const preemptive_attacks = !window.skysc.evo ? "" : `
    <div>
        <h3>Pre-emptive Attacks:</h3>
        <input
            type="number"
            id="preemptive_attacks"
            min=0
            max=999999
            step=1
            value=${window.skysc.preemptive_attacks.value}
        >
    </div>`;
    const surprise_attacks = !window.skysc.evo ? "" : `
    <div>
        <h3>Surprise Attacks:</h3>
        <input
            type="number"
            id="surprise_attacks"
            min=0
            max=999999
            step=1
            value=${window.skysc.surprise_attacks.value}
        >
    </div>`;
    const retries = `
    <div>
        <h3>Number of Retries:</h3>
        <input
            type="number"
            id="retries"
            min=0
            max=999999
            step=1
            value=${window.skysc.retries.value}
        >
    </div>`;
    const retries_evo = !window.skysc.evo ? "" : `
    <div>
        <h3>Number of Retries (Evo):</h3>
        <input
            type="number"
            id="retries_evo"
            min=0
            max=999999
            step=1
            value=${window.skysc.retries_evo.value}
        >
    </div>`;
    skyscdiv.innerHTML = `
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
        ${retries_evo}
    </div>`;
    bestiary_callbacks();
}

function bestiary_callbacks() {
    const battles_fought = document.getElementById("battles_fought");
    battles_fought.addEventListener("change", () => {
        if (battles_fought.validity.valid)
            window.skysc.battles_fought.value = battles_fought.value;
        battles_fought.value = window.skysc.battles_fought.value;
    });
    const battles_won = document.getElementById("battles_won");
    battles_fought.addEventListener("change", () => {
        if (battles_won.validity.valid)
            window.skysc.battles_won.value = battles_won.value;
        battles_won.value = window.skysc.battles_won.value;
    });
    const battles_lost = document.getElementById("battles_lost");
    battles_lost.addEventListener("change", () => {
        if (battles_lost.validity.valid)
            window.skysc.battles_lost.value = battles_lost.value;
        battles_lost.value = window.skysc.battles_lost.value;
    });
    const battles_retreated = document.getElementById("battles_retreated");
    battles_retreated.addEventListener("change", () => {
        if (battles_retreated.validity.valid)
            window.skysc.battles_retreated.value = battles_retreated.value;
        battles_retreated.value = window.skysc.battles_retreated.value;
    });
    const retries = document.getElementById("retries");
    retries.addEventListener("change", () => {
        if (retries.validity.valid)
            window.skysc.retries.value = retries.value;
        retries.value = window.skysc.retries.value;
    });
    if (window.skysc.evo) {
        const battles_retreated_evo = document.getElementById("battles_retreated_evo");
        battles_retreated_evo.addEventListener("change", () => {
            if (battles_retreated_evo.validity.valid)
                window.skysc.battles_retreated_evo.value = battles_retreated_evo.value;
            battles_retreated_evo.value = window.skysc.battles_retreated_evo.value;
        });
        const enemies_defeated = document.getElementById("enemies_defeated");
        enemies_defeated.addEventListener("change", () => {
            if (enemies_defeated.validity.valid)
                window.skysc.enemies_defeated.value = enemies_defeated.value;
            enemies_defeated.value = window.skysc.enemies_defeated.value;
        });
        const sbreaks = document.getElementById("sbreaks");
        sbreaks.addEventListener("change", () => {
            if (sbreaks.validity.valid)
                window.skysc.sbreaks.value = sbreaks.value;
            sbreaks.value = window.skysc.sbreaks.value;
        });
        const preemptive_attacks = document.getElementById("preemptive_attacks");
        preemptive_attacks.addEventListener("change", () => {
            if (preemptive_attacks.validity.valid)
                window.skysc.preemptive_attacks.value = preemptive_attacks.value;
            preemptive_attacks.value = window.skysc.preemptive_attacks.value;
        });
        const surprise_attacks = document.getElementById("surprise_attacks");
        surprise_attacks.addEventListener("change", () => {
            if (surprise_attacks.validity.valid)
                window.skysc.surprise_attacks.value = surprise_attacks.value;
            surprise_attacks.value = window.skysc.surprise_attacks.value;
        });
        const retries_evo = document.getElementById("retries_evo");
        retries_evo.addEventListener("change", () => {
            if (retries_evo.validity.valid)
                window.skysc.retries_evo.value = retries_evo.value;
            retries_evo.value = window.skysc.retries_evo.value;
        });
    }
}

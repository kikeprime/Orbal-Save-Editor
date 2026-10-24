export function create_log() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    let pages = "";
    for (let i = 1; i <= 9; i++) {
        pages += `<option value=${i}>Page ${i}</option>`;
    }
    skyfcdiv.innerHTML = `
    <div style="-webkit-text-size-adjust: 100%; text-size-adjust: 100%;">
        <select id="log_tabs">
            ${pages}
            <option value=10>Hidden</option>
        </select>
        <div id="message_log"></div>
    </div>`;
    const log_tabs = document.getElementById("log_tabs");
    function tab_sel() {
        const message_log = document.getElementById("message_log");
        message_log.innerHTML = window.skyfc.message_log
            .filter((entry, i) => (log_tabs.value - 1) * 111 <= i && i < log_tabs.value * 111)
            .map((entry, i) => create_entry((log_tabs.value - 1) * 111 + i))
            .join("");
        log_callbacks();
    }
    log_tabs.addEventListener("change", tab_sel);
    tab_sel();
}

function create_entry(idx) {
    const entry = window.skyfc.message_log[idx];
    return `
    <div>
        <h2>Entry: ${idx+1}</h2>
        <div style="display: flex; gap: 20px">
            <div>
                <h3>ID 1:</h3>
                <input
                    type="number"
                    name="id1-${idx}"
                    min=0
                    max=${0xFFFFFFFF}
                    step=1
                    value=${entry.id1.value}
                >
            </div>
            <div>
                <h3>ID 2:</h3>
                <input
                    type="number"
                    name="id2-${idx}"
                    min=0
                    max=${0xFFFFFFFF}
                    step=1
                    value=${entry.id2.value}
                >
            </div>
        </div>
        <div>
            <h3>Speaker:</h3>
            <input
                type="text"
                name=${idx}
                value="${entry.speaker}"
            >
        </div>
    </div>`;
}

function log_callbacks() {
    const message_log = document.getElementById("message_log");
    message_log.addEventListener("change", (e) => {
        if (e.target.type == "number") {
            const name = e.target.name.slice(0, 3);
            const idx = e.target.name.slice(4);
            const entry = window.skyfc.message_log[idx];
            if (e.target.validity.valid)
                entry[name].value = e.target.value;
            e.target.value = entry[name].value;
        }
        else {
            window.skyfc.message_log[e.target.name].speaker = e.target.value;
            e.target.value = window.skyfc.message_log[e.target.name].speaker;
        }
    });
}

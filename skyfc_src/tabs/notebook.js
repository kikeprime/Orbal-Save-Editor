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
            value=${window.skyfc.bp.value}
        >
    </div>`;
    skyfcdiv.innerHTML = `
    <div>
        ${bp}
    </div>`;
    notebook_callbacks();
}

function general_callbacks() {
    const bp = document.getElementById("bp");
    bp.addEventListener("change", () => {
        if (bp.validity.valid)
            window.skyfc.bp.value = bp.value;
        bp.value = window.skyfc.bp.value;
    });
}

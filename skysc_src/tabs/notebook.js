export function create_notebook() {
    const skyscdiv = document.getElementById("skyscdiv");
    const bp = `
    <div>
        <h3>BP:</h3>
        <input
            type="number"
            id="bp"
            min=0
            max=368
            step=1
            value=${window.skysc.bp.value}
        >
    </div>`;
    skyscdiv.innerHTML = `
    <div>
        ${bp}
    </div>`;
    notebook_callbacks();
}

function notebook_callbacks() {
    const bp = document.getElementById("bp");
    bp.addEventListener("change", () => {
        if (bp.validity.valid)
            window.skysc.bp.value = bp.value;
        bp.value = window.skysc.bp.value;
    });
}

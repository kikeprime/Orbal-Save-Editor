export function create_inventory() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    const inventory_options = Object.entries(window.skyfc.inventory_dict)
        .map(([label, value]) => `\n\t<option value=${value}>${label}</option>`)
        .join("");
    let inventory = "";
    for (let i = 0; i < window.skyfc.inventory.length; i++) {
        inventory += `
        <div>
            <h3>Slot ${i+1}:</h3>
            <div style="display: flex; align-items: center; gap: 20px">
                <select name=${i}>${inventory_options}</select>
                <input
                    type="number"
                    name=${i}
                    value=${window.skyfc.inventory[i] >>> 16}
                    min=0
                    max=99
                    step=1
                >
            </div>
        </div>`;
    }
    const sepith = window.skyfc.element_list
        .map((label, i) => `
        <label style="display: flex; align-items: center; gap: 10px">
            ${label}:
            <input
                type="number"
                name=${i}
                value=${window.skyfc.sepith[i]}
                min=0
                max=999999
                step=1
            >
        </label>`)
        .join("");
    skyfcdiv.innerHTML = `
    <div style="display: flex; gap: 50px">
        <div id="inventory" style="-webkit-text-size-adjust: 100%; text-size-adjust: 100%;">
            ${inventory}
        </div>
        <div id="sepith">
            <h3>Sepith:</h3>
            ${sepith}
        </div>
    </div>`;
    inventory_callbacks();
}

function inventory_callbacks() {
    const inventory = document.getElementById("inventory");
    inventory.querySelectorAll("select").forEach(select => {
        select.value = window.skyfc.inventory[select.name] & 0xFFFF;
    });
    Array.from(inventory.children).forEach(slot => {
        const select = slot.querySelector("select");
        const input = slot.querySelector("input");
        slot.addEventListener("change", () => {
            // I have no idea why addition doesn't work instead of or.
            if (input.validity.valid)
                window.skyfc.inventory[select.name] = (input.value << 16) | select.value;
            else {
                const quantity = window.skyfc.inventory[select.name] >>> 16;
                window.skyfc.inventory[select.name] = (quantity << 16) | select.value;
            }
            input.value = window.skyfc.inventory[select.name] >>> 16;
        });
    });
    const sepith = document.getElementById("sepith");
    sepith.addEventListener("change", (e) => {
        if (e.target.validity.valid)
            window.skyfc.sepith[e.target.name] = e.target.value;
        e.target.value = window.skyfc.sepith[e.target.name];
    });
}

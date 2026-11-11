export function create_recipe_book() {
    const skyfcdiv = document.getElementById("skyfcdiv");
    const sitdown_meals = !skyfc.evo ? "" : `
    <div>
        <h3>Sit-Down Meals Made:</h3>
        <input
            type="number"
            id="sitdown_meals"
            min=0
            max=999999
            step=1
            value=${skyfc.sitdown_meals.value}
        >
    </div>`;
    const togo_meals = !skyfc.evo ? "" : `
    <div>
        <h3>To-Go Meals Made:</h3>
        <input
            type="number"
            id="togo_meals"
            min=0
            max=999999
            step=1
            value=${skyfc.togo_meals.value}
        >
    </div>`;
    const recipes = Object.entries(skyfc.recipe_dict)
        .map(([label, value]) => `
        <label style="display: flex; align-items: center; gap: 20px">
            ${label}
            <input
                type="checkbox"
                value=${value}
                ${skyfc.recipes[Math.floor(value / 16)] & (1 << value % 16) ? "checked" : ""}
            >
        </label>`)
        .join("");
    skyfcdiv.innerHTML = `
    <div>
        ${sitdown_meals}
        ${togo_meals}
        <div id="recipes">
            ${recipes}
        </div>
    </div>`;
    recipe_book_callbacks();
}

function recipe_book_callbacks() {
    if (skyfc.evo) {
        const sitdown_meals = document.getElementById("sitdown_meals");
        sitdown_meals.addEventListener("change", () => {
            if (sitdown_meals.validity.valid)
                skyfc.sitdown_meals.value = sitdown_meals.value;
            sitdown_meals.value = skyfc.sitdown_meals.value;
        });
        const togo_meals = document.getElementById("togo_meals");
        togo_meals.addEventListener("change", () => {
            if (togo_meals.validity.valid)
                skyfc.togo_meals.value = togo_meals.value;
            togo_meals.value = skyfc.togo_meals.value;
        });
    }
    const recipes = document.getElementById("recipes");
    recipes.addEventListener("change", (e) => {
        const idx = Math.floor(e.target.value / 16);
        const bit = e.target.value % 16;
        if (e.target.checked)
            skyfc.recipes[idx] |= (1 << bit);
        else
            skyfc.recipes[idx] &= ~(1 << bit);
    });
}

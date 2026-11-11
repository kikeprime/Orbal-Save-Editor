export function create_recipe_book() {
    const skyscdiv = document.getElementById("skyscdiv");
    const sitdown_meals = !skysc.evo ? "" : `
    <div>
        <h3>Sit-Down Meals Made:</h3>
        <input
            type="number"
            id="sitdown_meals"
            min=0
            max=999999
            step=1
            value=${skysc.sitdown_meals.value}
        >
    </div>`;
    const togo_meals = !skysc.evo ? "" : `
    <div>
        <h3>To-Go Meals Made:</h3>
        <input
            type="number"
            id="togo_meals"
            min=0
            max=999999
            step=1
            value=${skysc.togo_meals.value}
        >
    </div>`;
    const recipes = Object.entries(skysc.recipe_dict)
        .map(([label, value]) => `
        <label style="display: flex; align-items: center; gap: 20px">
            ${label}
            <input
                type="checkbox"
                value=${value}
                ${skysc.recipes[Math.floor(value / 16)] & (1 << value % 16) ? "checked" : ""}
            >
        </label>`)
        .join("");
    skyscdiv.innerHTML = `
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
    if (skysc.evo) {
        const sitdown_meals = document.getElementById("sitdown_meals");
        sitdown_meals.addEventListener("change", () => {
            if (sitdown_meals.validity.valid)
                skysc.sitdown_meals.value = sitdown_meals.value;
            sitdown_meals.value = skysc.sitdown_meals.value;
        });
        const togo_meals = document.getElementById("togo_meals");
        togo_meals.addEventListener("change", () => {
            if (togo_meals.validity.valid)
                skysc.togo_meals.value = togo_meals.value;
            togo_meals.value = skysc.togo_meals.value;
        });
    }
    const recipes = document.getElementById("recipes");
    recipes.addEventListener("change", (e) => {
        const idx = Math.floor(e.target.value / 16);
        const bit = e.target.value % 16;
        if (e.target.checked)
            skysc.recipes[idx] |= (1 << bit);
        else
            skysc.recipes[idx] &= ~(1 << bit);
    });
}

export function create_recipe_book() {
    const skyscdiv = document.getElementById("skyscdiv");
    const sitdown_meals = `
    <div>
        <h3>Sit-Down Meals Made:</h3>
        <input
            type="number"
            id="sitdown_meals"
            min=0
            max=999999
            step=1
            value=${window.skysc.sitdown_meals.value}
        >
    </div>`;
    const togo_meals = `
    <div>
        <h3>To-Go Meals Made:</h3>
        <input
            type="number"
            id="togo_meals"
            min=0
            max=999999
            step=1
            value=${window.skysc.togo_meals.value}
        >
    </div>`;
    skyscdiv.innerHTML = `
    <div>
        ${sitdown_meals}
        ${togo_meals}
    </div>`;
    recipe_book_callbacks();
}

function recipe_book_callbacks() {
    const sitdown_meals = document.getElementById("sitdown_meals");
    sitdown_meals.addEventListener("change", () => {
        if (sitdown_meals.validity.valid)
            window.skysc.sitdown_meals.value = sitdown_meals.value;
        sitdown_meals.value = window.skysc.sitdown_meals.value;
    });
    const togo_meals = document.getElementById("togo_meals");
    togo_meals.addEventListener("change", () => {
        if (togo_meals.validity.valid)
            window.skysc.togo_meals.value = togo_meals.value;
        togo_meals.value = window.skysc.togo_meals.value;
    });
}

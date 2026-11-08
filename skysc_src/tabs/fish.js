export function create_fishing_book() {
    const skyscdiv = document.getElementById("skyscdiv");
    const fish_options = skysc.fish_list
        .map(fish => `<option value=${skysc.fish_dict[fish]}>${fish}</option>`)
        .join("");
    skyscdiv.innerHTML = `
    <div>
        <select id=skyscfishtabs>${fish_options}</select>
        <div id="skyscfishdiv"></div>
    </div>`;
    const skyscfishtabs = document.getElementById("skyscfishtabs");
    create_fish(skyscfishtabs.value);
    skyscfishtabs.addEventListener("change", () => create_fish(skyscfishtabs.value));
}

function create_fish(id) {
    const skyscfishdiv = document.getElementById("skyscfishdiv");
    const spot_options = Object.entries(skysc.fishing_spot_dict)
        .map(([label, value]) => `<option value=${value}>${label}</option>`)
        .join("");
    const fish = skysc.fishing_book[id];
    const record_size = `
    <div>
        <h3>Record Size:</h3>
        <input
            type=number
            id="record_size"
            value=${fish.record_size.value}
            min=0
            max=9999
            step=1
        >
    </div>`;
    const spots = fish.spots
        .map((spot, i) => `<select name=${i}>${spot_options}</select>`)
        .join("");
    const counts = Object.entries(skysc.fishing_spot_dict)
        .filter(([spot, i]) => i > 0)
        .map(([spot, i]) => `
        <label style="display: flex; align-items: center; gap: 10px">
            ${spot}:
            <input
                type="number"
                name=${i}
                value=${fish.counts[i]}
                min=0
                max=9999
                step=1
            >
        </label>`)
        .join("");
    skyscfishdiv.innerHTML = `
    <div>
        ${record_size}
        <h3>Spots:</h3>
        <div id="fishing_spots">
            ${spots}
        </div>
        <h3>Caught At:</h3>
        <div id="fishing_counts">
            ${counts}
        </div>
    </div>`;
    fishing_book_callbacks(id);
}

function fishing_book_callbacks(id) {
    const fish = skysc.fishing_book[id];
    const record_size = document.getElementById("record_size");
    record_size.addEventListener("change", () => {
        if (record_size.validity.valid)
            fish.record_size.value = record_size.value;
        record_size.value = fish.record_size.value;
    });
    const fishing_spots = document.getElementById("fishing_spots")
    fishing_spots.querySelectorAll("select").forEach(select => {
        select.value = fish.spots[select.name];
        select.addEventListener("change", () => {
            fish.spots[select.name] = select.value;
        });
    });
    const fishing_counts = document.getElementById("fishing_counts")
    fishing_counts.addEventListener("change", (e) => {
        if (e.target.validity.valid)
            fish.counts[e.target.name] = e.target.value;
        e.target.value = fish.counts[e.target.name];
    });
}

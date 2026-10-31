import * as dt from "../skyfc_src/datatypes.js"
import dicts from "./skysc_dicts.js"
import * as h from "./skysc_helper.js"
import * as tabs from "./tabs/index.js"
import yamaneko_checksum from "../skyfc_src/yamaneko_checksum.js"

export default class SkySC {
    constructor(file, evo) {
        this.file = file;
        this.evo = evo;
        this.sysfile = null;
        dicts(this);
        this.loaded = this._load();
    }
    
    async _load() {
        const buffer = await this.file.arrayBuffer();
        this.buffer = new Uint8Array(buffer);
        this.data = new DataView(buffer);
        this.parse_data();
    }
    
    async load_sys(file) {
        this.sysfile = file;
        const buffer = await this.sysfile.arrayBuffer();
        this.sysbuffer = new Uint8Array(buffer);
        this.sysdata = new DataView(buffer);
    }
    
    parse_data() {
        this.estelle = new h.SkySCCharacter("Estelle Bright", 0xE0, this.data);
        this.joshua = new h.SkySCCharacter("Joshua Bright", 0xE0+0x3C, this.data);
        this.scherazard = new h.SkySCCharacter("Scherazard Harvey", 0xE0+2*0x3C, this.data);
        this.olivier = new h.SkySCCharacter("Olivier Lenheim", 0xE0+3*0x3C, this.data);
        this.kloe = new h.SkySCCharacter("Kloe Rinz", 0xE0+4*0x3C, this.data);
        this.agate = new h.SkySCCharacter("Agate Crossner", 0xE0+5*0x3C, this.data);
        this.tita = new h.SkySCCharacter("Tita Russell", 0xE0+6*0x3C, this.data);
        this.zin = new h.SkySCCharacter("Zin Vathek", 0xE0+7*0x3C, this.data);
        this.kevin = new h.SkySCCharacter("Kevin Graham", 0xE0+8*0x3C, this.data);
        this.anelace = new h.SkySCCharacter("Anelace Elfead", 0xE0+9*0x3C, this.data);
        this.josette = new h.SkySCCharacter("Josette Capua", 0xE0+10*0x3C, this.data);
        this.mueller = new h.SkySCCharacter("Mueller Vander", 0xE0+11*0x3C, this.data);
        this.unkchar = new h.SkySCCharacter("?", 0xE0+12*0x3C, this.data);
        this.kurt = new h.SkySCCharacter("Kurt Nardin", 0xE0+13*0x3C, this.data);
        this.julia = new h.SkySCCharacter("Julia Schwarz", 0xE0+14*0x3C, this.data);
        this.characters = [
            this.estelle, this.joshua,
            this.scherazard, this.olivier,
            this.kloe, this.agate,
            this.tita, this.zin,
            this.kevin, this.anelace,
            this.josette, this.mueller,
            this.unkchar,
            this.kurt, this.julia,
        ];
        // Like with Sky FC there is 1024 slots of space.
        this.inventory = dt.Array(dt.U32, 230, 0x3B60, this.data);
        
        this.party = dt.Array(dt.U32, 8, 0x1ADD4, this.data);
        this.mira = new dt.U32(0x1ADFC, this.data);
        this.bp = new dt.U32(0x1AE00, this.data);
        this.sepith = dt.Array(dt.U32, 7, 0x1AE04, this.data);
        this.playtime = new dt.U32(0x1AE40, this.data);
        
        this.difficulty = new dt.U8(0x2037D, this.data);
        
        this.battles_fought = new dt.U16(0x2058C, this.data);
        this.battles_lost = new dt.U16(0x2058E, this.data);
        this.battles_won = new dt.U16(0x20590, this.data);
        this.battles_retreated = new dt.U16(0x20594, this.data);
        this.retries = new dt.U16(0x20596, this.data);
        // These had my Sky FC Evo clear save values that I used to create my save.
        this.battles_fought_fc = new dt.U16(0x20598, this.data);
        this.battles_lost_fc = new dt.U16(0x2059A, this.data);
        this.battles_won_fc = new dt.U16(0x2059C, this.data);
        this.battles_retreated_fc = new dt.U16(0x205A0, this.data);
        
        // Evolution stuff
        // Starts at 0x29AC8
        if (this.evo) {
            this.retries_evo = new dt.U32(0x29B0C, this.data); // duplicate field?
            this.sbreaks = new dt.U32(0x29B10, this.data);
            this.preemptive_attacks = new dt.U32(0x29B14, this.data);
            this.enemies_defeated = new dt.U32(0x29B18, this.data);
            this.sitdown_meals = new dt.U32(0x29B1C, this.data);
            this.togo_meals = new dt.U32(0x29B20, this.data);
            this.surprise_attacks = new dt.U32(0x29B24, this.data);
            this.message_log = []; // Sky FC has 1024 slots this is the double of that.
            for (let i = 0; i < 2048; i++) {
                this.message_log.push(new h.SkySCMessageLog(0x29B28+i*0x28, this.data, this.buffer));
            }
            this.battles_retreated_evo = new dt.U32(0x3DBBC, this.data); // duplicate field?
        }
    }

    save() {
        yamaneko_checksum(this.data);
        return new Blob([this.buffer], { type: "application/octet-stream" });
    }
    
    syssave() {
        return new Blob([this.sysbuffer], { type: "application/octet-stream" });
    }
    
    menu() {
        const app = document.getElementById("app");
        const tabs_skysc_html = `
        <div>
            <h2>Sky SC Tabs:</h2>
            <select id="tabs_skysc">
                <option value="General">General</option>
                <option value="Characters">Characters</option>
                <option value="Inventory">Inventory</option>
                <option value="Bracer Notebook">Bracer Notebook</option>
                <option value="Monster Guide">Monster Guide</option>
                ${this.evo ? `<option value="Recipe Book">Recipe Book</option>` : ""}
                ${this.evo ? `<option value="Message Log">Message Log</option>` : ""}
                <option value="Config">Config</option>
                <option value="Misc">Misc</option>
            </select>
        </div>`;
        app.innerHTML = `${tabs_skysc_html}<div id="skyscdiv"></div>`;
        const tabs_skysc = document.getElementById("tabs_skysc");
        const skyscdiv = document.getElementById("skyscdiv");
        tabs.create_general();
        tabs_skysc.addEventListener("change", () => {
            switch (tabs_skysc.value) {
                case "General": {
                    tabs.create_general();
                    break;
                }
                case "Characters": {
                    tabs.create_characters();
                    break;
                }
                case "Inventory": {
                    tabs.create_inventory();
                    break;
                }
                case "Bracer Notebook": {
                    tabs.create_notebook();
                    break;
                }
                case "Monster Guide": {
                    tabs.create_bestiary();
                    break;
                }
                case "Recipe Book": {
                    tabs.create_recipe_book();
                    break;
                }
                case "Message Log": {
                    tabs.create_log();
                    break;
                }
                /*
                case "Config": {
                    tabs.create_config();
                    break;
                }
                case "Misc": {
                    tabs.create_misc();
                    break;
                }
                */
                default: {
                    skyscdiv.innerHTML = "";
                    break;
                }
            }
        });
    }
    
    get_playtime(fps = 1) {
        return [
            Math.floor(Math.floor(this.playtime.value / fps) / 3600),
            Math.floor((Math.floor(this.playtime.value / fps) % 3600) / 60),
            (Math.floor(this.playtime.value / fps) % 3600) % 60,
            this.playtime.value % fps,
            Math.floor((this.playtime.value % fps * 100) / 60),
        ];
    }
    
    set_playtime(hours, minutes, seconds, fraction, fps = 1) {
        this.playtime.value = (hours * 3600 + minutes * 60 + seconds) * fps + fraction;
    }
    
    toString() {
        return `SkySC(
    Evolution: ${this.evo},
    Playtime: ${this.get_playtime()},
    Difficulty: ${["Normal", "Hard", "Nightmare", "Easy"][this.difficulty.value]},
${String(this.estelle)},
${String(this.joshua)},
)`;
    }
}

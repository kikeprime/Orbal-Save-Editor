import * as dt from "./datatypes.js"
import dicts from "./skyfc_dicts.js"
import * as h from "./skyfc_helper.js"
import * as tabs from "./tabs/index.js"
import yamaneko_checksum from "./yamaneko_checksum.js"

export default class SkyFC {
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
        this.estelle = new h.SkyFCCharacter("Estelle Bright", 0xE0, this.data);
        this.joshua = new h.SkyFCCharacter("Joshua Bright", 0xE0+0x34, this.data);
        this.scherazard = new h.SkyFCCharacter("Scherazard Harvey", 0xE0+2*0x34, this.data);
        this.olivier = new h.SkyFCCharacter("Olivier Lenheim", 0xE0+3*0x34, this.data);
        this.kloe = new h.SkyFCCharacter("Kloe Rinz", 0xE0+4*0x34, this.data);
        this.agate = new h.SkyFCCharacter("Agate Crossner", 0xE0+5*0x34, this.data);
        this.tita = new h.SkyFCCharacter("Tita Russell", 0xE0+6*0x34, this.data);
        this.zin = new h.SkyFCCharacter("Zin Vathek", 0xE0+7*0x34, this.data);
        this.characters = [
            this.estelle, this.joshua,
            this.scherazard, this.olivier,
            this.kloe, this.agate,
            this.tita, this.zin,
        ];
        // RA Code Notes documents 230 slots though for me until the next non-zero data it has 1024 slots of space.
        this.inventory = dt.Array(dt.U32, 230, 0x0F10, this.data);
        
        this.party = dt.Array(dt.U32, 8, 0x11C78, this.data);
        this.mira = new dt.U32(0x11CA0, this.data);
        this.bp = new dt.U32(0x11CA4, this.data);
        this.sepith = dt.Array(dt.U32, 7, 0x11CA8, this.data);
        this.playtime = new dt.U32(0x11CE4, this.data);
        
        this.battles_fought = new dt.U16(0x11F04, this.data);
        this.battles_lost = new dt.U16(0x11F06, this.data);
        this.battles_won = new dt.U16(0x11F08, this.data);
        this.battles_retreated = new dt.U16(0x11F0C, this.data);
        
        this.difficulty = new dt.U8(0x16DE6, this.data);
        
        // Evolution stuff
        // Starts at 0x16FEC
        if (this.evo) {
            this.retries = new dt.U16(0x17030, this.data);
            this.battles_retreated_evo = new dt.U16(0x17034, this.data); // duplicate field?
            this.sbreaks = new dt.U32(0x1726C, this.data);
            this.preemptive_attacks = new dt.U32(0x17270, this.data);
            this.enemies_defeated = new dt.U32(0x17274, this.data);
            this.sitdown_meals = new dt.U32(0x1727C, this.data);
            this.togo_meals = new dt.U32(0x17280, this.data);
            this.surprise_attacks = new dt.U32(0x17284, this.data);
            this.message_log = [];
            for (let i = 0; i < 1024; i++) {
                this.message_log.push(new h.SkyFCMessageLog(0x17288+i*0x28, this.data, this.buffer));
            }
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
        const tabs_skyfc_html = `
        <div>
            <h2>Sky FC Tabs:</h2>
            <select id="tabs_skyfc">
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
        app.innerHTML = `${tabs_skyfc_html}<div id="skyfcdiv"></div>`;
        const tabs_skyfc = document.getElementById("tabs_skyfc");
        const skyfcdiv = document.getElementById("skyfcdiv");
        tabs.create_general();
        tabs_skyfc.addEventListener("change", () => {
            switch (tabs_skyfc.value) {
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
                    skyfcdiv.innerHTML = "";
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
        return `SkyFC(
    Evolution: ${this.evo},
    Playtime: ${this.get_playtime()},
    Difficulty: ${["Normal", "Hard", "Nightmare", "Easy"][this.difficulty.value]},
${String(this.estelle)},
${String(this.joshua)},
)`;
    }
}

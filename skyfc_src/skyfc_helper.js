import * as dt from "./datatypes.js"

export class SkyFCCharacter {
    constructor(name, offset, data) {
        this.name = name;
        this.offset = offset;
        this.data = data;
        this.idx = (offset - 0xE0) / 0x34;
        // Stats
        this.level = new dt.U16(offset+0x00, data);
        this.hp = new dt.U16(offset+0x02, data);
        this.maxhp = new dt.U16(offset+0x04, data);
        this.ep = new dt.U16(offset+0x06, data);
        this.maxep = new dt.U16(offset+0x08, data);
        this.cp = new dt.U16(offset+0x0A, data);
        this.exp = new dt.U32(offset+0x0C, data);
        this.str = new dt.U16(offset+0x10, data);
        this.def = new dt.U16(offset+0x12, data);
        this.ats = new dt.U16(offset+0x14, data);
        this.adf = new dt.U16(offset+0x16, data);
        this.dex = new dt.U16(offset+0x18, data);
        this.agl = new dt.U16(offset+0x1A, data);
        this.mov = new dt.U16(offset+0x1C, data);
        this.spd = new dt.U16(offset+0x1E, data);
        this.maxcp = new dt.U16(offset+0x20, data); // Seems to be 200 for everybody which makes Max CP likely.
        this.rng = new dt.U16(offset+0x26, data);
        // Equipment
        this.weapon = new dt.U16(0x0280 + this.idx * 0x0A + 0x00, data);
        this.armor = new dt.U16(0x0280 + this.idx * 0x0A + 0x02, data);
        this.boots = new dt.U16(0x0280 + this.idx * 0x0A + 0x04, data);
        this.accessory1 = new dt.U16(0x0280 + this.idx * 0x0A + 0x06, data);
        this.accessory2 = new dt.U16(0x0280 + this.idx * 0x0A + 0x08, data);
        // 2 shorts where the first is the art ID and the 2nd is 1 if the slot is filled else 0.
        this.arts = dt.Array(dt.U32, 80, 0x02D0 + this.idx * 0x0140, data);
        // Again 2 shorts but the 2nd's high byte has value here so needs more investigation.
        this.crafts = dt.Array(dt.U32, 10, 0x0CD0 + this.idx * 0x28, data);
        this.scrafts = dt.Array(dt.U16, 4, 0x0E10 + this.idx * 0x08, data);
        // 2 shorts, quartz ID and slot state
        this.orbment = dt.Array(dt.U32, 6, 0x0E50 + this.idx * 0x18, data);
    }
    
    toString() {
        return `${this.name}(
    Level: ${this.level.value}
    HP: ${this.hp.value}
    Max HP: ${this.maxhp.value}
    EP: ${this.ep.value}
    Max EP: ${this.maxep.value}
    CP: ${this.cp.value}
    Max CP: ${this.maxcp.value}
    EXP: ${this.exp.value}
    STR: ${this.str.value}
    DEF: ${this.def.value}
    ATS: ${this.ats.value}
    ADF: ${this.adf.value}
    SPD: ${this.spd.value}
    MOV: ${this.mov.value}
    DEX: ${this.dex.value}
    AGL: ${this.agl.value}
    RNG: ${this.rng.value}
)`;
    }
}

export class SkyFCMessageLog {
    constructor(offset, data, buffer) {
        this.offset = offset;
        this.data = data;
        this.buffer = buffer;
        this.id1 = new dt.U32(offset+0x00, data);
        this.id2 = new dt.U32(offset+0x04, data);
    }
    
    get speaker() {
        const buf = this.buffer.subarray(this.offset+0x08, this.offset+0x28);
        const end = buf.indexOf(0);
        return new TextDecoder().decode(buf.subarray(0, end != -1 ? end : 0x20));
    }
    
    set speaker(value) {
        const s = new TextEncoder().encode(value);
        const l = Math.min(s.length, 0x1F);
        this.buffer.set(s.subarray(0, l), this.offset+0x08);
        this.buffer[this.offset+0x08+l] = 0;
    }
    
    toString() {
        return `${this.speaker}(
    ID 1: ${this.id1.value}
    ID 2: ${this.id2.value}
)`;
    }
}

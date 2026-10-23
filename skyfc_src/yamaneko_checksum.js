import * as dt from "./datatypes.js"

// Yamaneko Engine Checksum Algorithm
// Comes from unknowndatax's Ys VIII Save Editor
export default function yamaneko_checksum(data) {
    const pos = data.byteLength - 8;
    const end = data.byteLength - 11;
    const checksum1 = new dt.S32(pos, data);
    const checksum2 = new dt.U32(pos+4, data);
    checksum1.value = 0;
    checksum2.value = 0;
    let i = 0;
    for (i = 0; i < end; i += 4) {
        const temp = new dt.S32(i, data);
        checksum1.value += temp.value;
        checksum2.value += ~temp.value;
    }
    if (i != pos) {
        let w14 = 0;
        if (i < pos) {
            w14 = data.byteLength - i;
            let x15 = data.byteLength - 9;
            let x16 = 0;
            if ((w14 & 1) != 0) {
                w14 = new dt.S32(i << 2, data).value;
                x16 = i + 1;
            }
            else {
                w14 = 0;
                x16 = i;
            }
            if (x15 != i) {
                let p = (x16 << 2) + 4;
                for (let j = pos - x16; j != 0; j -= 2) {
                    const temp = new dt.S32(p-4, data);
                    w14 = temp.value + (w14 << 8);
                    temp.offset += 4;
                    p += 8;
                    w14 = temp.value + (w14 << 8);
                }
            }
        }
        checksum1.value *= 2;
        checksum2.value += ~w14;
    }
}


export function getYYYYMMddHHmm(dt: Date): string {
    return dt.getFullYear().toString() +
            pad(dt.getMonth()+1).toString() +
            pad(dt.getDate()).toString() +
            pad(dt.getHours()).toString() +
            pad(dt.getMinutes()).toString()
}

function pad(n: number) {
    return n < 10 ? '0'+n : n
}
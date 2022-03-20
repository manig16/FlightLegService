
export function getYYYYMMddHHmm(dt: Date) {
    return dt.getFullYear().toString() +
            dt.getMonth().toString() +
            dt.getDate().toString() +
            dt.getHours().toString() +
            dt.getMinutes().toString()
}
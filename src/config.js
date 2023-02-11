const ROLE = Object.freeze({
    0: "user",
    1: "admin"
})
const COMPLEX = Object.freeze({
    e: "egyszerű",
    g: "gyors",
    k: "könnyű",
    m: "macerás",
    n: "nehéz",
    z: "közepesen nehéz"
})
const TYPES = Object.freeze({
    s: {
        key: "s",
        value: "leves"},    // soup leves
    m: {
        key: "m",    
        value: "főétel"},   // main főétel
    c: {
        key: "c",
        value: "sütemény"}, // cake sütemény
    o: {
        key: "o",
        value: "egyéb"}     // other egyéb
})

export { 
    ROLE,
    TYPES,
    COMPLEX
}

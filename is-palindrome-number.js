module.exports = (number) => {
    if(typeof number !== 'number'){
        throw TypeError(`expects number got ` + (typeof number));
    }
    return number.toString() === [...number.toString()].reverse().join('');
}
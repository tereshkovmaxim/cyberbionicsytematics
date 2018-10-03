function searchProperty(object, property) {
    return property.match(/\w+/ig).reduce((obj, item) => {
        return obj[item] ? obj[item] : (function () { throw new Error('property no found'); }());
    }, object);
}
//# sourceMappingURL=homework-3.js.map
export function loadExtensions() {
    if (!string.prototype.toNounours) {
        string.prototype.toNounours = function () {
            return new Nounours(this)
        };
    }
}
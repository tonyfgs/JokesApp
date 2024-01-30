// Fonction pour étendre le prototype d'Array
export function loadExtensions() {
    if (!Array.prototype.displayJoke) {
        Array.prototype.displayJoke = function () {
            return this.map((item) => item.description() + '\n')
        };
    }
}

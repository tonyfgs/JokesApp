// Fonction pour étendre le prototype d'Array avec une nouvelle méthode print
export function loadExtensions() {
    // Ajout de la méthode print au prototype d'Array
    if (!Array.prototype.displayJoke) {
        Array.prototype.displayJoke = function () {
            return this.map((item) => item.description() + '\n')
        };
    }
}

export {}

// Extension de l'interface globale Array avec une nouvelle méthode print
declare global {
    interface Array<T> {
        displayJoke(): string[];
    }
}

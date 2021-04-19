class _Text {

    /**
     * Verifies if the given string contains a char
     * @param {string} text The string to verify
     * @param {char} char The char
     * @returns {boolean} True or false
     */
    static hasChar(text, char) {

        if (char.length > 1) {
            return false;
        }

        let i = text.length;

        while (i--) {
            if (text[i] == char) {
                return true;
            }
        }

        return false;
    }

}
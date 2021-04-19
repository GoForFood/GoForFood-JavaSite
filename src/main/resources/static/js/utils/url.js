class _URL {

    static getCurrentURL() {
        return location.protocol + "//" + location.hostname + location.pathname;
    }

    /**
    * @param {string} url The URL to insert the arg
    * @param {string} key The name of argument
    * @param {string} value His Value
    * @returns {string} The new URL
    */
    static insertArg(url, key, value) {
        let urlObject = new URL(url);
        urlObject.searchParams.set(key, value);
        return urlObject.toString();
    }

    /**
     * 
     * @param {string} key The name of argument
     * @param {string} value His Value
     * @returns {string} The new URL
     */
    static insertCurrentLocationArg(key, value) {
        return _URL.insertArg(location.href, key, value);
    }
}


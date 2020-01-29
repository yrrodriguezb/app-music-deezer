class ServiceKeys {
  constructor() {
    this.KEY  = undefined;
    this.HOST = undefined;
    this.EXISTS_KEYS_API_DEEZER = false;

    this.getKeys();
  }

  getKeys() {
    const api_deezer = localStorage.getItem("API_DEEZER")
    this.EXISTS_KEYS_API_DEEZER =  api_deezer ? true : false;
    
    if (this.EXISTS_KEYS_API_DEEZER) {
      const keys = JSON.parse(api_deezer);

      this.HOST = keys.HOST;
      this.KEY = keys.KEY;
    }

    return api_deezer;
  }

  saveKeys(host, key) {
    const DATA = JSON.stringify({
      HOST: host,
      KEY: key
    });

    localStorage.setItem("API_DEEZER", DATA);
  }
}

export default new ServiceKeys();

class Haveibeenpwned {
  constructor($http) {
    this.$http = $http;
    this.endpoint = "https://api.pwnedpasswords.com/range/";
  }
  get(hash) {
    const prefix = hash.substring(0, 5);
    const suffix = hash.substring(5, hash.length).toUpperCase();

    return this.$http.get(`${this.endpoint}${prefix}`).then(response => {
      const hashes = response.data.split("\n");
      const foundHash = hashes.find(e => e.split(":")[0] === suffix);
      return !!foundHash;
    });
  }
}

Haveibeenpwned.$inject = ["$http"];

export default Haveibeenpwned;

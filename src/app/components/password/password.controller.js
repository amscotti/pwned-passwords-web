export default class PasswordCtrl {
  constructor($q, haveibeenpwned, hasing) {
    this.$q = $q;
    this.hasing = hasing;
    this.haveibeenpwned = haveibeenpwned;

    this.toCheck = "";
    this.isFound = false;
    this.lookingUp = false;
  }

  lookUp() {
    this.lookedUp = false;
    if (this.toCheck) {
      this.$q
        .when(this.hasing.sha1(this.toCheck))
        .then(hash => this.haveibeenpwned.get(hash))
        .then(data => (this.isFound = data))
        .then(() => {
          this.lookedUp = true;
        });
    }
  }
}

PasswordCtrl.$inject = ["$q", "haveibeenpwned", "hasing"];

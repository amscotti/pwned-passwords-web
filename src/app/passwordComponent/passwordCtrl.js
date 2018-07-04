export class PasswordCtrl {
  constructor (haveibeenpwned, hasing) {
    this.hasing = hasing
    this.haveibeenpwned = haveibeenpwned

    this.toCheck = ''
    this.isFound = false
  }

  lookUp () {
    if (this.toCheck) {
      this.haveibeenpwned.get(this.hasing.sha1(this.toCheck)).then(data => {
        this.isFound = data
      })
    } else {
      this.isFound = false
    }
  }
}

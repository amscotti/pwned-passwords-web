let HaveibeenpwnedService = $http => {
  const endpoint = 'https://api.pwnedpasswords.com/range/'
  return {
    get: hash => {
      const prefix = hash.substring(0, 5)
      const suffix = hash.substring(5, hash.length).toUpperCase()

      return $http.get(`${endpoint}${prefix}`).then(response => {
        const hashes = response.data.split('\n')
        const foundHash = hashes.find(e => e.split(':')[0] === suffix)
        return !!foundHash
      })
    }
  }
}

export { HaveibeenpwnedService }

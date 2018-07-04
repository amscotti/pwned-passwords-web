import sha1 from 'js-sha1'

const HasingService = () => {
  return {
    sha1: message => sha1(message)
  }
}

export { HasingService }

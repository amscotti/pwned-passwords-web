# Pwned Passwords Web UI
Web UI for checking to see if your password has been compromised in any data breach

Try it out at https://amscotti.github.io/pwned-passwords-web/

## How Does this work
* This is using the [haveibeenpwned](https://haveibeenpwned.com/API/v2) Range API
* What you type for the password isn't sent to the API, a SHA1 hash is created and only the first five characters are sent to the API. So, if your password is `password`, the the SHA1 is `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8`, the first five characters are sent to the API like so, `https://api.pwnedpasswords.com/range/5baa6`, this will return a list of hashes minus the first five characters. You then look up rest of the hash, `1e4c9b93f3f0682250b6cf8331b7ee68fd8` in this case. If it's in the list that is returned, then the password was part of the data breach

## To Run Local Server
* Run `npm install`
* Then run `npm run server`

## To Build
* Run `npm install`
* Then run `npm run build`
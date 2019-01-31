const hexToString = buffer => {
  const byteArray = new Uint8Array(buffer);
  const hexCodes = [...byteArray].map(value =>
    value.toString(16).padStart(2, "0")
  );
  return hexCodes.join("");
};

class Hasing {
  sha1(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    return crypto.subtle.digest("SHA-1", data).then(hexToString);
  }
}

export default Hasing;

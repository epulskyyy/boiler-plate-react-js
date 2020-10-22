import crypto from "crypto";

const ENC_KEY = process.env.REACT_APP_ENC_SECRET; // set random encryption key
const algorithm = "aes-256-cfb";

export function encryptText(text) {
  const hash = crypto.createHash("sha256");
  hash.update(ENC_KEY);
  const keyBytes = hash.digest();

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, keyBytes, iv);
  let enc = [iv, cipher.update(text, "utf8")];
  enc.push(cipher.final());
  return Buffer.concat(enc).toString("base64");
}

export function decryptText(text) {
  try {
    const hash = crypto.createHash("sha256");
    hash.update(ENC_KEY);
    const keyBytes = hash.digest();

    const contents = Buffer.from(text, "base64");
    const iv = contents.slice(0, 16);
    const textBytes = contents.slice(16);
    const decipher = crypto.createDecipheriv(algorithm, keyBytes, iv);
    let res = decipher.update(textBytes, "", "utf8");
    res += decipher.final("utf8");
    return res;
  } catch (error) {}
}

export function formatPhoneDisplay(number) {
  const local = number.replace(/^62/, "0");
  return local.replace(/^(\d{4})(\d{4})(\d+)$/, "$1-$2-$3");
}

export function waLink(number) {
  const text =
    "Maaf%20menggangu%20ka,%20Perkenalkan%20Saya%20*Nama*%20*NPM:0xxxxx*%20izin%20bertanya%20tentang%20........";
  return `https://api.whatsapp.com/send?phone=${number}&text=${text}`;
}

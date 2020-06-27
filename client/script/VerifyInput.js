/**
 * @param {String} email
 * @returns {String}
 */
export function VerifyEmail(email) {
  if (email.length === 0) {
    return "Email is Require";
  } else if (!/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/.test(email)) {
    return "Email is not valid";
  } else {
    return "";
  }
}

/**
 * verifie si un texte ne contient que des lettres
 * @param {String} text
 * @returns {String}
 */
export function VerifyText(text) {
  if (text.length === 0) {
    return "Ce champ est requis";
  } else if (/(a-zA-Z)+(\!\@\#\$\%\^\&\*\(\))+/.test(text)) {
    return "Ce champ n'est pas valide";
  } else {
    return "";
  }
}

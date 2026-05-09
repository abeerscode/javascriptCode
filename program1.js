function checkPassword(password) {
  if (password.length < 6) {
    return "Too short";
  } else {
    return "Strong password";
  }
}

console.log(checkPassword("123"));
console.log(checkPassword("123456"));

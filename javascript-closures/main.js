function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('1', medicalSchool('Dan Abramov'));
console.log('2', lawSchool('Ryan Florence'));

"use strict";
let companyEmail = new Map();
let companyDomain = new Map();
let blackList = new Map();
const validate = (email) => {
  if (!email) return false;
  const fields = email.split("@");
  if (fields.length !== 2) return false;
  const account = fields[0];
  const address = fields[1];
  if (account.length > 64) return false;
  else if (address.length > 255) return false;
  const domainParts = address.split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  ) {
    return false;
  }
  const char =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!char.test(email)) return false;

  return true;
};

const isCompanyEmail = (email) => {
  if (companyEmail.length <= 1) {
    console.warn("! Must to insert  your company emails using ");
    return false;
  }
  if (!validate(email)) {
    return false; // it's not a company email address because it's not valid
  }
  const fields = email.split("@");
  const domain = fields[1];
  return !companyEmail.has(domain); // checking if the email include the company email list
};
const isCompanyDomain = (domain) => {
  if (companyDomain.length <= 0) {
    return fasle;
  }
  //check if the input its only the domain or also email
  const fields = email.split("@");
  if (fields.length > 1) {
    return companyDomain.has(fields[1]);
  }
  return companyDomain.has(domain);
};

const isInBlackList= (email) =>{
    if(!validate(email)){ return false;}
    return blackList.has(email);
}
const addToBlackList = (email)=> {
    if(!validate(email)){ return false;}
    if(blackList.has(email)) return false; //  check if already exist 
    blackList.set(email,'BLACK_LIST');
    return true;
}
const getBlackList = ()=> {
    return blackList;
}

module.exports.validate = validate;
module.exports.isCompanyDomain = isCompanyDomain;
module.exports.isCompanyEmail = isCompanyEmail;
module.exports.isInBlackList = isInBlackList;
module.exports.addToBlackList = addToBlackList;
module.exports.getBlackList = getBlackList;

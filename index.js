"use strict";
const companyEmail = new Map();
const companyDomain = new Map();
const blackList = new Map();
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
const addCompanyEmail = (email) => {
  if (!validate(email)) {
    return false;
  }
  if (companyEmail.has(email)) return false; //  check if already exist
  companyEmail.set(email, "COMPANY_EMAIL");
  return true;
};
const isCompanyEmail = (email) => {
  if (companyEmail.size <= 0) {
    console.warn("!Must to insert  your company email, empty list ");
    return {
      success: false,
      status: "faild",
      error: true,
      msg: "list of company emails is empty",
    };
  }
  if (!validate(email)) {
    return {
      success: false,
      status: "faild",
      error: true,
      msg: "validate error",
    }; // it's not a company email address because it's not valid
  }

  return {
    success: companyEmail.has(email),
    status: companyEmail.has(email) ? "success" : "faild",
    error: !companyEmail.has(email),
    msg: companyEmail.has(email) ? "" : "validate error",
  }; // checking if the email include the company email list
};
const addCompanyDomain = (domain) => {
    if (companyDomain.has(domain)) return false; //  check if already exist
    companyDomain.set(domain, "COMPANY_DOMAIN");
    return true;
  };
const isCompanyDomain = (domain) => {
  if (companyDomain.size <= 0) {
    return fasle;
  } //check if the input its only the domain or also email
  const fields = email.split("@");
  if (fields.length > 1) {
    return companyDomain.has(fields[1]);
  }
  return companyDomain.has(domain);
};

const isInBlackList = (email) => {
  if (!validate(email)) {
    return false;
  }
  return blackList.has(email);
};
const addToBlackList = (email) => {
  if (!validate(email)) {
    return false;
  }
  if (blackList.has(email)) return false; //  check if already exist
  blackList.set(email, "BLACK_LIST");
  return true;
};
const getBlackList = () => {
  return blackList;
};
const getCompanyEmail = () => {
  return companyEmail;
};
const getCompanyDomain = () => {
    return companyDomain;
  };

module.exports.validate = validate;
module.exports.isCompanyDomain = isCompanyDomain;
module.exports.isCompanyEmail = isCompanyEmail;
module.exports.isInBlackList = isInBlackList;
module.exports.addToBlackList = addToBlackList;
module.exports.getBlackList = getBlackList;
module.exports.addCompanyEmail = addCompanyEmail;
module.exports.addCompanyDomain = addCompanyDomain;
module.exports.getCompanyEmail = getCompanyEmail;
module.exports.getCompanyDomain =getCompanyDomain;
# email-val

A module to validate email's, useful in form validation, validate company email's, companey domain's and black list email's  
This can be most useful in form validation to avoid those pesky spam emails

# Installation

```
 $ npm i email-val
 $ npm i email-val --save-dev
```

# Usage

```js
import {validate,addCompanyEmail,isCompanyEmail,addCompanyDomain,isCompanyDomain,addToBlackList,isInBlackList,getBlackList,getCompanyEmail,getCompanyDomain} from 'email-val';

validate(type?:string);              //  => true/ false
addCompanyEmail(type?:string);       //  => true/ false
isCompanyEmail(type?:string);        //  =>  {success: boolean,status:string,error: boolean, msg: string,}
addCompanyDomain(type?:string);      //  => true/ false
isCompanyDomain(type?:string);       //  => true/ false
addToBlackList(type?:string);        //  => true/ false
isInBlackList(type?:string);         //  => true/ false
getBlackList();                      //  => hashMap() return all the keys that created and stored
getCompanyEmail();                   //  => hashMap() return all the keys that created and stored
getCompanyDomain();                  //  => hashMap() return all the keys that created and stored
```

# validate

```js
validate(email)
`Returns true if the validate success, if it's not email return false.
 
for example :-
validate('test@gmail.com')     // => true
validate('@gmail.com')         // => false
validate('test@gmail.')        // => false
validate('test')               // => false
validate(' ')                  // => false


```

```js
addCompanyEmail(email)
`To add company email to hashMap
we used hashMap to make sure we didn't have any duplicate emails

for example :-
addCompanyEmail('test@comapne.com') //=> true
addCompanyEmail('test@com')         //=> false


```

```js
isCompanyEmail(email)
`Returns object {success: boolean,status:string,error: boolean, msg: string}
we check if the email is valid and its a company email 
 
for example :-
addCompanyEmail('test@comapne.com') //=> {success: true,status:'success',error: false, msg: ""}
addCompanyEmail('test@com')         //=> {success: false,status:'faild',error: true, msg: "validate error""}
if we didnt have any company email "empty hashMap" 
addCompanyEmail('test@gmail.com')  //=> {success: false,status:'faild',error: true, msg: "list of company emails is empty""}

```

```js
addCompanyDomain(type);
`To add company domain to hashMap
we used hashMap to make sure we didn't have any duplicate domains

for example :-
addCompanyEmail('comapne.com')       //=> true
addCompanyEmail('test@comapne2.com') //=> true
addCompanyEmail('comapne.com')       //=> false if duplicated domain
addCompanyEmail('gmail')             //=> false its not a domain


```

```js
 
isCompanyDomain(email) // the user can check domain or email we split the email and check the domian 
`Returns object {success: boolean,status:string,error: boolean, msg: string}
we check if the email is valid and its a company email 
 
for example :-
addCompanyEmail('test@comapne.com') //=> true
addCompanyEmail('test@com')         //=> false
if we didnt have any company domain "empty hashMap" 
addCompanyEmail('test@gmail.com')  //=> false


```

```js
 
addToBlackList(email) // the user can check domain or email we split the email and check the domian 
`Returns true/false
adding email to blackList to block the email 
we used hashMap to make sure we didn't have any duplicate blocked emails
for example :-
addCompanyEmail('test@comapne.com') //=> true
addCompanyEmail('test@com')         //=> false not valid email
addCompanyEmail('test@comapne.com') //=> false if duplicated


```

```js
 
isInBlackList(email)  
`Returns true/false 
check if the emial is in black list 
 
for example :-
addCompanyEmail('test@comapne.com') //=> true
addCompanyEmail('test@com')         //=> false not valid
if we didnt have any company domain "empty hashMap" 
addCompanyEmail('test@gmail.com')  //=> false

```

```js
 
getBlackList()  
`Returns hashMap" 
 

```

```js
 
getCompanyDomain()  
`Returns hashMap" 
 

```

```js
 
getCompanyEmail()  
`Returns hashMap" 
 

```

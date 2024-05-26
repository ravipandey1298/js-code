const accountId = 342134;
let accountEmail = "ravi@gmail.com";
var accountPassword = "23423432";
accountCity = "Mirzapur";
let accountState;


// accountId = 343; not allowed

accountEmail = "rp@rp.com";
accountPassword = "rp23e2";
accountCity = "Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
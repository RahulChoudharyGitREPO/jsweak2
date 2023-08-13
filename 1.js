function checkUsername(username, userList) {
    return userList.includes(username);
}

// Example usage
const users = ["user1", "user2", "user3", "user4"];
const usernameToCheck = "user2";

if (checkUsername(usernameToCheck, users)) {
    console.log(`The username '${usernameToCheck}' is in the user list.`);
} else {
    console.log(`The username '${usernameToCheck}' is not in the user list.`);
}

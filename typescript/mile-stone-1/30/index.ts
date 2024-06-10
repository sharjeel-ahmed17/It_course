// noUsers.ts
let usernames2: string[] = [];
if (usernames2.length == 0) {
  console.log("We need to find some users!");
} else {
  usernames2.forEach((username) => {
    console.log(`Hello ${username}, thank you for logging in again.`);
  });
}

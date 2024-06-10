// checkingUsernames.ts
let current_users: string[] = ["admin", "eric", "john", "jane", "doe"];
let new_users: string[] = ["ERIC", "John", "Mike", "Sarah", "Doe"];
new_users.forEach((new_user) => {
  if (
    current_users
      .map((user) => user.toLowerCase())
      .includes(new_user.toLowerCase())
  ) {
    console.log(`${new_user} will need to enter a new username.`);
  } else {
    console.log(`${new_user} is available.`);
  }
});

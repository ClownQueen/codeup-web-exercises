"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO :Use .filter to create an array of user objects where
//  each user object has at least 3 languages in the languages array.
let threeLanguages = users.filter(lang => lang.languages.length >= 3);
console.log(threeLanguages);

// TODO: Use .map to create an array of strings where
//  each element is a user's email address
let emailAddress = users.map(emails => emails.email);
console.log(emailAddress);

//  TODO: Use .reduce to get the total years of experience from the list of users.
//   Once you get the total of years you can use the result to calculate the average.

let maxYears = users.reduce((total, years) => {
    return total + years.yearsOfExperience
}, 0);
console.log(maxYears);

// TODO: Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((currentLongestEmail, user) =>{
    if (user.email.length > currentLongestEmail.length){
        return user.email
    } else {
        return currentLongestEmail
    }
}, '');
console.log(longestEmail)

// TODO: Use .reduce to get the list of user's names in a single string.
//  Example: Your instructors are: ryan, luis, zach, fernando, justin.
let username = users.reduce((currentUsers, user) =>{
    if (currentUsers === ''){
        return `Your instructors are: ${user.name}`
    } else {
        return currentUsers + ' ' + user.name + ', '
    }
}, '');
console.log(username)
# Tech Blog
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


## 💬 Description 
A CMS-style blog site similar to a Wordpress site, where developers can publish blog posts and comment on other developers' posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


## 📓 Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Mock-Up](#mock-up)
* [Installation](#installation)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [License](#license)
* [Badges](#badges)
* [Tests](#tests)
* [Questions](#questions)
* [Contributing](#contributing)


## 🧠User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```


## 🧩Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 
```


## 🎨Mock-Up
<br>**The following animation demonstrates the application functionality:**</br>
<br>![](assets/mock-up.gif)</br>


## 🔌Installation

The user should clone the repository from GitHub and open up the project in their code editor.
<br>User will need to run node.js and perform an _npm install_ for all necessary dependencies listed below.</br>


## 💻Usage 
To run on _localhost:3001_, please run command _npm start_ to start the server and _control C_ to stop.
<br>To run program on Heroku, please [click here](https://damp-beach-37387.herokuapp.com/).</br>
[Click me for walkthrough❗️](https://drive.google.com/file/d/1r1HfNW2eTT6yNOtebrMdx-Sk-RCgTDo1/view)
<br>![](assets/example.gif)</br>


## ✏️Dependencies
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/">NPM</a></p>
<p><a href="https://www.npmjs.com/package/express">Express.js</a></p>
<p><a href="https://www.npmjs.com/package/mysql2">MySQL2</a></p>
<p><a href="https://www.npmjs.com/package/sequelize">Sequelize</a></p>
<p><a href="https://www.npmjs.com/package/dotenv">dotenv</a></p>
<p><a href="https://heroku.com/">Heroku</a></p>
<p><a href="https://www.npmjs.com/package/express-handlebars">express-handlebars</a></p>
<p><a href="https://www.npmjs.com/package/bcrypt">bycrypt</a></p>
<p><a href="https://www.npmjs.com/package/express-session">express-session</a></p>
<p><a href="https://www.npmjs.com/package/connect-session-sequelize">connect-session-sequelize</a></p>


## 🔐License
```
Copyright © MIT. All rights reserved. 
Licensed under the MIT license.
```


## 🏆Badges

![GitHub top language](https://img.shields.io/github/languages/top/tpgent01/e-commerce-back-end?color=red&style=plastic)
<br>![GitHub repo size](https://img.shields.io/github/repo-size/tpgent01/e-commerce-back-end?color=orange&style=plastic)</br>
![GitHub language count](https://img.shields.io/github/languages/count/tpgent01/e-commerce-back-end?color=yellow&style=plastic)
<br>![GitHub closed issues](https://img.shields.io/github/issues-closed/tpgent01/e-commerce-back-end?color=brightgreen&style=plastic)</br>
![GitHub last commit](https://img.shields.io/github/last-commit/tpgent01/e-commerce-back-end?color=blueviolet&style=plastic)
<br>![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tpgent01/e-commerce-back-end?color=ff69b4&style=plastic)</br>
![GitHub watchers](https://img.shields.io/github/watchers/tpgent01/e-commerce-back-end?style=social)
<br>![GitHub Repo stars](https://img.shields.io/github/stars/tpgent01/e-commerce-back-end?style=social)</br>



## 📊Tests

To test this project, please see the [Installation](#installation) section.
<br>After the project is on your local, run _npm start_ to start the server and open [Insomnia Core](https://insomnia.rest/products/insomnia) to test API routes.</br>


## ❓Questions

If you have any questions about this projects, please contact me directly at tpgent01@outlook.com. 
<br>You can view more of my projects at https://github.com/tpgent01 👾</br>


## 📌Contributing

Taylor Gentry ©2021 All Rights Reserved.

Reflection
Please also provide an assignment reflection in your project README.md file.
Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:
Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

---------------------------------------------------------------
REFLECTION

I have created a mock social media platform where I am able to sign into or sign up for a user account using Clerk authentication and access the site.

When a user signs in they are redirected to their existing profile page by way of a redirect in the .env file. For a new user signing up they will be redirected to a page where they are able to create a profile. Once their profile has been created they are redirected to their newly created profile page.

When a user is logged in they are able to navigate other users profile pages (from the home page) and view their timeline showing their posts. The users list is sorted alphabetically when the table rows are pulled from the database. A user is also able to create new posts, when logged in, which are saved to the database. The user is redirected to their timeline where they should see their new post instantly.

I wasn't able to add comments or likes on posts, or implement full CRUD due to time constraints. I successfully included likes on my previous guestbook projects, so I guess it wouldn't be so different to those apps, perhaps slightly more complex sql queries to access joined tables.

I'm not keen on Tailwind css so I used a global stylesheet. I prefer to have all styles in one place which makes it easier to share one particular style with multiple elements and produce 'drier' css. Multiple stylesheets can make things confusing and also creates more resources to download.

References
-----------
W3 Schools, MDN, Stack Overflow.
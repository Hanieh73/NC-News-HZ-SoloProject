Front End React App
NC News is a news aggregation, a solo project, I built in React.js during week 9 at Northcoders' software engineering bootcamp course, which aims to demonstrate some of the front-end skills I've learnt, mostly dedicated to React subjects including:

React DOM Manipulation
React Routing
Optimistic Rendering
Error Handling

This front end application interacts with the back end RESTful API I created during week six of the course. Details of the API may be found on Github: https://github.com/Hanieh73/HZ-NC-News-Backend/tree/main

I have hosted my project on netlify which can be found here:https://hz-nc-news.netlify.app/

Functionality

Home and Topic Routes
On loading, the demo requests a list of articles from the API.

By clicking on each Article, the user is able to:
-view the article details including the article title, picture, context, topic, date created, author, and the comments for that article, and
-vote for the article [only once].

Errors
Bad route errors result in the relevant 400/404 page.

API errors result in the API error status code and message being displayed to the user.

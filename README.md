# Asynchronous News Viewer

This web application displays current news items on defined topics. It's built as a single HTML page and leverages asynchronous requests to provide a dynamic user experience without page reloads.

## Features:

* **Topic List Display:** Upon page load, an AJAX request fetches a list of active news topics from a MySQL database and displays them.
* **News Headlines:** Clicking on a topic triggers a fetch request to thenewsapi.com's 'Top Stories' endpoint to display three news headlines (title and URL) for that topic.
* **No Headlines Reporting:** If a request to thenewsapi.com returns no headlines, the user is notified.
* **Country Filter:** Users can change the country filter (default: NZ) to one of NZ, AU, GB, or US, which then applies to news API requests.
* **Topic Management:** Users can add or remove topics by updating the database table via an AJAX request.
* **Single-Page Application (SPA):** All functionality is achieved within a single URL, utilizing asynchronous requests and DHTML to avoid page refreshes or navigation.

## Technologies Used:

* Validated HTML
* Cascading Style Sheets (CSS)
* JavaScript
* DHTML
* Server-side PHP scripting
* AJAX and Fetch
* Interaction with a MySQL database
* Retrieval of data from an external API

## Setup:

1.  **thenewsapi.com Account:** Create a free developer account at [https://thenewsapi.com/](https://thenewsapi.com/). You will receive an API key upon verification. Be mindful of the free account limits (100 requests/day, 3 articles/request).
2.  **MySQL Database:** Import the provided `newtopics.sql` file into your MySQL database. If you previously uploaded `topics.sql`, you can edit the 'technology' category to 'tech' instead.
3.  **Code Structure:** Ensure your application's files are within a directory named `compx322assn1` inside your `course_html` directory.
4.  **Database Connection:** Make sure your PHP connection scripts are configured for the lab environment.

## Development Notes:

* **Separate Files:** The application uses a separate CSS document for layout and appearance and a separate JavaScript file for client-side logic.
* **AJAX/Fetch for Data:** PHP scripts should return data to the HTML page using AJAX or Fetch; content should not be displayed directly from PHP scripts.
* **No JavaScript Libraries:** This assignment *does not* permit the use of JavaScript libraries like JQuery.

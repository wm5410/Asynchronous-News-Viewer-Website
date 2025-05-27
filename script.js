//Create instance
request = new XMLHttpRequest();

//Send Ajax request to get data from SQL table
let getDataAjax = () => {
    url = "getNewtopics.php";

    request.onload = displayData;
    request.onerror = handleError;
    request.open("GET", url);
    request.send("");
}

//Funcion to get the data and put it on the page
let displayData = () => {
    response = request.responseText;
    inactiveContainer = document.getElementById("inactiveTopics");
    data = document.getElementById("data");
    update = document.getElementById("update");

    try {
        const jsonData = JSON.parse(response);

        // Clear existing content
        data.innerHTML = '';
        inactiveContainer.innerHTML = ''; 


        // Iterate through the data and display DHTML
        jsonData.forEach(item => {
            if (item.Active == 1) {
                const dataElement = document.createElement('div');
                dataElement.textContent = `${item.Topic}`;
                // Check to see if edit is enabled 
                //If it is then delete news php is called 
                //If it is not then display the news from api 
                dataElement.addEventListener('click', function () {
                    if(update.checked){
                        deleteNews(item.Topic);
                    }
                    else{
                        getNewsItem(item);
                    }
                });
                data.appendChild(dataElement);
            }
            if(item.Active == 0){
                const dataElement = document.createElement('div');
                dataElement.textContent = `${item.Topic}`;
                inactiveContainer.appendChild(dataElement);
                // Check to see if edit is enabled 
                //If it is then add news php is called 
                dataElement.addEventListener('click', function () {
                    if(update.checked)
                    addNews(item.Topic);
                ;});
                
            }
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

//Error handeling
let handleError = () => {
    console.error("Count not retrieve data.s")
}

//Funcion to display topics from the API
function getNewsItem(item) {
    info = document.getElementById("info");
    country = document.getElementById("country").value;

    info.innerHTML = `<h2>${item.Topic}</h2>`;

    //Do api
    fetch("https://api.thenewsapi.com/v1/news/top?api_token=pVdO6GtSuAlYB1kQSQ4jEb7Qm4VltAL5ZCtbfASc&locale=" + country + "&limit=3&categories=" + item.Topic + "")
        .then(response => response.json())
        .then(apiData => {
            if (apiData.data && apiData.data.length > 0) {
                // Display each news article
                apiData.data.forEach(article => {
                    info.innerHTML += `
                    <div id=news>
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>
                `;
                });
            } else {
                info.innerHTML += `<p>No news articles found for ${item.Topic}</p>`;
            }
        })
        .catch(error => console.error('Error fetching data from API:', error));
}


//Add and remove funcions
let addNews = (topicId) => {
    let url = "add.php";

    // Send AJAX request to activate the topic
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onload = getDataAjax; // Refresh the topic list after activation
    request.onerror = handleError;
    request.send("id=" + encodeURIComponent(topicId));
}
let deleteNews = (topicId) => {
    let url = "delete.php";

    // Send AJAX request to activate the topic
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.onload = getDataAjax; // Refresh the topic list after activation
    request.onerror = handleError;
    request.send("id=" + encodeURIComponent(topicId));
}
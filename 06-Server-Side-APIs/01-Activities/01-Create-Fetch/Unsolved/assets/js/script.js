var uiList=document.querySelector('ul');
var parsingElement=document.getElementById('fetch-button');//we're targeting a bttn elemnt with an id of 'fetch-button'

function getApi(){
  var targetElemnts='https://api.github.com/user/DennyDaVjncj/repos';//defined my target elements on this line with 'this' variable

  fetch(targetElemnts)
    .then(serverResponse=>{
        return serverResponse.json();
    })
    .then(payload=>{
      for(var i=0;i<payload.length;i++){
        var ulItem=document.createElement('li');
        ulItem.textContent=payload[i].html_url;
      }
    })
}

// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// // `getApi` function is called when the `fetchButton` is clicked

// function getApi() {
//   // TODO: Insert the API url to get a list of your repos
//   var requestUrl = '';//from where will I fetch this? Will this work

//   fetch(requestUrl)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       // Looping over the fetch response and inserting the URL of your repos into a list
//       for (var i = 0; i < data.length; i++) {
//         // Create a list element
//         var listItem = document.createElement('li');

//         // Set the text of the list element to the JSON response's .html_url property
//         listItem.textContent = data[i].html_url;

//         // Append the li element to the id associated with the ul element.
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);
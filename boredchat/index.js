
document.getElementById("get-activity").addEventListener('click', function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
          document.getElementById("activity-todo").textContent = data.activity;
          document.getElementById("title").textContent = "🦾 CakeBot🦿"
          document.body.classList.add("fun")
        })
  })
/**
Challenge: 

- Add some styling! Be creative, play with layout a bit
  (Spoiler: I'm going to use a single-column flexbox layout)
  add some color, grab a font from Google fonts - whatever
  you'd like!
*/

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })
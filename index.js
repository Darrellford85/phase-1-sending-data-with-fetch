// Add your code here- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch//
const para = document.querySelector('#append')
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })

     })
     .then(response => response.json())
     .then(users=>{ const newId = document.createTextNode(users.id)
         return para.appendChild(newId)}
         )
      .catch(error=>para.textContent += error.message)
    }

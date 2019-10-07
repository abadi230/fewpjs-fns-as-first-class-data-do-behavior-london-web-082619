/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  let time = timeString.split(':')
  let hour = parseInt(time[0]);
  if (hour < 12){
    return "Good Morning"
    
  }
  if(hour > 11 && hour < 18){
    return "Good Afternoon"
  }

  if(hour > 17){
    return "Good Evening"
  }
}
function displayMessage(message){
  // document.querySelector('#greeting').innerHTML = message
  document.getElementById("greeting").innerText = message;
}
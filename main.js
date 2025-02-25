    function mouseOver(){
      submit.style.color = "white";
      submit.style.background = "red";
    }
  
 
    function mouseOut(){
      submit.style.color = "black";
      submit.style.background = "grey";
    }

    
    document.getElementById("fname").onchange = function() {changeToCapital()};
    
    function changeToCapital(){
      var name = document.getElementById("fname");
      name.value = name.value.toUpperCase();
    }

    function showPrice() {
            var seat = document.getElementById("seat").value * 1;
            var ticket = document.getElementById("ticket").value * 1;
            var total = seat + ticket;
            window.alert("Total Price: ₱" + total);
        }


   var today = new Date();
   var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   var dateTime = date+' '+time;
   const elements = document.getElementsByClassName("current-time");
   for(i = 0; i < elements.length; i++) {
      elements[i].innerHTML = dateTime;
   }

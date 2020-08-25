function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


 // MODAL



  document.querySelector('#btn-footer').addEventListener('click', function() {

    document.querySelector('.bg-modal').style.display = 'flex';
  
   })


   document.querySelector('.close').addEventListener('click', function () {
      document.querySelector('.bg-modal').style.display='none';
   })


  
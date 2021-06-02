  console.log("test")

   function onsubmitt (){

        let Username = document.getElementById("userN");
        let Mdp = document.getElementById("mdp");
        console.log(Username);
        if(Username.value == "joueur" && Mdp.value== "secret")
        {
          document.getElementById("formid").submit();
        }
      
        else
        {
          alert("Désolé, informations erronées");
          document.getElementById("userN").value = "";
          document.getElementById("mdp").value = "";          
        }   
      }   

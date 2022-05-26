
//product Array

var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS",
    "remove": "X"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android",
    "remove": "X"
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS",
    "remove": "X"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android",
    "remove": "X"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android",
    "remove": "X"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows",
    "remove": "X"
}];

var tableItem = "";



$(document).ready(function () {

//printing whole table on page load 
   
        tableItem = "";

        tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        
        for (var i = 0; i < products.length; i++) {

            tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
    
        }

        $("#printTable").html(tableItem);
      
        
    

//printing table on seleting operating system from dropdown

    $("#select_OS").change(function(){ 
            
        var value = $("#select_OS").val();
        var brandValue = $("#select_Brand").val();

        if(brandValue == "-select-brand-" ){
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        

            for (var i = 0; i < products.length; i++) {
                if(value == products[i].os)
                tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
            
                else if(value == "-select-os-")
                tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
           
            }
            $("#printTable").html(tableItem);
        }
        else if((value == "-select-os-")&&(brandValue != "-select-brand-")){
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        
            for (var i = 0; i < products.length; i++) {
                if(brandValue == products[i].brand){
                    
                    tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
              
                }
            }

            $("#printTable").html(tableItem);
        }
        
        else if(!(brandValue == "-select-brand-")){
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        
            for (var i = 0; i < products.length; i++) {
                if(value == products[i].os && brandValue == products[i].brand){
                    
                    tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
              
                }
            }

            $("#printTable").html(tableItem);
        }
        
        console.log("On Change OS");
        $(".ErrorMsg").val("");
    });




//printing table on seleting brand from dropdown



    $("#select_Brand").change(function(){ 
            
        var brandValue = $("#select_Brand").val();
        var value = $("#select_OS").val();
        
        if(value == "-select-os-" ){
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        

            for (var i = 0; i < products.length; i++) {
                
                if(brandValue == products[i].brand)

                tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
            
                    

                else if(brandValue == "-select-brand-")

                tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
           
            }
            $("#printTable").html(tableItem);
        }

        else if((brandValue == "-select-brand-")&&(value != "-select-os-")){
            
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";

            for (var i = 0; i < products.length; i++) {
                if(value == products[i].os){
                    
                    tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
              
                }
            }

            $("#printTable").html(tableItem);
        }

        

        else if(!(value == "-select-os-")&&(brandValue != "-select-brand-")){
            
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        
            for (var i = 0; i < products.length; i++) {

                if(value == products[i].os && brandValue == products[i].brand){
                    
                    tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
              
                }
            }

            $("#printTable").html(tableItem);
            
        }

        $(".ErrorMsg").val("");
    });


//hiding row on clicking that particlar "X" of any row


    $("#printTable").on("click",".removeProduct", function(){
   
        $(this).closest("tr").hide();
      });

    
    $("#searchBtn").click(function(){ 
        value = $("#productD").val();
        if(value != "" ){
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        
            var count = 0;
            for (var i = 0; i < products.length; i++) {
                
                if(value == products[i].id || value == products[i].name){
                    tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
                    count++;
                }
            }

            $("#printTable").html(tableItem);

            if(count > 0)
                $(".ErrorMsg").val("");
            else
                $(".ErrorMsg").val("Enter proper Data");


        }
        else if(value == "" ){
            tableItem = "";

            tableItem += "<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
        

            for (var i = 0; i < products.length; i++) {

                tableItem += "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td>" + products[i].brand + "</td><td>" + products[i].os + "</td><td class='removeProduct'><b>" + products[i].remove + "<b></td></tr>";
                
            }
            $("#printTable").html(tableItem);
            $(".ErrorMsg").val("Input ID or Name");
            $(".ErrorMsg").val("Don't leave blank");
        }
        

    });
});

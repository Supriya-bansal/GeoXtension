$(function(){
    $("#includedContent").load("test.html"); 
   });


$.ajax({ 
    type: 'GET', 
    url: 'https://restcountries.eu/rest/v2/all', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
       console.dir(data);
    }
});
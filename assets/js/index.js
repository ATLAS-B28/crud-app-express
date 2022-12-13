//on submit 
$('#add_user').submit(function(event){
    alert('Data added successfully')
})//specify the id
$('#update_user').submit(function(e){
    e.preventDefault()
    let unindexed_array = $(this).serializeArray()
    //1st args = array and 2nd
    //we create a new array as data
    let data={}
    $.map(unindexed_array,function (num,i){
        //num returns data front the array
        //i return index from the array
        //we create a new array as data
     
        data[num['name']]=num['value']
       
    })
    console.log(unindexed_array)
    var request = {
    "url" : `http://localhost:3000/api/users/${data.id}`,
    "method" : "PUT",
    "data" : data
}

$.ajax(request).done(function(response){
    alert("Data Updated Successfully!");
})
   
})
if (window.location.pathname =='/') {
 $ondelete=$('.table tbody td a.delete')
 $ondelete.click(function(){
    let id = $(this).attr('data-id')
    //make req in the id
    var request = {
        "url" : `http://localhost:3000/api/users/${id}`,
        "method" : "DELETE"
    }
    if(confirm('Do you want to delete the User record ?')){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload()
        })
    }
 })   
}
$('document').ready(function(){
  var countTo = +prompt("Please enter a number");
if(isNaN(countTo)){
			window.alert("please enter a number");
			location.reload();
		}
		else{
		for(var i=1;i<=countTo;i++){
		if (i%15===0){
			$('body').append('<p>fizz buzz<p>');
		}
		else if(i%3===0){
			$('body').append('<p>fizz<p>');
		}
		else if(i%5===0){
			$('body').append('<p>buzz<p>');
		}
		else{
			$('body').append('<p>' + i + '</p');
		}
	}
}
});


 
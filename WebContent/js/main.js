var list_busy = false;

function do_guess_end_game() {
	console.log("end_game");
}

function guess_end_game() {
$( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "YES": function() {
          $( this ).dialog( "close" );
          do_guess_end_game();
        },
        No: function() {
          $( this ).dialog("close");
        }
      }
    });
}

function do_accept_inv() {
	
}

function invitation(name) {
	if (list_busy) return;
	list_busy = true;
	
	$("#inv_uname").replaceWith(name);
	
	setTimeout(function(){ $( "#dialog-invitation" ).dialog("close"); }, 10000);
	
	$( "#dialog-invitation" ).dialog({
	      resizable: false,
	      height: "auto",
	      width: 400,
	      modal: true,
	      buttons: {
	        "YES": function() {
	          $( this ).dialog( "close" );
	          list_busy = false;
	          do_accept_inv();
	        },
	        No: function() {
	          $( this ).dialog("close");
	          list_busy = false;
	        }
	      }
	    });
}

function do_disconnect() {
	
}

function disconnect(name) {	
	list_busy = true;
		
	$( "#dialog-disconnect" ).dialog({
	      resizable: false,
	      height: "auto",
	      width: 400,
	      modal: true,
	      buttons: {
	        "YES": function() {
	          $( this ).dialog( "close" );
	          list_busy = false;
	          do_disconnect();
	        },
	        No: function() {
	          $( this ).dialog("close");
	          list_busy = false;
	        }
	      }
	    });
}


function guess_letter(letter) {
//	alert("Letter: "+letter)
}
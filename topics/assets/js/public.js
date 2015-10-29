function check_date(param){
	var r = param.match(/^(\d{1,4})(-|\/)(\d{1,2})(-|\/)(\d{1,2}) (\d{1,2}):(\d{1,2})$/);
	if(r == null){
		return false
	}	
	else{
		return true
	}
}
function check_time(param){
	var r = param.match(/^(\d{1,2}):(\d{1,2})$/);
	if(r == null){
		return false
	}
	else{
		return true
	}
}
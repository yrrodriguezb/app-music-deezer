export default function secondsToTime(value) { 
	if (!value) return "00:00"; 

	const dateObj = new Date(value * 1000); 
	const minutes = dateObj.getUTCMinutes(); 
	const seconds = dateObj.getSeconds(); 

	let timeString = minutes.toString().padStart(2, '0') 
			+ ':' + seconds.toString().padStart(2, '0'); 

	return timeString;  
}
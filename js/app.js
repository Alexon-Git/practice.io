setCookie = (cName, cValue, expDays) =>{
	let date = new Date();
	date.setTime(date.getTime() + (expDays*10*1000));
	const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
 const name = cName + "=";
 const cDecoded = decodeURIComponent(document.cookie);
 const cArr = cDecoded.split("; ");
 let value;
 cArr.forEach(val => {
	if (val.indexOf(name) === 0) value = val.substring(name.length);
 })
 return value;
}

document.querySelector("#cookie-btn").addEventListener("click", () =>{
	document.querySelector(".content").style.display = "none";
	setCookie("cookie", true, 1);
})

cookieMessage = () => {
	if(!getCookie("cookie"))
	document.querySelector(".content").style.display = "flex";
}

window.addEventListener("load", cookieMessage);
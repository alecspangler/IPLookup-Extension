//button listeners
document.getElementById("button1").addEventListener("click", fetchIP);
document.getElementById("button2").addEventListener("click", displayIPLookup);

var ip_holder = 0;

function fetchIP() {
    document.getElementById("result").innerHTML = "";       //clear result

    //gets data(ip) from api, turns ip into string, display string
    fetch("https://api.whatismyip.com/ip.php?key=b0b0dab1ab9ffeb672a78de19a66bb15")
        .then( response => response.text())
        .then( data => {
            const pre = document.getElementById("result");
            pre.innerText = data;
            ip_holder = (pre.innerText);
        })
}


function displayIPLookup() {
    fetchIP();
    clearResults();

    //gets data(JSON) from api, parse data, display data 
    fetch("https://api.whatismyip.com/ip-address-lookup.php?key=991c48066fed25b3562ba63e9e8691db&input="+ip_holder+"&output=json")
        .then( response => response.text())
        .then( data => {
            const obj = JSON.parse(data);

            //split json results up
            document.getElementById("cityresult").innerHTML = obj.ip_address_lookup[0].city;;
            document.getElementById("stateresult").innerHTML = obj.ip_address_lookup[0].region;
            document.getElementById("countryresult").innerHTML = obj.ip_address_lookup[0].country;
            document.getElementById("postalresult").innerHTML = obj.ip_address_lookup[0].postalcode;
            document.getElementById("ISPresult").innerHTML = obj.ip_address_lookup[0].isp;
            document.getElementById("timeresult").innerHTML = obj.ip_address_lookup[0].time;
        })
    
}
	
function clearResults() {
    document.getElementById("cityresult").innerHTML = "";
    document.getElementById("stateresult").innerHTML = "";
    document.getElementById("countryresult").innerHTML = "";
    document.getElementById("postalresult").innerHTML = "";
    document.getElementById("ISPresult").innerHTML = "";
    document.getElementById("timeresult").innerHTML = "";
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function myFunction(response) {
    var ajogos = response.jogospg;
    var out = "<table>";
    var rjogo;
    for(i = 0; i < ajogos.length; i++) {
        rjogo[i] = ajogos[i].titulo;
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
}

    var Ajax = function(url,callback,self) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback.call(this,JSON.parse(xmlhttp.responseText));
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();        
    };

    var mytest = Ajax("jogosSQL.php",myFunction,this);


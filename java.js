var iconerecherche = document.getElementById("iconerecherche");
iconerecherche.addEventListener('click',function(){
    rechercher()
})
function rechercher(){
    var listenom= ['atelier','formation','evenement','opportunite','contact','blog','a propos'];
}
for (var i=0;i<listenom.length;i++){
    if (listenom[i] == rechercher){console.log(listenom[i])}
    return listenom[i]
}
import caffetteria_data from "./caffetteria.json" with {type: 'json'}

for (let x=0; x<caffetteria_data.length;x++){
    let the_element=document.createElement('li')
    the_element.innerHTML=caffetteria_data[x].nome+" "+caffetteria_data[x].costo
    document.getElementById("caffetteria").append(the_element)
}
import pasticceria_data from "./pasticceria.json" with {type: 'json'}

for (let x=0; x<pasticceria_data.length;x++){
    let the_element=document.createElement('li')
    the_element.innerHTML=pasticceria_data[x].nome+" "+pasticceria_data[x].costo
    document.getElementById("pasticceria").append(the_element)
}
import bevande_alcolici_data from "./bevande_alcolici.json" with {type: 'json'}

for (let x=0; x<bevande_alcolici_data.length;x++){
    let the_element=document.createElement('li')
    the_element.innerHTML=bevande_alcolici_data[x].nome+" "+bevande_alcolici_data[x].costo
    document.getElementById("bevande_alcolici").append(the_element)
}
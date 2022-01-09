const piyoda_sped=3.6
const velosaped_sped=20.1
const mashina_sped=70 
const samalyot_sped=800 
var from =document.getElementById('form')
var isinput =document.getElementById('input')
var isbuttton =document.getElementById('button')
var ispiyoda =document.getElementById('piyoda')
var isvelosaped=document.getElementById('velosaped')
var ismashina =document.getElementById('mashina')
var issamalyot =document.getElementById('samalyot')

from.addEventListener('submit',event=>{
    event.preventDefault()
    console.log(isinput.value)
    ispiyoda.textContent=getTime(piyoda_sped,isinput.value)
    isvelosaped.textContent=getTime(velosaped_sped,isinput.value)
    ismashina.textContent=getTime(mashina_sped,isinput.value)
    issamalyot.textContent=getTime(samalyot_sped,isinput.value)
    
})

function getTime(speed,distance){
    let time = distance/speed
    return normalizeTime(time)
}
function normalizeTime (time){
    let hour = Math.floor(time)
    let minute =Math.ceil((time-hour)*60)
    let hourString =!hour ? `` : `${hour} soat`
    return hourString + `${minute} minut`
}


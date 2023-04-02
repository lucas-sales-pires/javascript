var agora = new Date()
var hora = agora.getHours()
var minutos =agora.getMinutes()
var dia = agora.getDate()
var mes = agora.getMonth()
console.log(`Hoje é o dia ${dia} do mês ${mes}, Agora são exatamente ${hora} horas e ${minutos} minutos`)
if (hora<12){
    console.log('Bom dia')

}else if(hora <= 18){
    console.log('Boa tarde')
}
else{
    console.log('Boa noite')
}

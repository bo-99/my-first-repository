$('body').append(
     '<p>See you soon!</p>'
    )  

$('#submit').click(() => {
    console.log("Yeah, you clicked me")
})

$('#textchange').click(() => {
    $('#submit').text("canceled")
})

$('#color').click(() => {
    $('button').css('background', 'red')
})
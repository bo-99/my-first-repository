let names = ['zsuzsi', 'zoli', 'gabi', 'bo', 'tomi'];
names.forEach(name => {
  $('ul').append(name)
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('body').append(
  '<h1>Added with javascript</h1>',
  '<p>This block was added using JavaScripts jQuery library. How awesome!</p>'
  )  


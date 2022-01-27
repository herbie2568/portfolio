/////JQUERY/////
$(() => {
////HEADER/////
// const $h1 = $('<div>').appendTo
$('<h1>').text('LILY CHEN').appendTo('header').addClass('header').attr('id', 'header-name')
// $('<div>').text('Web Developer | ').appendTo('header').addClass('header').attr('id', 'header-description')

/////CAROUSEL/////
const $imgBar = $('<div>').appendTo('body').addClass('imgbar')
const $lilyPics = $('<div>').addClass('lilypics-div').appendTo($imgBar)
$(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)
// $('<div>').addClass('lilypics-div').appendTo($imgBar)
// $(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)
// $('<div>').addClass('lilypics-div').appendTo($imgBar)
// $(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)
// $('<div>').addClass('lilypics-div').appendTo($imgBar)
// $(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)


////NAV BAR/////
const $navBar = $('<div>').addClass('navbar-div').appendTo('body')
$('<ul>').appendTo($navBar).addClass('nav-bar')
$('<li>').appendTo('.nav-bar').text('HOME').addClass('nav-list')
$('<li>').appendTo('.nav-bar').text('BIO').addClass('nav-list')
$('<li>').appendTo('.nav-bar').text('RESUME').addClass('nav-list')
$('<li>').appendTo('.nav-bar').text('PROJECTS').addClass('nav-list')
$('<li>').appendTo('.nav-bar').text('LINKS').addClass('nav-list')


})

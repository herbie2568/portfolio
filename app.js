/////JQUERY/////
$(() => {
////HEADER/////
// const $h1 = $('<div>').appendTo
$('<h1>').text('LILY CHEN').appendTo('header').addClass('header').attr('id', 'header-name')
// $('<div>').text('Web Developer | ').appendTo('header').addClass('header').attr('id', 'header-description')

/////CAROUSEL/////
const $imgBar = $('<div>').appendTo('body').addClass('imgbar')
$('<div>').addClass('lilypics-div').appendTo($imgBar)
$(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo('.lilypics-div')
// $('<div>').addClass('lilypics-div').appendTo($imgBar)
// $(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)
// $('<div>').addClass('lilypics-div').appendTo($imgBar)
// $(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)
// $('<div>').addClass('lilypics-div').appendTo($imgBar)
// $(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo($lilyPics)


////NAV BAR/////
const $navBar = $('<div>').addClass('navbar-div').appendTo('.imgbar')
$('<ul>').appendTo($navBar).addClass('nav-bar')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'home-li')
$('<a href= #home>').appendTo('#home-li').text('HOME').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'bio-li')
$('<a href= #bio>').appendTo('#bio-li').text('BIO').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'resume-li')
$('<a href= #resume>').appendTo('#resume-li').text('RESUME').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'projects-li')
$('<a href= #projects>').appendTo('#projects-li').text('PROJECTS').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'links-li')
$('<a href= #links>').appendTo('#links-li').text('LINKS').addClass('nav-anchor')

//////SECTIONS//////
$('<div>').addClass('stuff').appendTo('body')
$('<section>').attr('id', 'bio').appendTo('.stuff')
$('<section>').attr('id', 'resume').appendTo('.stuff')
$('<section>').attr('id', 'projects').appendTo('.stuff')
$('<section>').attr('id', 'links').appendTo('.stuff')

//////BIO///////
$('<p>').appendTo('#bio').text('Hi, I\'m Lily! I\'m a software engineer based in Brooklyn, NY. Feel free to check out my stuff in the links!').addClass('bio-text')

})

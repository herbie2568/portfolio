/////JQUERY/////
$(() => {
////HEADER/////
// const $h1 = $('<div>').appendTo

$('<header>').appendTo('body').attr('id', 'header')
$('<div>').text('LILY CHEN').appendTo('header').addClass('header').attr('id', 'header-name')
$('<div>').text('full   stack   web   developer').appendTo('header').addClass('header-description')
// $('<div>').text('Web Developer | ').appendTo('header').addClass('header').attr('id', 'header-description')

/////MAIN IMAGE/////
const $imgBar = $('<div>').appendTo('body').addClass('imgbar')

$('<div>').appendTo($imgBar).addClass('lilypics-div')

///central park pic//
$(`<img src ='lilypics/IMG_0314.jpeg'>`).appendTo('.lilypics-div').addClass('main-pic')


////NAV BAR/////
const $navBar = $('<div>').addClass('navbar-div').appendTo('.imgbar')
$('<ul>').appendTo($navBar).addClass('nav-bar')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'home-li')
$('<a href= #header>').appendTo('#home-li').text('home').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'about-li')
$('<a href= #homeabout-div>').appendTo('#about-li').text('about').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'resume-li')
$('<a href= #aboutresume-div>').appendTo('#resume-li').text('resume').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'projects-li')
$('<a href= #resumeprojects-div>').appendTo('#projects-li').text('projects').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'gallery-li')
$('<a href= #projectsgallery-div>').appendTo('#gallery-li').text('gallery').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'links-li')
$('<a href= #gallerylinks-div>').appendTo('#links-li').text('links').addClass('nav-anchor')
$('<li>').appendTo('.nav-bar').addClass('nav-list').attr('id', 'contact-li')
$('<a href= #linkscontact-div>').appendTo('#contact-li').text('contact').addClass('nav-anchor')

//////SECTIONS//////
$('<div>').addClass('stuff').appendTo('body')
$('<div>').appendTo('.stuff').attr('id', 'homeabout-div')
$('<section>').attr('id', 'about').appendTo('.stuff')
$('<div>').appendTo('.stuff').attr('id', 'aboutresume-div')
$('<section>').attr('id', 'resume').appendTo('.stuff')
$('<div>').appendTo('.stuff').attr('id', 'resumeprojects-div')
$('<section>').attr('id', 'projects').appendTo('.stuff')
$('<div>').appendTo('.stuff').attr('id', 'projectsgallery-div')
$('<section>').attr('id', 'gallery').appendTo('.stuff')
$('<div>').appendTo('.stuff').attr('id', 'gallerylinks-div')
$('<section>').attr('id', 'links').appendTo('.stuff')
$('<div>').appendTo('.stuff').attr('id', 'linkscontact-div')
$('<section>').attr('id', 'contact').appendTo('.stuff')



//////about///////
$('<h2>').appendTo('#about').text('about')
$('<div>').appendTo('#about').addClass('about-div')
$(`<img src ='lilypics/IMG_3661.jpeg'>`).appendTo('.about-div').addClass('about-pic')
$('<p>').appendTo('.about-div').text('Hi, I\'m Lily! I\'m a software engineer based in Brooklyn, NY. I enjoy doing both front end and back end web development. You can usually find me biking, swimming, playing the piano/cello, solving Rubik\'s cubes (check the gallery to see my collection!), playing video games, or walking my dog Roxie. I\'m also a bit of a Jeopardy nerd and do watch it religiously. I love learning new things and am constantly honing my current skills. Feel free to check out my website to see all my random stuff!').addClass('about-text')




////resume//////
$('<h2>').appendTo('#resume').text('resume')
////EXPERIENCE////
$('<p>').appendTo('#resume').text('Experience').addClass('resume-text')
$('<p>').appendTo('#resume').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna nisl, euismod eget turpis pellentesque, pellentesque iaculis lorem. Vestibulum sit amet est convallis, mollis eros at, placerat ipsum.').addClass('resume-subtext')
////EDUCATION////
$('<p>').appendTo('#resume').text('Education').addClass('resume-text')
$('<p>').appendTo('#resume').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna nisl, euismod eget turpis pellentesque, pellentesque iaculis lorem. Vestibulum sit amet est convallis, mollis eros at, placerat ipsum.').addClass('resume-subtext')
////SKILLS/////
$('<p>').appendTo('#resume').text('Skills').addClass('resume-text')
$('<p>').appendTo('#resume').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna nisl, euismod eget turpis pellentesque, pellentesque iaculis lorem. Vestibulum sit amet est convallis, mollis eros at, placerat ipsum.').addClass('resume-subtext')
////AWARDS AND HONORS////
$('<p>').appendTo('#resume').text('Awards and Honors').addClass('resume-text')
$('<p>').appendTo('#resume').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus urna nisl, euismod eget turpis pellentesque, pellentesque iaculis lorem. Vestibulum sit amet est convallis, mollis eros at, placerat ipsum.').addClass('resume-subtext')


///projects////
$('<h2>').appendTo('#projects').text('projects')
/////LEGEND OF ZELDA////
// $('<div>').appendTo('#projects').addClass('zelda-div')
$('<div>').appendTo('#projects').addClass('projects-div')
$(`<a href = 'https://lilysbotwgame.netlify.app/' target = '/blank' >`).appendTo('.projects-div').text('The Legend of Zelda Game').addClass('projects-text').addClass('project-one')
$(`<img src= 'lilypics/zelda-ss.png'>`).appendTo('.project-one').addClass('zelda-ss1')

/////DUMMY LINK/////
$(`<a href = 'https://lilysbotwgame.netlify.app/' target = '/blank' >`).appendTo('.projects-div').text('Fake Project Two').addClass('projects-text').addClass('project-two')
$(`<img src= 'lilypics/zelda-ss.png'>`).appendTo('.project-two').addClass('zelda-ss2')

/////DUMMY LINK 2/////
$(`<a href = 'https://lilysbotwgame.netlify.app/' target = '/blank' >`).appendTo('.projects-div').text('Fake Project Three').addClass('projects-text').addClass('project-three')
$(`<img src= 'lilypics/zelda-ss.png'>`).appendTo('.project-three').addClass('zelda-ss3')



////gallery////
$('<h2>').appendTo('#gallery').text('gallery')
// $('<p>').appendTo('#gallery').text('Here are some pictures of me').addClass('gallery-text')

$('<div>').appendTo('#gallery').addClass('carousel-container')
////previous arrow////
$('<div>').appendTo('.carousel-container').addClass('carousel-button').addClass('previous')
$(`<img src = 'lilypics/left_arrow.png'>`).appendTo('.previous')

////carousel images////
$('<div>').appendTo('.carousel-container').addClass('carousel-images')
//5x5//
$(`<img src ='cubes/IMG_1033.jpeg'>`).appendTo('.carousel-images')
//7x7//
$(`<img src ='cubes/IMG_1034.jpeg'>`).appendTo('.carousel-images')
//9x9//
$(`<img src ='cubes/IMG_1035.jpeg'>`).appendTo('.carousel-images')
//4x4//
$(`<img src ='cubes/IMG_1036.jpeg'>`).appendTo('.carousel-images')
//mona lisa//
$(`<img src ='cubes/IMG_1037.jpeg'>`).appendTo('.carousel-images')
//go cube//
$(`<img src ='cubes/IMG_1039.jpeg'>`).appendTo('.carousel-images')
//3x3 from set//
$(`<img src ='cubes/IMG_1040.jpeg'>`).appendTo('.carousel-images')
//3x3 og//
$(`<img src ='cubes/IMG_1041.jpeg'>`).appendTo('.carousel-images')
//leaf//
$(`<img src ='cubes/IMG_1042.jpeg'>`).appendTo('.carousel-images')
//mirror//
$(`<img src ='cubes/IMG_1043.jpeg'>`).appendTo('.carousel-images')
//square1//
$(`<img src ='cubes/IMG_1044.jpeg'>`).appendTo('.carousel-images')
//2x2//
$(`<img src ='cubes/IMG_1045.jpeg'>`).appendTo('.carousel-images')
//centersquare//
$(`<img src ='cubes/IMG_1046.jpeg'>`).appendTo('.carousel-images')
//lego//
$(`<img src ='cubes/IMG_1047.jpeg'>`).appendTo('.carousel-images')
//weird 3x3//
$(`<img src ='cubes/IMG_1048.jpeg'>`).appendTo('.carousel-images')
//3x3x5//
$(`<img src ='cubes/IMG_1049.jpeg'>`).appendTo('.carousel-images')
//megaminx//
$(`<img src ='cubes/IMG_1050.jpeg'>`).appendTo('.carousel-images')
//clear 3x3//
$(`<img src ='cubes/IMG_1051.jpeg'>`).appendTo('.carousel-images')
//void//
$(`<img src ='cubes/IMG_1052.jpeg'>`).appendTo('.carousel-images')
//3x3 mini//
$(`<img src ='cubes/IMG_1053.jpeg'>`).appendTo('.carousel-images')
//6x6//
$(`<img src ='cubes/IMG_1054.jpeg'>`).appendTo('.carousel-images')


/////next arrow////
$('<div>').appendTo('.carousel-container').addClass('carousel-button').addClass('next')
$(`<img src = 'lilypics/right_arrow.png'>`).appendTo('.next')

////description////


////CAROUSEL JQUERY//////
currentImgIndex = 0
  numOfImages= $('.carousel-images').children().length - 1
  $('.next').on('click', ()=> {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex < numOfImages) {
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if (currentImgIndex > 0) {
        currentImgIndex--
    } else {
        currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })



////links////
$('<h2>').appendTo('#links').text('links')
///GITHUB////
$('<div>').appendTo('#links').addClass('github-div')

$(`<a href = 'https://github.com/herbie2568' target = '/blank'>`).appendTo('.github-div').text('github').addClass('links-text')
// $(`<img src='lilypics/github_icon.png'>`).appendTo('.github-div').addClass('github-logo')



///LINKEDIN////
$('<div>').appendTo('#links').addClass('linkedin-div')
$(`<a href = 'https://www.linkedin.com/in/lilychen910/' target = '/blank'>`).appendTo('.linkedin-div').text('linkedin').addClass('links-text')
////FACEBOOK////
$('<div>').appendTo('#links').addClass('facebook-div')
$(`<a href = 'https://www.facebook.com/lilyp4d/' target = '/blank'>`).appendTo('.facebook-div').text('facebook').addClass('links-text')
////INSTAGRAM////
$('<div>').appendTo('#links').addClass('instagram-div')
$(`<a href = 'https://www.instagram.com/sugarsmaster/' target = '/blank'>`).appendTo('.instagram-div').text('instagram').addClass('links-text')
////TWITTER////
$('<div>').appendTo('#links').addClass('reddit-div')
$(`<a href = 'https://www.reddit.com/user/herbie2568' target = '/blank'>`).appendTo('.reddit-div').text('reddit').addClass('links-text')

////CONTACT////
$('<h2>').appendTo('#contact').text('contact')
$('<div>').appendTo('#contact').addClass('contact-div')
$(`<form action="action_page.php" target = '/blank'>`).appendTo('.contact-div').addClass('form')
$(`<label for="fname">`).appendTo('.form').text('First Name')
$(`<input type="text" id="fname" name="firstname" placeholder="Your first name..">`).appendTo('.form')

$(`<label for="lname">`).appendTo('.form').text('Last Name')
$(`<input type="text" id="lname" name="lastname" placeholder="Your last name..">`).appendTo('.form')

$(`<label for="email">`).appendTo('.form').text('Email')
$(`<input type="email" id="email" name="email" placeholder="Your email..">`).appendTo('.form')

$(`<label for="phone">`).appendTo('.form').text('Phone Number')
$(`<input type="tel" id="phone" name="phone" placeholder= "ex. (888) 888-8888">`).appendTo('.form')

$(`<label for="subject">`).appendTo('.form').text('Message')
$(`<textarea id="subject" name="subject" placeholder="Leave a message!" style="height:200px"></textarea>`).appendTo('.form')

$(`<input type="submit" value="Submit">`).appendTo('.form')


/////FOOTER////
$('<footer>').appendTo('body').addClass('footer')
///SKYLINE PIC/////
$('<div>').appendTo('footer').addClass('skyline-div')
$(`<img src ='lilypics/skyline-bw.webp'>`).appendTo('.skyline-div').addClass('skyline-image')

////GITHUB ICON////

$(`<a href = 'https://github.com/herbie2568' target = '/blank'>`).addClass('github-logo').appendTo('.skyline-div')
$(`<img src='lilypics/github-logo-color.png'>`).appendTo('.github-logo').addClass('github-image')

////LINKEDIN LOGO///
$(`<a href = 'https://www.linkedin.com/in/lilychen910/' target = '/blank'>`).addClass('linkedin-logo').appendTo('.skyline-div')
$(`<img src='lilypics/linkedin-logo-color.png'>`).appendTo('.linkedin-logo').addClass('linkedin-image')

////REDDIT LOGO///
$(`<a href = 'https://www.reddit.com/user/herbie2568' target = '/blank'>`).addClass('reddit-logo').appendTo('.skyline-div')
$(`<img src='lilypics/reddit-logo-color.png'>`).appendTo('.reddit-logo').addClass('reddit-image')

////FACEBOOK LOGO///
$(`<a href = 'https://www.facebook.com/lilyp4d/' target = '/blank'>`).addClass('facebook-logo').appendTo('.skyline-div')
$(`<img src='lilypics/facebook-logo-color.png'>`).appendTo('.facebook-logo').addClass('facebook-image')

////INSTAGRAM LOGO///
$(`<a href = 'https://www.instagram.com/sugarsmaster/' target = '/blank'>`).addClass('instagram-logo').appendTo('.skyline-div')
$(`<img src='lilypics/instagram-logo-color.webp'>`).appendTo('.instagram-logo').addClass('instagram-image')

////COLOR ICONS////
////GITHUB ICON////
// $(`<img src='lilypics/github-logo-color.png'>`).appendTo('.skyline-div').addClass('github-logo')
//
// ////LINKEDIN LOGO///
// $(`<img src='lilypics/linkedin-logo-color.png'>`).appendTo('.skyline-div').addClass('linkedin-logo')
//
// ////REDDIT LOGO///
// $(`<img src='lilypics/reddit-logo-color.png'>`).appendTo('.skyline-div').addClass('reddit-logo')
//
// ////FACEBOOK LOGO///
// $(`<img src='lilypics/facebook-logo-color.png'>`).appendTo('.skyline-div').addClass('facebook-logo')
//
// ////INSTAGRAM LOGO///
// $(`<img src='lilypics/instagram-logo-color.webp'>`).appendTo('.skyline-div').addClass('instagram-logo')


})

import dogs from '/data.js'
import TinProfile from './Dog.js'




const heroPost = new TinProfile(dogs[2])

document.getElementById('hero-post').innerHTML = heroPost.getProfileHtml() 





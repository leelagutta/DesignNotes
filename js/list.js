var introList=
'<div class="intro"><p>These are few of the resources I always want to have in handy. This list will help anyone looking to kickstart their career in design in Tech.</p>';

var designList = 
'<div class="heading"><h1>DESIGN 101</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>Design Principals</li>'+
'<li>Importance of design in Tech</li>'+
'<li><a target="_blank" href="https://css-tricks.com/design-systems-building-future/">'+
'Design Systems</a></li>'+
'<li><a target="_blank" href="http://blog.crew.co/native-app-vs-web-app/">'+
'Native app Vs Web app</a></li>'+
'<li><a target="_blank" href="http://www.designyourway.net/blog/resources/understanding-design-and-development-jobs-titles/">'+
'Understanding design & developement job titles</a></li>'+
'</ul></div>'

var uxDesign=
'<div class="heading"><h1>UX DESIGN</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>What is UX design?</li>'+
'<li>UX is not common sense</li>'+
'<li>Difference between UX and UI design</li>'+
'<li><a target="_blank"  href="https://medium.com/@wnialloconnor/how-to-build-an-experience-map-5e55b7ee4f32#.h603ciorw">'+
'How to build an experience map</a></li>'+
'<li><a target="_blank"  href="https://www.smashingmagazine.com/2011/09/the-s-m-a-r-t-user-experience-strategy/">'+
'SMART userExperience Strategy</a></li></ul></div>';

var colorList = 
'<div class="heading"><h1>COLOR</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>What is color?</li>'+
'<li>UI gradiants</li>'+
'<li>IOS colors</li>'+
'<li>Color history</li>'+
'<li>Color in web</li></ul></div>';

var typeList=
'<div class="heading"><h1>TYPOGRAPHY</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>What is typography?</li>'+
'<li>Best Type pairings</li>'+
'<li>Understanding Type</li>'+
'<li>Typography in Webdesign</li>'+
'<li>Best books in typography</li>'+
'<li>Typography in mobile</li></ul></div>';

var jsList=
'<div class="heading"><h1>JavaScript</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>Basics of JavaScript</li>'+
'<li>Objects and Functions</li>'+
'<li>How does memory work in JS</li>'+
'<li>Scopes and clousers</li>'+
'<li>Design Patterns</li>'+
'<li>Jquery methods</li></ul></div>';

var webList=
'<div class="heading"><h1>WEB DESIGN</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>Responsive web design fundamentals - Udacity</li>'+
'<li>Responsive images</li>'+
'<li>What is viewport?</li>'+
'<li><a href="http://learn.shayhowe.com/html-css/positioning-content/">'+
'Positioning Content</a></li>'+
'<li><a href="http://www.peterjthomson.com/2009/08/difference-between-marketing-and-design/">'+
'Difference between marketing and Design</a></li></ul></div>';

var htmlList=
'<div class="heading"><h1>HTML</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>What is HTML & CSS</li>'+
'<li>Cheat sheet for all the elements</li>'+
'</ul></div>';

var cssList=
'<div class="heading"><h1>CSS</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>What is HTML & CSS</li>'+
'<li><a href="http://www.w3schools.com/cssref/css_selectors.asp">'+
'Cheat sheet for css selectors</a></li>'+
'<li>Cheat sheet for all the elements</li>'+
'<li>Css cascasing rules</li>'+
'<li>Css display</li>'+
'<li>Css flexbox</li>'+
'<li>Animations</li>'+
'<li>Box Model</li>'+
'<li><a href="http://www.webdesignerdepot.com/2013/08/10-css-selectors-you-shouldnt-code-without/">10 useful Selectors</a></li>'+
'<li><a href="https://css-tricks.com/how-nth-child-works/">How n-th child works</a></li>'+
'<li><a href="https://css-tricks.com/useful-nth-child-recipies/">n-th child receipes</a></li>'+
'<li><a href="https://css-tricks.com/child-and-sibling-selectors/">'+
'child-and-sibling-selectors</a></li>'+
'<li><a href="http://learnlayout.com/toc.html">'+
'CSS Layout</a></li></ul></div>';	

var frameworkList=
'<div class="heading"><h1>FRAMEWORK</h1></div>'+
'<div class="line"></div>'+
'<div class="list"><ul>'+
'<li>Css Animations</li>'+
'<li>Custom Grid</li>'+
'<li>Masonry Layout</li>'+
'<li><a href="https://medium.com/@wnialloconnor/how-to-build-an-experience-map-5e55b7ee4f32#.h603ciorw">'+
'How to build an experience map</a></li>'+
'<li><a href="https://ole.michelsen.dk/blog/setup-local-web-server-apache-php-osx-yosemite.html">'+
'Local WebServer Setup</a></li>'
'<li>BootStrap</li></ul></div>';

var contactList='<ul>'+
	'<li><a target="_blank" href="https://www.linkedin.com/in/leelagutta"><img src="asserts/linkedin.png" height="30" width="30" alt="LinkedIn"></a></li>'+
	'<li><a target="_blank" href="https://twitter.com/DhanyaGutta"><img src="asserts/twitter_bird.png" height="30" width="30" alt="Twitter"></a></li>'+
	'<li><a target="_blank" href="https://dhanyagutta.com"><img src="asserts/email.png" height="30" width="30" alt="email"></a></li>'+
	'</ul>';

var list =[introList,designList,uxDesign,colorList,typeList,webList,htmlList,cssList,jsList,frameworkList];  



 $(".box:nth-child(1)").append(list[0]); 
	$(".box:nth-child(2)").append(list[1]); 
    $(".box:nth-child(3)").append(list[2]); 
	$(".box:nth-child(4)").append(list[3]); 
	$(".box:nth-child(5)").append(list[4]);
	$(".box:nth-child(6)").append(list[5]); 
	$(".box:nth-child(7)").append(list[6]); 
    $(".box:nth-child(8)").append(list[7]); 
	$(".box:nth-child(9)").append(list[8]); 
	$(".box:nth-child(10)").append(list[9]); 
	$(".box:nth-child(11)").append(list[10]);   
	$(".contactList").append(contactList);

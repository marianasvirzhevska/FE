

document.addEventListener('DOMContentLoaded', function() {
	let body = document.querySelector('body');
	// menu links
	const links = [
		 {href: "./", title: "Default", uhref: "http://twitter.com/jacobrask", utitle: "Jacob Rask"},
		 {href: "#stripes", title: "Stripes", uhref: "http://vasilis.nl", utitle: "Vasilis van Gemert"},
		 {
			href: " #notepad",
			title: "Notepad",
			uhref: "http://twitter.com/eworm_",
			utitle: "Wout Mager"},
		 {
			href: " #gardenof3den",
			title: "Garden of CSS-3Den",
			uhref: "http://designfestival.com/",
			utitle: "Alex Walker"},
		 {
			href: " #bbubles",
			title: "Bbubles",
			uhref: "http://cssing.org.ua/",
			utitle: "akella & Genn"},
		 {
			href: " #swiss",
			title: "Swiss",
			uhref: "http://chrsl.net/",
			utitle: "Chris Lee"},
		 {
			href: " #turnaround",
			title: "Turn around",
			uhref: "http://www.basvandorst.nl/",
			utitle: "Bas van Dorst"
		},
		 {
			href: " #whirl",
			title: "Whirl",
			uhref: "https://twitter.com/iamvdo",
			utitle: "Vincent De Oliveira"
		},
		 {
			href: "http://localhost:63342/FE/html+css/task-7/index.ht…?_ijt=bqru2mc6afkapirejtbjo41sr1#bundler_inspired",
			title: "BundlerInspired",
			uhref: "https://github.com/PhilG",
			utitle: "PhilG"
		},
		{
			href: " #oldie",
			title: "Oldie",
			uhref: "http://pointlessone.org/",
			utitle: "Alexander Mankuta"
		},
		{
			href: " #typhon",
			title: "Typhon",
			uhref: "http://eswat.ca/",
			utitle: "ESWAT"
		},
		{
			href: " #cube",
			title: "Cube",
			uhref: "http://be.net/iurevych",
			utitle: "Sergii Iurevych"
		},
		{
			href: " #northern-lights",
			title: "Northern Lights",
			uhref: "http://potapoff.org/",
			utitle: "Igor «SkAZi» Potapov"
		},
		{
			href: " #skewed",
			title: "Skewed",
			uhref: "http://twitter.com/sntxrrr",
			utitle: "Paul Steffens"
		},
		{
			href: " #moonlight",
			title: "Moonlight",
			uhref: "http://twitter.com/derSchepp",
			utitle: "Christian \"Schepp\" Schaefer"
		},
		{
			href: " #typewriter",
			title: "Typewriter",
			uhref: "http://thisbythem.com/",
			utitle: "Lance Alton Troxel"
		},
		{
			href: " #oldschool",
			title: "Old School",
			uhref: "http://romanliutikov.com/",
			utitle: "Roman Liutikov"
		},
		{
			href: " #butchery",
			title: "Butchery",
			uhref: "http://vibby.fr/",
			utitle: "Vibby"
		},
		{
			href: " #m6tt",
			title: "m6tt",
			uhref: "http://m6tt.com/",
			utitle: "Matt Woodfield"
		},
		{
			href: " #1024-bytes",
			title: "1024-bytes",
			uhref: "http://github.com/faisalman",
			utitle: "Faisalman"
		},
		{
			href: " #molokai",
			title: "Molokai",
			uhref: "http://designtomarkup.com/",
			utitle: "Kien Nguyen"
		},
		{
			href: " #android",
			title: "Android",
			uhref: "http://agat.in/",
			utitle: "Aleksej Romanovskij"
		},
		{
			href: " #bookshelf",
			title: "Bookshelf",
			uhref: "https://github.com/SelenIT",
			utitle: "SelenIT"
		},
		{
			href: " #geocities",
			title: "GeoCities",
			uhref: "https://github.com/asavartsov/",
			utitle: "Alexey Savartsov"
		},
		{
			href: " #imbatman",
			title: "I'm Batman",
			uhref: " #",
			uutitle: "Paul Reid"
		},
		{
			href: " #ebhoren",
			title: "Ebhoren",
			uhref: "http://www.dominic-mercier.com/",
			utitle: "Dominic Mercier"
		},
		{
			href: " #facetime",
			title: "Facetime",
			uhref: "http://twitter.com/bnijenhuis",
			utitle: "Bernard Nijenhuis"
		},
		{
			href: " #cloudy",
			title: "Cloudy",
			uhref: "http://twitter.com/putnik",
			utitle: "Sergey Leschina"
		},
		{
			href: " #greymatter",
			title: "Grey Matter",
			uhref: "http://pepelsbey.net/",
			utitle: "Vadim Makeev"
		},
		{
			href: " #blue_square",
			title: "Blue square",
			uhref: "http://twitter.com/hsablonniere",
			utitle: "Hubert Sablonnière"
		},
		{
			href: " #helvetipink",
			title: "HelvetiPink",
			uhref: "http://billkeller.name/",
			utitle: "Bill Keller"
		},
		{
			href: " #summersun",
			title: "Summer Sun",
			uhref: "http://twitter.com/tanya_peasgood",
			utitle: "Tanya Peasgood"
		},
		{
			href: " #lessismore",
			title: "Less is More",
			uhref: "http://twitter.com/rob_balfre",
			utitle: "Rob Balfre"
		},
		{
			href: " #inset",
			title: "Inset",
			uhref: "http://www.hachemuda.com/",
			utitle: "Guillermo Latorre"
		},
		{
			href: " #legible",
			title: "Legible",
			uhref: "http://lumens.se/",
			utitle: "Reimund Trost"
		},
		{
			href: " #greenlemon",
			title: "Green Lemon",
			uhref: "http://twitter.com/d_radunz",
			utitle: "Dirk Radunz"
		},
		{
			href: " #wired",
			title: "Wired",
			uhref: "http://www.digitalwaxworks.com/",
			utitle: "Brett DeWoody"
		},
		{
			href: " #narcissist",
			title: "Narcissist",
			uhref: "http://jackiebalzer.com/",
			utitle: "Jackie Balzer"
		},
		{
			href: " #juizstar",
			title: "Juiz Star",
			uhref: "http://www.creativejuiz.fr/",
			utitle: "Geoffrey Crofte"
		},
		{
			href: " #wolfr",
			title: "Wolfr",
			uhref: "http://twitter.com/wolfr_",
			utitle: "Johan Ronsse"
		},
		{
			href: " #fortyeight1k",
			title: "fortyeight1k",
			uhref: "http://michael.haschke.biz/",
			utitle: "Michael Haschke"
		},
		{
			href: " #columns",
			title: "Columns",
			uhref: "http://rmcreative.ru/",
			utitle: "Alexander Makarov"
		},
		{
			href: " #trainspotting",
			title: "Trainspotting",
			uhref: "http://www.hboaventura.com/",
			utitle: "Henrique Boaventura"
		},
		{
			href: " #ribbon",
			title: "ribbon",
			uhref: "http://oodavid.com/",
			utitle: "David King"
		},
		{
			href: " #solarized",
			title: "Solarized",
			uhref: "http://twitter.com/heirenton",
			utitle: "heirenton"
		},
		{
			href: " #openwater",
			title: "Open Water",
			uhref: "https://github.com/gilmoreorless",
			utitle: "Gilmore Davidson"
		},
		{
			href: " #html5colors",
			title: "HTML5 Colors",
			uhref: "http://www.theweblife.com/",
			utitle: "Michael Garrett Jones"
		},
		{
			href: " #heart_css",
			title: "heart css",
			uhref: "https://github.com/kjchoy",
			utitle: "Choy Kum Jin"
		},
		{
			href: " #sourcy",
			title: "Sourcy",
			uhref: "http://kizu.ru/en/",
			utitle: "Roman Komarov"
		},
		{
			href: " #terminal",
			title: "Terminal",
			uhref: "http://twitter.com/PanyaKor",
			utitle: "Mikhail Korepanov"
		},
		{
			href: " #goodnight_moon",
			title: "Goodnight Moon",
			uhref: "http://livingcode.org/",
			utitle: "Dethe Elza"
		},
		{
			href: " #fancy",
			title: "Fancy",
			uhref: "http://www.trustweb.it/",
			utitle: "Michele Cipriani"
		},
		{
			href: " #textlevels",
			title: "Text Levels",
			uhref: "http://www.patrickmann.com/",
			utitle: "Patrick Mann"
		},
		{
			href: " #yelo",
			title: "Yelo",
			uhref: "http://bartdebruin.nl/",
			utitle: "Bart de Bruin"
		},
		{
			href: " #spartan",
			title: "Spartan",
			uhref: "http://trentm.com/",
			utitle: "Trent Mick"
		},
		{
			href: " #paper",
			title: "paper",
			uhref: "http://daniel-rauber.de/",
			utitle: "Daniel Rauber"
		},
		{
			href: " #lucuma",
			title: "Lúcuma",
			uhref: "http://twitter.com/germanmartinez",
			utitle: "Germán Martínez"
		},
		{
			href: " #freshsoda",
			title: "Fresh Soda",
			uhref: "http://jungundwillich.de/",
			utitle: "Jan Ortgies"
		},
		{
			href: " #ev",
			title: "Ev",
			uhref: "http://evangeneer.net/",
			utitle: "Mathieu Rochette"
		},
		{
			href: " #b4ya11y",
			title: "B4y & A11y",
			uhref: "http://twitter.com/etBen",
			utitle: "Benoit Klein"
		},
		{
			href: " #adaptype",
			title: "Adaptype",
			uhref: "http://vasilis.nl/",
			utitle: "Vasilis van Gemert"
		},
		{
			href: " #bleubleu",
			title: "BleuBleu",
			uhref: "http://www.leightonrodney.com/",
			utitle: "Leighton Rodney"
		},
		{
			href: " #simpl",
			title: "Simpl",
			uhref: "http://www.neofyt.com/",
			utitle: "Neofyt"
		},
		{
			href: " #mitchiru",
			title: "Mitchiru",
			uhref: "http://banquo.de/",
			utitle: "Michael Fritz"
		},
		{
			href: " #casoy",
			title: "Casoy",
			uhref: "http://twitter.com/robertboloc",
			utitle: "Robert Boloc"
		},
		{
			href: " #thesimpleswede",
			title: "The Simple Swede",
			uhref: "http://www.tobiasphoto.com/",
			utitle: "Tobias Akeblom"
		},
		{
			href: " #photobox",
			title: "PhotoBox",
			uhref: "http://stinkyinkshop.co.uk/",
			utitle: "Stinkyink"
		},
		{
			href: " #desktop",
			title: "Desktop",
			uhref: "http://webmolot.com/",
			utitle: "Webmolot"
		},
		{
			href: " #monochrome",
			title: "Monochrome",
			uhref: "http://tamerayd.in/",
			utitle: "Tamer Aydin"
		},
		{
			href: " #expandable",
			title: "Expandable",
			uhref: "http://twitter.com/curlybrace",
			utitle: "Dennis Madvedovsky"
		},
		{
			href: " #bluebrush",
			title: "BlueBrush",
			uhref: "https://twitter.com/jennyhao",
			utitle: "Jenny Hao"
		},
		{
			href: " #noticeboard",
			title: "Notice Board",
			uhref: "http://www.about.me/niharsawant",
			utitle: "Nihar Sawant"
		},
		{
			href: " #triangulate",
			title: "Triangulate",
			uhref: "http://jumplinkdesign.co.vu/",
			utitle: "Sebastien Paquet"
		},
		{
			href: " #aapl",
			title: "AAPL",
			uhref: "http://twitter.com/joffreyjaffeux",
			utitle: "Joffrey Jaffeux"
		},
		{
			href: " #yollaw",
			title: "Yollaw",
			uhref: "http://franzose.in/",
			utitle: "Yan Ivanov"
		},
		{
			href: " #stretchy",
			title: "Stretchy",
			uhref: "http://twitter.com/mistadikay",
			utitle: "Denis Koltsov"
		},
		{
			href: " #smile",
			title: "smile",
			uhref: "http://twitter.com/realmuecke",
			utitle: "Michael Scharnagl"
		},
		{
			href: " #toolbar",
			title: "Toolbar",
			uhref: "http://chervonny.ru/en/",
			utitle: "Maxim Chervonny"
		},
		{
			href: " #roundrect",
			title: "Round Rect",
			uhref: "http://www.bitstorm.org/",
			utitle: "Edwin Martin"
		},
		{
			href: " #therhythm",
			title: "The Rhythm",
			uhref: "http://kizu.ru/en/",
			utitle: "Roman Komarov"
		},
		{
			href: " #simplebox",
			title: "SimpleBox",
			uhref: "http://raelmax.com/",
			utitle: "Rael Max"
		},
		{
			href: " #crawl",
			title: "Crawl",
			uhref: "http://atelierbramdehaan.nl/",
			utitle: "Bram de Haan"
		}
	];

	//side menu
	const header = createNode('header');
	const h1 = createNode('h1');
	const sideNav = createNode('nav');
	const h2 = createNode('h2');
	const navUl = createNode('ul');

	h1.innerText = "CSS1K";
	h2.innerText = "Select a design";

	links.map( el => {
		const navLi = createNode('li');
		navLi.appendChild(createLink(el.title, el.href));
		navLi.appendChild(createLink(el.utitle, el.uhref));
		navUl.appendChild(navLi);
		}
	);


	sideNav.appendChild(h2);
	sideNav.appendChild(navUl);
	header.appendChild(h1);
	header.appendChild(sideNav);

	// main content
	const article = createNode('article');
	const artHeader = createNode('header');
	const artH2 = createNode('h2');
	const artDfn = createNode('dfn');
	const artP = createNode('p');
	const sectionOne = createNode('section');
	const secH2 = createNode('h2');
	const secSecH2 = createNode('h2');
	const secLink = createNode('a');
	const secLink1 = createNode('a');
	const secSite = createNode('site');
	const secP1 = createNode('p');
	const secP2 = createNode('p');
	const secP3 = createNode('p');
	const secP4 = createNode('p');
	const secB = createNode('b');
	const secSpan = createNode('span');
	const sectionTwo = createNode('section');
	const list = createNode('ol');
	const li1 = createNode('li');
	const li2 = createNode('li');
	const li3 = createNode('li');
	const li4 = createNode('li');
	const li5 = createNode('li');
	const li6 = createNode('li');
	const fooP = createNode('p');
	const em = createNode('em');

	const footer = createNode('footer');

	const fragment = document.createDocumentFragment();

	const css = createAbbr('CSS'); // common used of css abbr
	const abrK = createAbbr('abbr'); // common used of Kibibyte abbr
	abrK.title = 'Kibibyte';
	abrK.innerText = 'K';

	// article header
	artH2.appendChild(createTxt('The Beauty in '));
	artH2.appendChild(css);
	artH2.appendChild(createTxt(' Design'));
	artP.appendChild(createTxt('A demonstration of what can be accomplished with only 1 '));
	artP.appendChild(abrK);
	artP.appendChild(createTxt('('));
	artDfn.innerText = 'Kibibyte';
	artDfn.title = '1024 bytes';
	artP.appendChild(artDfn);
	artP.appendChild(createTxt(') of '));
	artP.appendChild(css);
	artP.appendChild(createTxt('. Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.'));

	artHeader.appendChild(artH2);
	artHeader.appendChild(artP);
	
	// section one
	secH2.innerText = 'So What is This About?';
	secSpan.innerText = 'a lot of';
	secSpan.id = 'zengarden-age';

	secSite.appendChild(css);
	secSite.appendChild(createTxt(' Zen Garden'));
	secLink.appendChild(secSite);
	secLink.href = 'http://www.csszengarden.com';

	secP1.appendChild(createTxt('Back in 2003 (that\'s '));
	secP1.appendChild(secSpan);
	secP1.appendChild(createTxt(' years ago!) '));
	secP1.appendChild(createLink('Dave Shea', 'http://mezzoblue.com'));
	secP1.appendChild(createTxt(' launched the '));
	secP1.appendChild(secLink);
	secP1.appendChild(createTxt('. It showcased what was possible with '));
	secP1.appendChild(css);
	secP1.appendChild(createTxt('-based designs, leading to an explosion in the use of CSS on the web. Then, '));
	secP1.appendChild(createLink('Peter van der Zee', 'ttp://qfox.nl'));
	secP1.appendChild(createTxt(' created '));
	secP1.appendChild(createLink('JS1k', 'http://js1k.com'));
	secP1.appendChild(createTxt(' in 2010, a competition to build cool applications with no more than 1 '));
	secP1.appendChild(createAbbr('K'));
	secP1.appendChild(createTxt(' of JavaScript.'));

	secP2.appendChild(createTxt('A lot has happened since the Zen Garden days, and today you can do almost anything with only '));
	secP2.appendChild(css);
	secP2.appendChild(createTxt('. As '));
	secP2.appendChild(css);
	secP2.appendChild(createTxt(' use is growing, so is the average '));
	secP2.appendChild(css);
	secP2.appendChild(createTxt(' file size. Popular sites have in average '));
	secLink1.href = 'http://httparchive.org/interesting.php#bytesperpage';
	secLink1.appendChild(createTxt(' 75'));
	secLink1.appendChild(createAbbr('K'));
	secLink1.appendChild(createTxt(' of '));
	secLink1.appendChild(css);
	secP2.appendChild(secLink1);
	secP2.appendChild(createTxt(', but some use up to a megabyte of style sheets!'));

	secP3.appendChild(createTxt('Do we need that much? '));
	secB.innerText = 'CSS1K';
	secP3.appendChild(secB);
	secP3.appendChild(createTxt(' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.'));
	
	sectionOne.appendChild(secH2);
	sectionOne.appendChild(secP1);
	sectionOne.appendChild(secP2);
	sectionOne.appendChild(secP3);
	
	// section two
	secSecH2.innerText = 'Participation';
	li1.appendChild(createTxt('Submissions must consist of only '));
	li1.appendChild(css);
	li2.appendChild(createTxt('Submissions may be up to 1 '));
	li2.appendChild(abrK);
	li2.appendChild(createTxt(' (1024 bytes) minified'));
	li3.appendChild(createTxt('Vendor prefixes are '));
	em.innerText = 'not';
	li3.appendChild(em);
	li3.appendChild(createTxt(' counted to the total number of bytes – submit your code unprefixed and '));
	li3.appendChild(createLink('PrefixFree', 'https://leaverou.github.io/prefixfree/'));
	li3.appendChild(createTxt(' will add necesssary prefixes'));
	li4.appendChild(createTxt('Any external resources and images, including '));
	li4.appendChild(createCode('data'));
	li4.appendChild(createAbbr(' URI'));
	li4.appendChild(createTxt('\'s, '));
	li4.appendChild(createCode('@font-face'));
	li4.appendChild(createTxt(' and '));
	li4.appendChild(createCode('@import'));
	li4.appendChild(createTxt('\'s, are forbidden'));
	li5.appendChild(createTxt('The page '));
	li5.appendChild(createLink('does not', 'http://dowebsitesneedtolookexactlythesameineverybrowser.com'));
	li5.appendChild(createTxt(' have to look the same in every browser, but graceful degradation is encouraged'));
	li6.appendChild(createTxt('The submitted code is licensed under the '));
	li6.appendChild(createLink('MIT License', 'http://www.opensource.org/licenses/mit-license.php'));

	list.appendChild(li1);
	list.appendChild(li2);
	list.appendChild(li3);
	list.appendChild(li4);
	list.appendChild(li5);
	list.appendChild(li6);

	secP4.appendChild(createTxt('To participate, fork '));
	secP4.appendChild(createLink('CSS1K', 'https://github.com/selfthinker/CSS1K/'));
	secP4.appendChild(createTxt(' at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage).'));

	sectionTwo.appendChild(secSecH2);
	sectionTwo.appendChild(list);
	sectionTwo.appendChild(secP4);

	article.appendChild(artHeader);
	article.appendChild(sectionOne);
	article.appendChild(sectionTwo);

	// footer
	fooP.appendChild(createTxt('Licensed under the '));
	fooP.appendChild(createLink('MIT license', 'http://www.opensource.org/licenses/mit-license.php'));
	fooP.appendChild(createTxt('Hosted and managed at '));
	fooP.appendChild(createLink('GitHub', 'https://github.com/selfthinker/CSS1K'));

	footer.appendChild(fooP);

	fragment.appendChild(header);
	fragment.appendChild(article);
	fragment.appendChild(footer);
	body.appendChild(fragment);
});

function createNode(node){
	return document.createElement(node);
}

function createTxt(text){
	return document.createTextNode(text);
}

function createCode(text){
	const code = document.createElement('code');
	code.innerText = text;
	return code
}

function createLink(text, href){
	const a = document.createElement('a');
	a.href = href;
	a.innerText = text;
	return a;
}

function createAbbr(text, title){
	const abr = document.createElement('abr');
	if (title) { abr.title = title; }
	abr.innerText = text;
	return abr;
}


// get menu links
let linksList = Array.from(document.querySelectorAll('header nav ul li'));
let linksArr = linksList.map(el => Array.from(el.children));
let linksObj = linksArr.map(el =>
	el.map( el => {
		let obj = {};
		obj.href = el.href;
		obj.title = el.innerText;
		return obj;
	})
);
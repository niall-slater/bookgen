//Dictionaries


var nouns = ["brexit", "bastard", "prophecy", "countryside", "sword", "book", "thief", "puppet", "miniaturist", "girl", "son", "mother", "daughter", "colleague", "politician", "queen", "treasure", "teenage boy", "pencil", "warehouse", "ham shank", "battle", "wizard school", "obelisk", "potion", "carpet", "violet", "rose", "marble", "referendum", "party", "beer", "vodka shot", "cigarette", "motorbike", "spellbook", "life", "death", "romance", "affair", "bird", "crow", "escort", "game", "artist", "wank", "word", "creature", "lizard", "blogger", "blog", "professor", "murder", "gamergater", "gate", "promise", "gun", "nazi"];
var nouns_plural = ["prophecies", "bastards", "country houses", "swords", "books", "thieves", "puppets", "miniaturists", "girls", "sons", "mothers", "daughters", "colleagues", "politicians", "queens", "treasures", "teenage boys", "pencils", "warehouses", "ham shanks", "battle", "wizard schools", "obelisks", "potions", "carpets", "flowers", "lilies", "marbles", "elections", "parties", "beers", "vodka shots", "cigarettes", "motorbikes", "murders", "spellbooks", "lives", "deaths", "romances", "affairs", "members of parliament", "words", "birds", "ravens", "vampires", "werewolves", "dinosaurs", "creatures", "bloggers", "blogs", "promises", "guns", "plumbers", "white nationalists"];
var nouns_proper = ["brexit", "life", "death", "love", "betrayal", "pain", "suffering", "democracy", "fascism", "art", "vulgarity", "sex", "anger", "frustration", "france", "earth", "meaning", "heaven", "wine", "cake", "rosemary", "gamergate", "racism", "white supremacy", "sexism"];
var adjectives = ["cold", "aggressive", "ugly", "poorly-Conceived", "unplanned", "racist", "expensive", "cheap", "slutty", "prudent", "unwise", "tasty", "difficult", "angry", "unpredictable", "second", "first", "regrettable", "magical", "enchanted", "beautiful", "left-Wing", "right-Wing", "centrist", "politically-Expedient", "scientifically-Proven", "dubious", "disastrous", "final", "sexually exciting", "sad", "unpublishable", "artful", "rough",];
var quests = ["quest", "journey", "trek", "escapade", "road trip", "mission", "suicide mission"];
var verbs_present = ["kill", "brexit", "kiss", "arraign", "march", "serve", "hit", "shake", "walk", "escort", "fight", "sort out", "ruin", "destroy", "repair", "give birth to", "celebrate", "commemorate", "remember", "forget", "drive", "smoke", "regret", "seduce", "frighten", "cuddle", "follow", "marry", "murder", "write a novel", "annex", "backpack"];
var verbs_present_er = ["kill", "brexit", "kiss", "arraign", "march", "serv", "hitt", "shak", "walk", "escort", "fight", "ruin", "destroy", "repair", "birth", "stalk", "hold", "remember", "forgett", "driv", "smok", "regrett", "seduc", "frighten", "cuddl", "follow", "murder"];
var verbs_present_ing = ["killing", "kissing", "arraigning", "serving", "hitting", "shaking", "walking", "fighting", "planning", "destroying", "birthing", "partying", "drinking", "remembering", "forgetting", "journeying", "seducing", "painting", "gardening", "baking"];
var verbs_present_ing_with = ["invading France", "programming Twitter bots", "making games", "attending seminars", "posting online", "anger blogging", "getting back at the ex", "voting in referendums", "tanking economies", "making websites", "writing novels", "backpacking across Europe", "foundation repair"];
var times = ["nanosecond", "second", "minute", "hour", "day", "days", "week", "fortnight", "year", "years", "decade", "lifetime", "bender", "spree", "rampage", "lunchtime", "breakfast"];
var nationalities = ["Irish", "Romanian", "German", "French", "Scottish", "English", "British", "Welsh", "Polish", "Russian", "Hungarian", "Canadian", "North American", "Australian", "Alien", "Foreign"];
var groups = ["army", "football team", "navy", "publishing industry", "parks department", "bake-off", "government", "underground crab army", "WhatsApp group", "far-right", "far-left", "special forces", "film industry", "high street bakery"];
var celebs = ["Margaret Thatcher", "Nigel Farage", "Dwayne 'The Rock' Johnson", "Mara Wilson", "Neil Gaiman", "Daedalus Mole", "Taika Waititi", "Robert Downey Junior", "Jonathan Franzen", "Arin Hanson", "Richard Spencer", "Jeremy Corbyn", "Gordon Brown", "Alan Sugar", "Donald Trump", "Barack Obama", "George W. Bush"];
var forenames = ["Barry", "Keith", "Susan", "Patricia", "Nigel", "Poppy", "Ellen", "Eleanor", "Samia", "Brad", "Joe", "Riz", "Gunther", "Hans"];
var surnames = ["Ahmed", "Trotter", "Harding", "Cornwell", "Smith", "Shaw", "Blount", "Shah", "Rosen", "Choudhury", "Tang", "Glau", "Blitz"];
var problems = ["Conundrum", "Case", "Affair", "Problem", "Decision", "Ultimatum", "Incident", "Discovery", "Disaster", "Campaign", "Death"];




//Generate a book

var titleElement = document.getElementById('bookTitle');
var authorElement = document.getElementById('author');
var bookTitle = generateTitle();
var authorName = getRandomName();

var el_cover = document.getElementById('cover');

function getTitle() {
	
	let result = '';
	
	result += 'The Girl with All the Guns';
	
	return result;
}

function drawCover() {
	
	var sig = Math.floor(Math.random()*5);
	
	//200x323
	
	var img = document.createElement('img');
	img.src = "./img/" + sig + ".jpg";
	img.src = "https://source.unsplash.com/random/200x323";
	
	el_cover.appendChild(img);
	
	var coverTitle = document.createElement('h1');
	el_cover.appendChild(coverTitle);
	var coverName = document.createElement('h2');
	el_cover.appendChild(coverName);
	
	coverTitle.textContent = bookTitle;
	coverName.textContent = authorName;
	
	setRandomFont(coverTitle);
	applyRandomFormatting(coverTitle);
	
}

function generateTitle()
{
    var result = "";
    
    //Select a format first
    
    /*
    The Girl with the NOUN in her NOUN
    The Girl with the ADJECTIVE NOUN
    QUEST for the NOUN of FANTASYPLACE
    To VERB a NOUN: My TIMEPERIOD in the NATIONAL GROUP
    */
    
    var numberOfFormats = 29;
    var formatSelect = Math.floor(Math.random() * (numberOfFormats));
    
    
    switch(formatSelect) {
    case 0:
        result = "How to " + GetWord(verbs_present) + " a " + GetWord(nouns) + " without Really Trying";
        break;
    case 1:
        result = "The " + GetWord(nouns) + " with all the " + GetWord(nouns_plural);
        break;
    case 2:
		result = "The Second Death of Daedalus Mole";
        break;
    case 3:
        result = "To " + GetWord(verbs_present) + " a " + GetWord(nouns);
        break;
    case 4:
        result = GetWord(quests) + " for the " + GetWord(adjectives) + " " + GetWord(nouns);
        break;
    case 5:
        result = "The " + GetWord(nouns) + " with the " + GetWord(adjectives) + " Tattoo";
        break;
    case 6:
        result = "The " + GetWord(nouns) + " from the Land of " + GetWord(nouns_proper);
        break;
    case 7:
        result = "City of " + GetWord(nouns_plural) + " and " + GetWord(nouns_plural);
        break;
    case 8:
        result = GetWord(verbs_present_ing) + " with " + GetWord(nouns_plural) + ": the " + GetWord(celebs) + " Story";
        break;
    case 9:
        result = "To " + GetWord(verbs_present) + " a " + GetWord(nouns) + ": the Memoir of " + GetWord(celebs)
        break;
    case 10:
        result = GetWord(nouns_plural) + " for " + GetWord(nouns_plural);
        break;
    case 11:
        result = "The " + GetWord(nouns) + " " + GetWord(verbs_present_er) + "er";
        break;
    case 12:
        result = "The " + GetWord(nouns) + " Thief";
        break;
    case 13:
        result = "The " + GetWord(nouns) + " " + GetWord(verbs_present_er) + "er";
        break;
    case 14:
        result = GetWord(forenames) + " " + GetWord(surnames) + " and the " + GetWord(nouns) + "'s " + GetWord(nouns);
        break;
    case 15:
        result = "The " + GetWord(adjectives) + " " + GetWord(nouns_proper) + " of " + GetWord(forenames) + " " + GetWord(surnames);
        break;
    case 16:
        result = "The Secret " + GetWord(nouns_proper) + " of " + GetWord(nouns_plural);
        break;
    case 17:
        result = "The " + GetWord(adjectives) + " " + GetWord(nouns) + " of " + GetWord(nouns_proper);
        break;
    case 18:
        result = "I was a Teenage " + GetWord(nouns);
        break;
    case 19:
        result = "The " + GetWord(adjectives) + " Incident of the " + GetWord(nouns) + " in the Night-Time";
        break;
    case 20:
        result = GetWord(nouns_proper) + " " + GetWord(quests);
        break;
    case 21:
        result = "The Big Book of " + GetWord(nouns_plural);
        break;
    case 22:
        result = "The " + GetWord(nouns) + " " + GetWord(problems);
        break;
    case 23:
        result = "The " + GetWord(nationalities) + " " + GetWord(nouns_proper) + " " + GetWord(problems);
        break;
    case 24:
        result = "The " + GetWord(nationalities) + " " + GetWord(celebs) + " " + GetWord(problems);
        break;
    case 25:
        result = GetWord(verbs_present_ing_with) + " with " + GetWord(celebs);
        break;
    case 26:
        result = "How to " + GetWord(verbs_present);
        break;
    case 27:
        result = GetWord(forenames) + " and the " + GetWord(nationalities) + " " + GetWord(nouns);
        break;
    case 28:
        result = "A " + GetWord(adjectives) + " Guide to " + GetWord(nouns_proper);
        break;
    case 29:
        result = "29 Recipes for " + GetWord(nouns_proper);
        break;
    default:
        result = "The Second Death of Daedalus Mole";
        break;
    }
    
	result = grammarCheck(result);
	
    return result;
}

function GetWord(wordType)
{
    var result = "";
    
    result = wordType[Math.floor(Math.random() * (1 + wordType.length - 1))];
    result = toTitleCase(result);
    
    return result;
}

function toTitleCase(str)
{
	var result = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	
	
	return result;
}

function grammarCheck(str) {
	
	var result = str.replace('A A', 'An A');
	
	return result;
}

function setRandomFont(element) {
	
	var fonts = ['Montserrat', 'Oswald', 'Dosis', 'Josefin Sans', 'Bree Serif', 'Amatic SC'];
	
	var selector = Math.floor(Math.random() * fonts.length);
	
	element.style.fontFamily = fonts[selector];
}

function applyRandomFormatting(element) {
	
	if (Math.random() > 0.5) {
		if (Math.random() > 0.5) {
			element.className += 'tiltLeft';
		} else {
			element.className += 'tiltRight';
		}
	}
	
}

function getRandomName() {
	return GetWord(forenames) + " " + GetWord(surnames);
}

titleElement.textContent = bookTitle;
authorElement.textContent = authorName;
drawCover();
import ArrayHelper from '../Utils/ArrayHelper'

const quoteMessages = [
	"\"Money isn't real, George.\" - Fred Jung",
	"\"Greed, for the lack of a better word, is good.\"\n- Gordon Gekko",
	"\"Show me the money!\" - Jerry Maguire",
	"\"Money is better than poverty,\nif only for financial reasons...\" - Woody Allen",
	"\"Money won't create success,\nthe freedom to make it will\"\n - Nelson Mandella",
	"\"Do what you love and the money will follow.\"\n - Marsha Sinetar",
	"\"You can be young without money,\nbut you can't be old without it.\"\n - Voltaire",
	"\"Money speaks sense in a language\nall nations understand\" - Aphra Behn",
	"\"Money often costs too much\" - Ralph Waldo Emerson",
	"\"I'd like to live as a poor man with lots of money.\"\n - Pablo Picasso"
]

const randomMessages = [
	"Ballin' on a budget",
	"Does anyone even read these?",
	"What would you do with a million dollars?",
	"That's nacho cheese!",
	"Spend less than you earn.",
	"Simplicity is awesome.",
	"If it sounds too good to be true,\nit probably is...",
	"The best things in life are free.",
	"A penny saved is a penny earned.",
	"Money doesn't grow on trees...\nor does it?",
	"Money grows on the tree of persistence.",
	"You have to spend money to make money",
]

const tipMessages = [
	"Categorize expenses to see where\nyour money is going",
	"One time expenses?\nPut them in a category for easy deletion later",
	"Maybe use your pay check as a starting balance?",
  "Categories make it easy to delete expenses later.",
  "Configure your budget YOUR way.",
  "Get creative with your category names!",
  "Swipe right for instant expense adding!",
	"Swipe right to add an expense on the go"
]

const negativeMessages = [
	"You are literally broke.",
	"You've got to stop partying.",
	"Where the hell did your money go?!",
	"You're on hiatus. No more spending.",
	"Where da cash at?",
	"\"The lack of money is the root of all evil\"\n- Mark Twain",
	"\"Never spend your money before you have it\"\n - Thomas Jefferson"
]

const lowMessages = [
	"Alright, time to slow down on the partying.",
	"Your getting low on fun coupons.",
]

const stableMessages = [
	"Not bad, not bad.",
	"You're doing alright, keep it up.",
]

const highMessages = [
	"You've got money honey. Treat yo' self!",
	"Buy yourself a beer or two, you can afford it.",
	"Look at all that doh!",
	"You should buy me a beer...",
  "Party like it's 1999!",
  "You're rolling in the doh!",
  "Do you even need to budget?",
	"There are people who have money\nand people who are rich.\nWhich one are you?",
	"Mo' money, mo' problems"
]

export const NewUserMessages = [
  "It takes money to make money.\nEnter a starting balance.",
  "A starting balance helps keep track\nof how much you have spent.",
  "Enter a starting balance\nto get more out of your budget."
]

const RandomMessages = quoteMessages.concat(randomMessages).concat(tipMessages)

export const NegativeMessages = negativeMessages.concat(RandomMessages);
export const LowMessages = lowMessages.concat(NegativeMessages)
export const StableMessages = stableMessages.concat(RandomMessages);
export const MediumMessages = StableMessages.concat(lowMessages);
export const HighMessages = highMessages.concat(StableMessages)

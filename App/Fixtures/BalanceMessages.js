import ArrayHelper from '../Utils/ArrayHelper'

const quoteMessages = [
	"\"Cocaine is God's way of saying\nyou're making too much money.\" - Robin Williams",
	"\"Money isn't real, George.\" - Fred Jung",
	"\"Greed, for the lack of a better word, is good.\"\n- Gordon Gekko",
	"\"Show me the money!\" - Jerry Maguire",
	"\"Money is better than poverty,\nif only for financial reasons...\" - Woody Allen"
]

const randomMessages = [
	"Ballin' on a budget",
	"Does anyone even read these?",
	"What would you do with a million dollars?",
	"That's nacho cheese!",
	"Spend less than you earn.",
	"Simplicity is awesome."
]

const tipMessages = [
	"Categorize expenses to see where\nyour money is going",
	"One time expenses?\nPut them in a category for easy deletion later",
	"Maybe use your pay check as a starting balance?",
  "Categories make it easy to delete expenses later.",
  "Configure your budget YOUR way.",
  "Get creative with your category names!",
  "Swipe right for instant expense adding!",
]

const negativeMessages = [
	"You are literally broke.",
	"You've got to stop partying.",
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
  "Do you even need to budget?"
]

export const NewUserMessages = [
  "It takes money to make money.\nEnter a starting balance.",
  "A starting balance helps keep track\nof how much you have spent.",
  "Enter a starting balance to get more out of your budget."
]

const RandomMessages = quoteMessages.concat(randomMessages).concat(tipMessages)

export const NegativeMessages = negativeMessages.concat(RandomMessages);
export const LowMessages = lowMessages.concat(NegativeMessages)
export const StableMessages = stableMessages.concat(RandomMessages);
export const MediumMessages = ArrayHelper.mergeUnique(LowMessages, StableMessages)
export const HighMessages = highMessages.concat(RandomMessages)

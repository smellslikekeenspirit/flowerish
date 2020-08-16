export const Tasks_Sustainability = [{
  taskTitle: "Go Reusable: Water Bottle",
  taskDescription: "Today is a great day to use a reusable metal or plastic water bottle. \
      If you don't have one, try reusing a disposable bottle today or \
      check this list of eco-friendly water bottles.",
  url: "https://blog.givingassistant.org/best-eco-friendly-water-bottles/",
  imageSrc: "asustainability.png",
  imageTitle: "recycling symbol",
},
{
  taskTitle: "Go Reusable: Metal Straw",
  taskDescription: "Today is a great day to use a reusable metal/silicone straw. " +
      "If you don't have one, try not using a disposable straw today, or going for " +
      "a paper options! You can also check out this link describing straw options.",
  url: "https://www.ecowatch.com/eco-friendly-drinking-straw-alternatives-2571689759.html",
  imageSrc: "assets/sustainability.png",
  imageTitle: "recycling symbol"

},
{
  taskTitle: "Go Recyclable: Terracycle",
  taskDescription: "Today is a great day to try out TerraCycle. You can look for " +
      "a drop-off box near you where you can put hard-to-recycle items that they will repurpose." +
      "Some easy items are shiny granola bar wrappers and the bags from inside cereal boxes.",
  url: "https://www.terracycle.com/en-US/about-terracycle/drop_off_locations",
  imageSrc: "assets/sustainability.png",
  imageTitle: "recycling symbol"
},
{
  taskTitle: "Go Recyclable: Upcycle or Donate Old Clothing",
  taskDescription: "If you have old clothes that don't fit but are in good condition, consider " +
      "donating them to a service like Goodwill or selling/donating them to a thrift " +
      "store so someone else can find a cool piece! If the condition is bad, try " +
      "repurposing it- maybe make a crop top or t-shirt blanket! Check out the link for more ideas.",
  url: "https://www.thegoodtrade.com/features/how-to-recycle-and-repurpose-clothing",
  imageSrc: "assets/sustainability.png",
  imageTitle: "recycling symbol"
},
{
  taskTitle: "Go Rewearable: Wear a cloth mask",
  taskDescription: "Today is a great day to use a reusable cloth mask." +
      "If you don't have one, you can make your own based on this simple pattern in the link! " +
      "You can wash and rewear cloth masks instead of disposing of them.",
  url: "https://readingmytealeaves.com/2020/03/make-your-own-face-mask-coronavirus.html",
  imageSrc: "assets/sustainability.png",
  imageTitle: "recycling symbol"

}
];

export const Tasks_Education = [{
  taskTitle: "Learn: What's Greenwashing?",
  taskDescription: "Just what is greenwashing? How does it relate to corporations who \
      have an outsized impact on the environment? Find out from this article.",
  url: "https://www.businessnewsdaily.com/10946-greenwashing.html",
  imageSrc: "assets/education.png",
  imageTitle: "lightbulb",
}, 
{
  taskTitle: "Learn: NAACP and Climate Justice",
  taskDescription: "How does climate change and environmental justice impact the \
      Black community? What has the NAACP been up to regarding environmental justice?",
  url: "https://www.naacp.org/issues/environmental-justice/",
  imageSrc: "assets/education.png",
  imageTitle: "lightbulb",
}, 
{
  taskTitle: "Learn: What are Businesses that Could Do Better?",
  taskDescription: "Outside of huge scandals, the headlines don't often discuss companies who do well or poorly \
      in terms of sustainability and being environmentally friendly. Find out who's doing what!",
  url: "https://www.treehugger.com/corporate-responsibility-4846047",
  imageSrc: "assets/education.png",
  imageTitle: "lightbulb",
}, 
{
  taskTitle: "Learn: Uyghur Forced Labor and Clothing Companies",
  taskDescription: "The Uyghurs have been an oppressed minority group in China. Learn how clothing \
      companies have been taking advantage.",
  url: "https://uhrp.org/press-release/press-release-180-orgs-demand-apparel-brands-end-complicity-uyghur-forced-labour.html",
  imageSrc: "assets/education.png",
  imageTitle: "lightbulb",
}, 
{
  taskTitle: "Learn: Whiteness and The Green Movement",
  taskDescription: "Many environmental activists are white or have created a white-centric environment. \
      Learn about POC and minority activists and their progress as well as \
      the response of others from minority groups.",
  url: "https://www.theguardian.com/sustainable-business/2014/oct/09/sp-minorities-race-white-poverty-environment-social-justice",
  imageSrc: "assets/education.png",
  imageTitle: "lightbulb",
}, 
{
  taskTitle: "Learn: What is White Environmentalism?",
  taskDescription: "What is white environmentalism? Learn about it in this podcast.",
  url: "https://www.upstreamsolutions.org/podcasts/from-white-environmentalism-to-anti-racism",
  imageSrc: "assets/education.png",
  imageTitle: "lightbulb",
}
];
export const Tasks_Action = [
{
  taskTitle: "Take Action: Learn About Sustainability",
  taskDescription: "If you're willing to spend a little (slightly more than $1), you can subscribe to this" +
  " weekly sustainability newsletter.",
  url: "https://manage.campaignzee.com/4knBvS4LGf",
  imageSrc: "assets/take_action.png",
  imageTitle: "three hands raised" 
},
{
  taskTitle: "Take Action: Send Letters to the Government",
  taskDescription:"Use this website to send your local or national representatives emails and letters about climate justice " +
  "and environmental topics you are passionate about",
  url:"https://environmental-action.webaction.org/p/dia/action4/common/public/index",
  imageSrc:"assets/take_action.png",
  imageTitle:"three hands raised"
},
{
  taskTitle:"Take Action: Petitions/Donations for Uyghur Muslims",
  taskDescription:"Uyghur Muslims have been facing many horrible conditions and instances of " +
  " discrimination. Additionally they have been used as forced labor in making unsustainable " +
  "fast fashion. Follow the link to educate yourself and sign petitions.",
  url: "https://uyghurs.carrd.co/",
  imageSrc: "assets/take_action.png",
  imageTitle: "three hands raised"
}, 
{
  taskTitle: "Take Action: Sign a No-Shopping Pledge",
  taskDescription: "Every little bit counts: try some time away from supporting the fast fashion industry.",
  url: "https://manage.campaignzee.com/4knBvS4LGf",
  imageSrc: "assets/take_action.png",
  imageTitle: "three hands raised"
},
{
  taskTitle: "Take Action: Donate/Volunteer If You Can",
  taskDescription: "If you are able, consider donating to or volunteering for " +
  "Communities for a Better Environment.",
  url:  "https://manage.campaignzee.com/4knBvS4LGf",
  imageSrc: "assets/take_action.png",
  imageTitle: "three hands raised"
}
];



// choose a task

export const returnTask = (tasks_category) => {
    var task = tasks_category[Math.floor(Math.random() * tasks_category.length)];
    return task
}
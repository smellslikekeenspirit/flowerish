export const Tasks_Sustainability = [];
export const Tasks_Education = [];
export const Tasks_Action = [];

// Creating task objects constructor

function TaskItem(taskTitle, taskDescription, url, imageSrc, imageTitle){
    this.taskTitle = taskTitle;
    this.taskDescription = taskDescription;
    this.url = url;
    this.imageSrc = imageSrc;
    this.imageTitle = imageTitle;

}

//creating task objects and assigning them to SUSTAINABILITY

Tasks_Sustainability.push(TaskItem(
    "Go Reusable: Water Bottle",
    "Today is a great day to use a reusable metal or plastic water bottle. "+
    "If you don't have one, try reusing a disposable bottle today or " + 
    "check this list of eco-friendly water bottles.",
    "https://blog.givingassistant.org/best-eco-friendly-water-bottles/",
    "assets/sustainability.png",
    "recyclingsymbol"
));

Tasks_Sustainability.push(TaskItem(
    "Go Reusable: Metal Straw",
    "Today is a great day to use a reusable metal/silicone straw. "+
    "If you don't have one, try not using a disposable straw today, or going for " + 
    "a paper options! You can also check out this link describing straw options.",
    "https://www.ecowatch.com/eco-friendly-drinking-straw-alternatives-2571689759.html",
    "assets/sustainability.png",
    "recyclingsymbol"
));

Tasks_Sustainability.push(TaskItem(
    "Go Recyclable: Terracycle",
    "Today is a great day to try out TerraCycle. You can look for "+
    "a drop-off box near you where you can put hard-to-recycle items that they will repurpose." + 
    "Some easy items are shiny granola bar wrappers and the bags from inside cereal boxes.",
    "https://www.terracycle.com/en-US/about-terracycle/drop_off_locations",
    "assets/sustainability.png",
    "recyclingsymbol"
    
));

Tasks_Sustainability.push(TaskItem(
    "Go Recyclable: Upcycle or Donate Old Clothing",
    "If you have old clothes that don't fit but are in good condition, consider "+
    "donating them to a service like Goodwill or selling/donating them to a thrift " + 
    "store so someone else can find a cool piece! If the condition is bad, try "+
    "repurposing it- maybe make a crop top or t-shirt blanket! Check out the link for more ideas.",
    "https://www.thegoodtrade.com/features/how-to-recycle-and-repurpose-clothing",
    "assets/sustainability.png",
    "recyclingsymbol"
    
));


Tasks_Sustainability.push(TaskItem(
    "Go Rewearable: Wear a cloth mask",
    "Today is a great day to use a reusable cloth mask."+
    "If you don't have one, you can make your own based on this simple pattern in the link! " + 
    "You can wash and rewear cloth masks instead of disposing of them.",
    "https://readingmytealeaves.com/2020/03/make-your-own-face-mask-coronavirus.html",
    "assets/sustainability.png",
    "recyclingsymbol"
    
));


// for education tasks
Tasks_Education.push(TaskItem(
    "Learn: What's Greenwashing?",
    "Just what is greenwashing? How does it relate to corporations who "+
    "have an outsized impact on the environment? Find out from this article.",
    "https://www.businessnewsdaily.com/10946-greenwashing.html",
    "assets/education.png",
    "lightbulb"

));

Tasks_Education.push(TaskItem(
    "Learn: NAACP and Climate Justice",
    "How does climate change and environmental justice impact the "+
    "Black community? What has the NAACP been up to regarding environmental justice?",
    "https://www.naacp.org/issues/environmental-justice/",
    "assets/education.png",
    "lightbulb"

));

Tasks_Education.push(TaskItem(
    "Learn: NAACP and Climate Justice",
    "How does climate change and environmental justice impact the "+
    "Black community? What has the NAACP been up to regarding environmental justice?",
    "https://www.naacp.org/issues/environmental-justice/",
    "assets/education.png",
    "lightbulb"

));

Tasks_Education.push(TaskItem(
    "Learn: What are Businesses that Could Do Better?",
    "Outside of huge scandals, the headlines don't often discuss companies who do well or poorly "+
    "in terms of sustainability and being environmentally friendly. Find out who's doing what!",
    "https://www.treehugger.com/corporate-responsibility-4846047",
    "assets/education.png",
    "lightbulb"

));

Tasks_Education.push(TaskItem(
    "Learn: Uyghur Forced Labor and Clothing Companies",
    "The Uyghurs have been an oppressed minority group in China. Learn how clothing "+
    " companies have been taking advantage.",
    "https://uhrp.org/press-release/press-release-180-orgs-demand-apparel-brands-end-complicity-uyghur-forced-labour.html",
    "assets/education.png",
    "lightbulb"

));
Tasks_Education.push(TaskItem(
    "Learn: Whiteness and The Green Movement",
    "Many environmental activists are white or have created a white-centric environment."+
    " Learn about POC and minority activists and their progress as well as "+
    " the response of others from minority groups.",
    "https://www.theguardian.com/sustainable-business/2014/oct/09/sp-minorities-race-white-poverty-environment-social-justice",
    "assets/education.png",
    "lightbulb"

));
Tasks_Education.push(TaskItem(
    "Learn: What is White Environmentalism?",
    "What is white environmentalism? Learn about it in this podcast.",
    "https://www.upstreamsolutions.org/podcasts/from-white-environmentalism-to-anti-racism",
    "assets/education.png",
    "lightbulb"

));



// for activism/etc tasks

Tasks_Action.push(TaskItem(
    "Take Action: Learn About Sustainability",
    "If you're willing to spend a little (slightly more than $1), you can subscribe to this"+
    " weekly sustainability newsletter.",
    "https://manage.campaignzee.com/4knBvS4LGf",
    "assets/take_action.png",
    "three hands raised"

));

Tasks_Action.push(TaskItem(
    "Take Action: Send Letters to the Government",
    "Use this website to send your local or national representatives emails and letters about climate justice "+
    "and environmental topics you are passionate about",
    "https://environmental-action.webaction.org/p/dia/action4/common/public/index",
    "assets/take_action.png",
    "three hands raised"

));

Tasks_Action.push(TaskItem(
    "Take Action: Petitions/Donations for Uyghur Muslims",
    "Uyghur Muslims have been facing many horrible conditions and instances of "+
    " discrimination. Additionally they have been used as forced labor in making unsustainable "+
    "fast fashion. Follow the link to educate yourself and sign petitions.",
    "https://uyghurs.carrd.co/",
    "assets/take_action.png",
    "three hands raised"

));

Tasks_Action.push(TaskItem(
    "Take Action: Donate/Volunteer If You Can",
    "If you are able, consider donating to or volunteering for "+
    "Communities for a Better Environment.",
    "https://manage.campaignzee.com/4knBvS4LGf",
    "assets/take_action.png",
    "three hands raised"

));

Tasks_Action.push(TaskItem(
    "Take Action: Sign a No-Shopping Pledge",
    "Every little bit counts: try some time away from supporting the fast fashion industry.",
    "https://manage.campaignzee.com/4knBvS4LGf",
    "assets/take_action.png",
    "three hands raised"

));



// choose a task

function returnTask(tasks_category){
    var task = task_category[Math.floor(Math.random() * task_category.length)];
    return task

}

let Tasks_Sustainability = [];
let Tasks_Education = [];
let Tasks_Petitions = [];

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
Tasks_Sustainability.push(TaskItem()
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

// for activism/etc tasks


// choose a task
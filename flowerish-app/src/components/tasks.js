
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
    

));
Tasks_Sustainability.push(
    
);
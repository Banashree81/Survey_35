var peopleCount;
var user;

function setup() {
    canvas = createCanvas(1000, 700);
    database = firebase.database();
    form = new Form()
    form.display()
    
    user = new User();
    user.getCount();
    

}
function draw(){
    console.log(peopleCount)
    if(peopleCount){
        form.display();
    }
}
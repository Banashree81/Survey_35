class Form {

    constructor() {
        this.name = createInput("Name");
        this.email = createInput("email")
        this.button = createButton('Submit');
        this.greeting = createElement('h2');
        this.text = createElement('h1', "Lets Do A Survey On Our School Students");
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('Yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('Yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('100');
        this.radio2.option('500');
        this.radio2.option('1000');
        this.radio2.option('More');
        this.radio2.option('Not Applicable');
        
    }


    display() {
        
        this.name.position(670, 255)
        this.email.position(670, 165)
        this.button.position(700, 650)
        this.greeting.position(600, 105)
        this.text.position(500, 5)
        this.question1.position(400, 360)
        this.radio.position(450, 420)
        this.question2.position(400, 450)
        this.radio1.position(450, 510)
        this.question3.position(400, 540)
        this.radio2.position(450, 600)

        this.button.mousePressed(() => {
            console.log("Hi")
            user.name = this.name.value();
            user.email = this.email.value();
            peopleCount += 1;
            user.index = peopleCount;
            user.votersAnswer = [this.radio.value(),this.radio1.value(),this.radio2.value(),]
            user.update();
            user.updateCount(peopleCount);
        });

    }
}
class User {
    constructor() {
        this.index = null;
        this.email = null
        this.name = null;
        this.votersAnswer = [];
    }

    getCount(){
        database.ref('peopleCount').on("value", function(data){
            peopleCount = data.val()
        })
    }

    updateCount(count) {
        database.ref('/').update({
            peopleCount: count
        });
    }

    update() {
        var playerIndex = "voter" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            email: this.email,
            votersAnswer: this.votersAnswer,
        });
    }
}
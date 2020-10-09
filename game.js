class Game{
    constructor(){

    }
    getstate(){
        var gamestateinfo = database.ref("gamestate");
        gamestateinfo.on("value",(data)=>{
            gamestate = data.val();
        })
    }
    updatestate(state){
        database.ref("/").update({
            gamestate:state
        })
    }
}
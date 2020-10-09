class Player{
    constructor(){
        this.index = null;
        this.name = null;
    }
    getcount(){
        var pcountref = datadbase.ref("playercount");
        pcountref.on("value",(data)=>{
            playercount = data.val(); 
        });

    }
    updatecount(count){
        database.ref("/").update({
            playercount : count
        })
    }
    static getplayer(){
        var playerref = database.ref("players");
        playerref.on("value",(data)=>{
            allplayer = data.val();
        })
    }
    updateplayer(){
        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({
            name:this.name
        })
    }
}
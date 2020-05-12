class Leaderboards extends Widget
{
    constructor()
    {
        super(250,250,100,50);
        this.array=[
            ["none",0],
            ["none",0],
            ["none",0]
        ];
    }
    updatearray()
    {
        this.array.push([app.nick , app.playerstats.totalScore]);
        this.array.sort(function(a,b){return b[1]-a[1]});
        this.array.pop();
    }

    storage2array()
    {
        this.array[0][0]=localStorage.getItem("1n");
        this.array[1][0]=localStorage.getItem("2n");
        this.array[2][0]=localStorage.getItem("3n");
        this.array[0][1]=localStorage.getItem("1s");
        this.array[1][1]=localStorage.getItem("2s");
        this.array[2][1]=localStorage.getItem("3s");

        for(let i=0;i<3;i++)
            if(this.array[i][0]==null) this.array[i][0]="none";

        for(let i=0;i<3;i++)
            if(this.array[i][1]==null) this.array[i][1]="0";
    }

    array2storage()
    {
        localStorage.setItem("1n",this.array[0][0]);
        localStorage.setItem("2n",this.array[1][0]);
        localStorage.setItem("3n",this.array[2][0]);
        localStorage.setItem("1s",this.array[0][1]);
        localStorage.setItem("2s",this.array[1][1]);
        localStorage.setItem("3s",this.array[2][1]);
    }

    ondraw(ctx)
    {
        ctx.font="25px Arial";
        ctx.fillStyle="#3f2a14"
        ctx.textAlign="center";
        ctx.save();
        ctx.fillText(this.array[0][0], this.width / 2 , this.height / 2);
        ctx.translate(0,50);
        ctx.fillText(this.array[1][0], this.width / 2 , this.height / 2);
        ctx.translate(0,50);
        ctx.fillText(this.array[2][0], this.width / 2 , this.height / 2);
        ctx.restore();
        ctx.save();
        ctx.translate(200,0);
        ctx.fillText(this.array[0][1], this.width / 2 , this.height / 2);
        ctx.translate(0,50);
        ctx.fillText(this.array[1][1], this.width / 2 , this.height / 2);
        ctx.translate(0,50);
        ctx.fillText(this.array[2][1], this.width / 2 , this.height / 2);

        ctx.restore();
    }
}


function makeLeaderboards()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Leaderboards",0,0,800,300,55,"#3f2a14","center");
    let text=[];
    text[0]=new MyText("Name",250,200,100,50,35,"#3f2a14","center");
    text[1]=new MyText("Score",450,200,100,50,35,"#3f2a14","center");
    text[2]=new MyText("1.",100,250,100,50,25,"#3f2a14","center");
    text[3]=new MyText("2.",100,300,100,50,25,"#3f2a14","center");
    text[4]=new MyText("3.",100,350,100,50,25,"#3f2a14","center");
    /*text[5]=new MyText("none",250,250,100,50,25,"#3f2a14","center");
    text[6]=new MyText("0",450,250,100,50,25,"#3f2a14","center");
    text[7]=new MyText("none",250,300,100,50,25,"#3f2a14","center");
    text[8]=new MyText("0",450,300,100,50,25,"#3f2a14","center");
    text[9]=new MyText("none",250,350,100,50,25,"#3f2a14","center");
    text[10]=new MyText("0",450,350,100,50,25,"#3f2a14","center");*/

    let backButton=new Button("",10,10,48,48,"../graphics/UI/back.png");
    backButton.action=function () 
    {
        app.sceneChange(sceneFirstMenu);
        app.quit();
    }

    sceneLeaderb.add(background);
    sceneLeaderb.add(menu);
    sceneLeaderb.add(header);
    sceneLeaderb.add(backButton);
    for(i in text)
        sceneLeaderb.add(text[i]);

    sceneLeaderb.add(leaderboards);
}
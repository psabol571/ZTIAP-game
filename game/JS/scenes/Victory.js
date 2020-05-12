function makeVictory()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Congratulations! You won!",0,0,800,300,54,"#3f2a14","center");
    let playButton=new Button("Leaderboards",300,400,200,100,"../graphics/UI/field.png");
    let text=[];
    let heart=new MyImage(387,276,"../graphics/Hero/Sprite_heart.png");
    text[0]=new MyText("Score for stages: ",350,200,100,50,35,"#3f2a14","center");
    text[1]=new MyText("You have ",350,280,100,50,35,"#3f2a14","center");
    text[2]=new MyText("Total score: ",350,360,100,50,35,"#3f2a14","center");

    text[0].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + (app.playerstats.totalScore - app.playerstats.heartcount * app.playerstats.heartval),
                        this.width / 2, this.height / 2);
    }

    text[1].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + app.playerstats.heartcount+"      left: +" +(app.playerstats.heartcount * 
          app.playerstats.heartval), this.width / 2, this.height / 2);
    }

    text[2].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + app.playerstats.totalScore, 
        this.width / 2, this.height / 2);
    }

    playButton.action=function()
    {
      leaderboards.updatearray();
      leaderboards.array2storage();
      
      if(app.music[4].playing)
      {
        app.music[4].stop();
        app.music[0].play();
      }
      app.sceneChange(sceneLeaderb);
    }

    sceneVictory.add(background);
    sceneVictory.add(menu);
    sceneVictory.add(header);
    sceneVictory.add(playButton);
    sceneVictory.add(heart);
    for(i in text)
      sceneVictory.add(text[i]);
}
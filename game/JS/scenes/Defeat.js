function makeDefeat()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("You have failed",0,0,800,300,54,"#3f2a14","center");
    let header2=new MyText("defending your tower.",0,60,800,300,54,"#3f2a14","center");
    let playButton=new Button("Leaderboards",300,400,200,100,"../graphics/UI/field.png");
    let text=new MyText("Total score: ",350,310,100,50,35,"#3f2a14","center");

    text.ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + app.playerstats.totalScore, this.width / 2, this.height / 2);
    }

    playButton.action=function()
    {
      leaderboards.updatearray();
      leaderboards.array2storage();
      app.sceneChange(sceneLeaderb);
      if(app.music[2].playing)
      {
        app.music[2].stop();
        app.music[0].play();
      }
    }

    sceneDefeat.add(background);
    sceneDefeat.add(menu);
    sceneDefeat.add(header);
    sceneDefeat.add(header2);
    sceneDefeat.add(playButton);
    sceneDefeat.add(text);
}
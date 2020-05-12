function makeFailed()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Stage failed",0,0,800,300,55,"#3f2a14","center");
    let text=[];
    text[0]=new MyText("Score for kills: ",350,200,100,50,35,"#3f2a14","center");
    text[1]=new MyText("Accuracy: ",350,250,100,50,35,"#3f2a14","center");
    text[2]=new MyText("HP left: ",350,300,100,50,35,"#3f2a14","center");
    text[3]=new MyText("Total score: + ",350,380,100,50,35,"#3f2a14","center");
    text[4]=new MyText("You have lost 1 ",350,430,100,50,35,"#3f2a14","center");
    let heart=new MyImage(526,424,"../graphics/Hero/Sprite_heart.png");

    text[0].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + app.playerstats.stageScore, this.width / 2, this.height / 2);
    }
    text[1].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + app.playerstats.accuracy+"%", this.width / 2, this.height / 2);
    }
    text[2].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + Math.floor((app.playerstats.HP/app.playerstats.maxHP*100))+"%", this.width / 2, this.height / 2);
    }
    text[3].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(this.text + Math.floor(app.playerstats.stageScore * app.playerstats.accuracy *
            Math.floor((app.playerstats.HP/app.playerstats.maxHP*100)) /10000) , this.width / 2, this.height / 2);
    }


    let continueButton=new Button("",600,435,48,48,"../graphics/UI/continue.png");
    continueButton.action=function()
    {
        if(app.music[2].playing)
        {
          app.music[2].stop();
          app.music[0].play();
        }

        app.playerstats.heartcount--;
        app.sceneChange(sceneUpgradeMenu);        
    }

    sceneFailed.add(background);
    sceneFailed.add(menu);
    sceneFailed.add(header);
    sceneFailed.add(continueButton);
    for(i in text)
        sceneFailed.add(text[i]);
    sceneFailed.add(heart);
}
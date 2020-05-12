function makeCompleted()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Stage completed",0,0,800,300,55,"#3f2a14","center");
    let text=[];
    text[0]=new MyText("Score for kills: ",350,200,100,50,35,"#3f2a14","center");
    text[1]=new MyText("Accuracy: ",350,250,100,50,35,"#3f2a14","center");
    text[2]=new MyText("HP left: ",350,300,100,50,35,"#3f2a14","center");
    text[3]=new MyText("Total score: + ",350,380,100,50,35,"#3f2a14","center");
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
        
        app.updatescore();

        app.stage++;

        if(app.stage!=app.stageMAX+1)
        {
            if(app.music[3].playing)
            {
                app.music[3].stop();
                app.music[0].play();
            }
            app.sceneChange(sceneUpgradeMenu);
        }
                
        else
        {
            if(app.music[3].playing)
            {
                app.music[3].stop();
                app.music[4].play();
            }
            //add score for hearts left
            app.playerstats.totalScore += app.playerstats.heartcount * app.playerstats.heartval;
            app.sceneChange(sceneVictory);
        }
              
            
        
    }

    sceneCompleted.add(background);
    sceneCompleted.add(menu);
    sceneCompleted.add(header);
    sceneCompleted.add(continueButton);
    for(i in text)
        sceneCompleted.add(text[i]);
}
function makeUpgradeMenu()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Upgrade Menu",0,0,800,300,55,"#3f2a14","center");

    let continueButton=new Button("",600,435,48,48,"../graphics/UI/continue.png");
    continueButton.action=function()
    {
        if(app.music[0].playing)
        {
          app.music[0].stop();
          app.music[1].play();
        }
        app.sounds[3].play();
        
        app.sceneChange(sceneGame); 
        app.startStage();
    }
    let text=[];
    text[0]=new MyText("Damage: ",50,170,240,100,25,"brown","center");
    text[1]=new MyText("Speed: ",50,240,240,100,25,"brown","center");
    text[2]=new MyText("Health: ",50,310,240,100,25,"brown","center");
    text[3]=new MyText("Defense: ",50,380,240,100,25,"brown","center");

    text[4]=new MyText("",170,170,240,100,25,"brown","center");
    text[5]=new MyText("",170,240,240,100,25,"brown","center");
    text[6]=new MyText("",170,310,240,100,25,"brown","center");
    text[7]=new MyText("",170,380,240,100,25,"brown","center");

    let plus=[];
    plus[0]=new Button("",360,190,48,48,"../graphics/UI/plus.png");
    plus[1]=new Button("",360,260,48,48,"../graphics/UI/plus.png");
    plus[2]=new Button("",360,330,48,48,"../graphics/UI/plus.png");
    plus[3]=new Button("",360,400,48,48,"../graphics/UI/plus.png");

    
    text[8]=new MyText("",370,170,240,100,25,"brown","center");
    text[9]=new MyText("",370,240,240,100,25,"brown","center");
    text[10]=new MyText("",370,310,240,100,25,"brown","center");
    text[11]=new MyText("",370,380,240,100,25,"brown","center");

    text[4].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.playerstats.dmg+" (+"+app.upgradeval[0]+")", this.width / 2, this.height / 2);
    }
    text[5].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.playerstats.speed+" (+"+app.upgradeval[1]+")", this.width / 2, this.height / 2);
    }
    text[6].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.playerstats.maxHP+" (+"+app.upgradeval[2]+")", this.width / 2, this.height / 2);
    }
    text[7].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.playerstats.def+" (+"+app.upgradeval[3]+")", this.width / 2, this.height / 2);
    }
    text[8].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.upgrade[0]+")", this.width / 2, this.height / 2);
    }
    text[9].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.upgrade[1]+")", this.width / 2, this.height / 2);
    }
    text[10].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.upgrade[2]+")", this.width / 2, this.height / 2);
    }
    text[11].ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.upgrade[3]+")", this.width / 2, this.height / 2);
    }

    
    plus[0].action = function()
    {
        if(app.playerstats.gold>=app.upgrade[0])
        {
            app.playerstats.gold -= app.upgrade[0];
            app.upgrade[0]=Math.floor(app.upgrade[0]*1.15) + 70;
            app.playerstats.dmg+=app.upgradeval[0];

            if(app.sounds[4].playing) 
                app.sounds[4].stop();
            app.sounds[4].play();
        }
        else
        {
            if(app.sounds[2].playing) 
                app.sounds[2].stop();
            app.sounds[2].play();
        }
    }
    plus[1].action = function()
    {
        if(app.playerstats.gold>=app.upgrade[1])
        {
            app.playerstats.gold -= app.upgrade[1];
            app.upgrade[1]=Math.floor(app.upgrade[1]*1.2) + 70;
            app.playerstats.speed+=app.upgradeval[1];

            if(app.sounds[4].playing) 
                app.sounds[4].stop();
            app.sounds[4].play();
        }
        else
        {
            if(app.sounds[2].playing) 
                app.sounds[2].stop();
            app.sounds[2].play();
        }
    }
    plus[2].action = function()
    {
        if(app.playerstats.gold>=app.upgrade[2])
        {
            app.playerstats.gold -= app.upgrade[2];
            app.upgrade[2]=Math.floor(app.upgrade[2]*1.2) + 70;
            app.playerstats.maxHP+=app.upgradeval[2];

            if(app.sounds[4].playing) 
                app.sounds[4].stop();
            app.sounds[4].play();
        }
        else
        {
            if(app.sounds[2].playing) 
                app.sounds[2].stop();
            app.sounds[2].play();
        }
    }
    plus[3].action = function()
    {
        if(app.playerstats.gold>=app.upgrade[3])
        {
            app.playerstats.gold -= app.upgrade[3];
            app.upgrade[3]=Math.floor(app.upgrade[3]*1.2) + 70;
            app.playerstats.def+=app.upgradeval[3];

            if(app.sounds[4].playing) 
                app.sounds[4].stop();
            app.sounds[4].play();
        }
        else
        {
            if(app.sounds[2].playing) 
                app.sounds[2].stop();
            app.sounds[2].play();
        }
    }
   
    
    let table=new MyImage(540,160,"../graphics/UI/table.png");
    let g=new MyText("",530,200,240,100,25,"brown","center");
    let s=new MyText("",514,160,240,100,25,"brown","center");

    g.ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText(app.playerstats.gold, this.width / 2, this.height / 2);
    }

    s.ondraw = function()
    {
        app.ctx.font=""+this.size+"px Arial";
        app.ctx.fillStyle=this.fillStyle;
        app.ctx.textAlign=this.allign;

        app.ctx.fillText("Score: "+app.playerstats.totalScore, this.width / 2, this.height / 2);
    }

    

    sceneUpgradeMenu.add(background);
    sceneUpgradeMenu.add(menu);
    sceneUpgradeMenu.add(header);
    sceneUpgradeMenu.add(continueButton);
    for(i in text)
        sceneUpgradeMenu.add(text[i]);
    for(i in plus)
    {
        sceneUpgradeMenu.add(plus[i]);
        sceneUpgradeMenu.add(new MyText("(",300,170+i*70,240,100,25,"brown","center"));
        sceneUpgradeMenu.add(new MyImage(424,200+i*70,"../graphics/UI/coin.png"));
    }

    sceneUpgradeMenu.add(table);
    sceneUpgradeMenu.add(g);
    sceneUpgradeMenu.add(s);
    sceneUpgradeMenu.add(new MyImage(590,230,"../graphics/UI/coin.png"));
        
}
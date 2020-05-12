class Background extends MyImage
{
    constructor()
    {
        super(0,0,"../graphics/background/myBack2.png");

    }

    ondraw(ctx)
    {
        ctx.save();
        ctx.drawImage(this.avatar,0,0);

        ctx.beginPath();
        ctx.fillStyle="#3f2a14";
        ctx.fillRect(0,528,800,70);
        ctx.stroke();
        ctx.restore();  
    }
}

///////////////////////////////////////////////........HP-BAR......////////////////////////////////////////////////
class HP_bar extends Widget
{
  constructor()
  {
    super(0,0,0,0);
  }
  ondraw(ctx)
  {
    ctx.save();
    //health
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle="black";
    ctx.rect(10,540,650,25);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(13,543,644* app.playerstats.HP / app.playerstats.maxHP,19);
    ctx.stroke();

    ctx.fillStyle="black";
    ctx.font="18px arial";
    ctx.fillText("Health: "+app.playerstats.HP +"/"+ app.playerstats.maxHP,280,559);
    ctx.restore();
  }
}
/////////////////////////////////////////////////---HEARTS---////////////////////////////////////////
class Hearts extends MyImage
{
    constructor()
    {
        super(670,532,"../graphics/Hero/Sprite_heart.png");
    }
    ondraw(ctx)
    {
        for(let i=0; i<app.playerstats.heartcount; i++)
            ctx.drawImage(this.avatar,35*i,0);
    }
}
//////////////////////////////////////////////---ScoreTABLE----/////////////////////////
class ScoreTable extends MyImage
{
  constructor()
  {
    super(5,5,"../graphics/UI/table.png");

    this.gold=new Image;
    this.gold.src="../graphics/UI/coin.png";
    this.diamond=new Image;
    this.diamond.src="../graphics/UI/diamond.png";
    
  }
  ondraw(ctx)
  {
    ctx.save();
    let score=app.playerstats.stageScore//+app.playerstats.totalScore;

    ctx.drawImage(this.avatar, 0, 0);
    ctx.font="18px Arial";
    ctx.fillStyle="brown";
    ctx.fillText("Score: "+score,25,33);
    ctx.fillText("Accuracy: "+app.playerstats.accuracy+"%",25,58);
    ctx.fillText("Gold: "+app.playerstats.gold,25,83);
    ctx.fillText("Diamonds: "+app.playerstats.diamonds,25,108);
    ctx.drawImage(this.gold,144,62);
    ctx.drawImage(this.diamond,144,90);
    ctx.restore();
  }
}

///////////////////////////////////////////////........Dia-BAR......////////////////////////////////////////////////
class Dia_bar extends Widget
{
  constructor()
  {
    super(0,0,0,0);
    this.dia=new Image;
    this.dia.src="../graphics/UI/diamond.png";
  }
  ondraw(ctx)
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle="black";
    ctx.rect(10,570,780,25);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle="brown";
    let percentage= app.playerstats.diamonds / app.playerstats.diacost;
    if(percentage>1)
    {
      percentage=1;
    } 

    ctx.fillRect(13,573,774* percentage,19);
    ctx.stroke();

    ctx.fillStyle="black";
    ctx.font="18px arial";
    if(percentage<1)
    {
      ctx.fillText("Collect "+app.playerstats.diacost+"        to Heal",300,589);
      ctx.drawImage(this.dia,387,572);
    }
      
    else
      ctx.fillText("Press H to heal",350,589);
    ctx.restore();
  }
}
////////////////////////////////////...........STAGE............///////////////////////////////
class Stage extends MyImage
{
  constructor()
  {
    super(570,80,"../graphics/UI/stage.png");
  }
  ondraw(ctx)
  {
    ctx.save();
    ctx.drawImage(this.avatar,0,0);
    ctx.fillStyle="black";
    ctx.font="18px arial";
    ctx.fillText("Stage: "+app.stage,67,24);
    ctx.restore();
  }
}

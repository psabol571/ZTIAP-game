////////////////////////////////////////////////////////////////.....ENEMY......///////////////////////////////////////////////
class Enemy extends Widget
{
    constructor(y,height)
    {
        let col=[-195,-145,-95];
        
        let x= -95;//col[Math.floor(Math.random()*3)];
        let width=66;

        super(x,y,width,height);

        this.avatar=new Image();

        this.walksources=[
          "",
          "",
        ];
        this.avatar.src=this.walksources[0];

        this.state=1;

        //for movement animations
        this.i=0;
        this.a=0;
        this.die=0;

        //collision odchylka
        this.spaceUp=0;
        
    }
    
    move(dt)
    {
      //state change if reaches attack range (540 is tower position)
      if(this.x + this.range > 540) this.state=2;
      //state change if dead
      if(this.HP<=0) this.state=3;

      switch(this.state)
      {
        case 1: this.onwalk(dt);break;
        case 2: this.onattack();break;
        case 3: this.ondie();break;
      }
    }
    onwalk(dt)
    {
        this.x += this.speed *dt;
        
        this.a++;
        
        if(this.a%12==0)
            this.avatar.src=this.walksources[(this.i++)%2];
    }
    onattack()
    {
        this.a++;
        
        if(this.a%36==0)
        {
          if(app.sounds[5].playing) 
            app.sounds[5].stop();
          app.sounds[5].play();

          this.avatar.src=this.attacksources[(this.i++)%2];
          //damage hero 
          app.playerstats.HP -= this.dmg;
          if(app.playerstats.HP<0) app.playerstats.HP=0;
        }
    }
    ondie()
    {
        this.a++;

        if(app.sounds[6].playing && this.die==0) 
            app.sounds[6].stop();
          app.sounds[6].play();
        
        if(this.a%12==0 && this.die!=2)
            this.avatar.src=this.diesources[(this.die++)];

        if(this.die==2)
        {
          app.playerstats.gold+=this.gold;
          app.playerstats.stageScore+=Math.ceil(this.score * app.difficultyScale);
          app.playerstats.diamonds+=this.diamonds;
          app.remove(this);
          app.enemiesCount--;
        }
    }

    ondraw(ctx)
    {
      ctx.drawImage(this.avatar,0,0);
    }
}
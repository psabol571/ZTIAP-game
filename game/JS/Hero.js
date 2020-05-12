/////////////////////////////////////////////////////////////////.....HERO......///////////////////////////////////////////////
class Hero extends MyImage
{
    constructor()
    {
        let source="../graphics/Hero/idle_1.png";

        super(630,197,source);

        this.sources=[
          "../graphics/Hero/idle_1.png",
          "../graphics/Hero/idle_3.png",
        ];

        this.a=0;
        this.i=0;
    }
    
    move()
    {
        if(app.keys[72])
        {
          if(app.playerstats.HP < app.playerstats.maxHP * 0.75 && app.playerstats.diamonds>=app.playerstats.diacost)
          {
            app.sounds[7].play();
            app.playerstats.diamonds -= app.playerstats.diacost;
            app.playerstats.HP += app.playerstats.maxHP/2;
            if(app.playerstats.HP > app.playerstats.maxHP)
              app.playerstats.HP = app.playerstats.maxHP;
          }
          else
            app.sounds[2].play();
        }

        this.a++;
        
        if(this.a%36==0) 
          this.avatar.src=this.sources[(this.i++)%2];

        if(this.a==10000)this.a=0;
        if(this.i==10000)this.i=0;
    } 
}

//////////////////////////////////////////////////////////........BOW........./////////////////////////////
class Bow extends MyImage
{
  constructor()
  {
    super(650,360,"../graphics/Hero/EB_bow+arr.png"); //590,225
    this.bg=new Image();
    this.bg.src="../graphics/Hero/tehla.png";
    this.lastY=this.y;

    this.attackspeed = 1000;
    this.fireTimer = false;
  }
  move(dt)
  {
    this.lastY=this.y;

    if (app.keys[38]) this.y -= app.playerstats.speed*dt;
    if (app.keys[40]) this.y += app.playerstats.speed*dt;

    //collision check
    if(this.y<335 || this.y>460) this.y=this.lastY;

    //fire
    if (app.keys[32])
    {
      if (this.fireTimer) return;

      this.fireTimer = setInterval(this.fire(this.y), this.attackspeed); 
    } 
    else 
    {
      if (this.fireTimer)
      {
        clearInterval(this.fireTimer)
        this.fireTimer = false;
      }
    }
  }

  fire(y) 
  {
    if(app.sounds[0].playing) 
      app.sounds[0].stop();

    app.sounds[0].play();
    app.add(new Arrow(y));
  }

  ondraw(ctx)
  {
    ctx.save();
    ctx.drawImage(this.bg,-1,-1);
    ctx.drawImage(this.avatar,0,0);
    ctx.restore();
  }
}
///////////////////////////////////////////////////////////////////////////.....ARROW..../////////////////////////////////
class Arrow extends MyImage
{
  constructor(y)
  {
    super(650,y,"../graphics/Hero/EB_arrow.png");

    this.speed = 50;

    //Y for collision
    this.collY=this.y + 16;
  }

  checkCollision() 
  {

    for (let i in app.nodes) 
    {
      let obj = app.nodes[i];
      
      if (obj instanceof Enemy && this.x <= obj.x + obj.width -25 && 
          this.collY>= obj.y + obj.spaceUp && this.collY <= obj.y + obj.height)
        return obj; 
    }
    return false;
  }

  move(dt)
  {
    this.x-=this.speed*dt;

    //arrow collide with enemy
    let enemy=this.checkCollision();
    if(enemy)
    {
      if(app.sounds[1].playing) app.sounds[1].stop();

      app.sounds[1].play();

      enemy.HP -= app.playerstats.dmg;
      app.shotmade++;
      app.shottotal++;
      app.remove(this);
    }
    if(this.x<-50)
    {
      app.shottotal++;
      app.remove(this);
    }
  }
}


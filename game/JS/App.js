
//////////////////////////////////////////////////.......APP............//////////////////////////////////
class App extends Widget 
{
    constructor(canvas_ID) 
    {
      let canvas = window.document.getElementById(canvas_ID);
      let ctx = canvas.getContext("2d");
      super(0, 0, canvas.width, canvas.height);

      this.canvas = canvas;
      this.ctx = ctx;

      
      this.music=[
        new Sound("../music/backgrond_music/menus.mp3"),
        new Sound("../music/backgrond_music/ingame.wav"),
        new Sound("../music/backgrond_music/game-over.flac"),
        new Sound("../music/backgrond_music/success.flac"),
        new Sound("../music/backgrond_music/victory.wav"),
      ];

      this.sounds=[
        new Sound("../music/sound_effects/bow-release.wav"),
        new Sound("../music/sound_effects/arrow-damage.wav"),
        new Sound("../music/sound_effects/denied.wav"),
        new Sound("../music/sound_effects/next-stage.flac"),
        new Sound("../music/sound_effects/upgrade.wav"),


        new Sound("../music/sound_effects/sprites/attacks/slash.wav"),
        new Sound("../music/sound_effects/sprites/death.wav"),

        new Sound("../music/sound_effects/spells/5heal.flac"),
      ];

      //model
      this.time=Date.now();
      this.keys=[];
      
      this.playerstats={
        dmg: 20,
        speed: 3,
        maxHP: 200,
        def: 0,

        heartcount: 3,
        heartval: 3500,
        HP: 200,

        gold: 0,
        diamonds: 0,
        diacost: 10,
        stageScore: 0,
        totalScore: 0,
        accuracy: 100,
      };
      this.afterstageGold=[150,2000,4000];
      this.upgrade=[100,50,130,200];
      this.upgradeval=[5,1,50,1];
      this.shotmade=0;
      this.shottotal=0;
      this.difficultyScale=1;
      this.stage=1;
      this.stageMAX=3;
      this.enemiesCount=0;

      this.stagetime;
      this.totalstagetime;
      this.decrement_timer=false;
      this.generator=false;

      this.leadnames=[];
      this.leadscores=[];

      this.nick="Unnamed";
    }

    ondraw(ctx) {}

    checkover()
    {
      if(app.playerstats.HP<=0) 
      {
        if(app.music[1].playing)
        {
          app.music[1].stop();
          app.music[2].play();
        }

        app.playerstats.gold += app.afterstageGold[app.stage-1]; //bonus goldy
        app.stopStage();

        if (app.playerstats.heartcount != 1) //ak to nieje posledny zivot
          app.sceneChange(sceneFailed);

        else 
          app.sceneChange(sceneDefeat);
      }

      if(app.stagetime<=0 && app.enemiesCount == 0) //prejdeny stage
      {
        if(app.music[1].playing)
        {
          app.music[1].stop();
          app.music[3].play();
        }

        app.playerstats.gold += app.afterstageGold[app.stage-1]; //bonus goldy
        app.stopStage();
        app.sceneChange(sceneCompleted);
      }
        
    }
    updatescore()
    {
      app.playerstats.totalScore += Math.floor(app.playerstats.stageScore * app.playerstats.accuracy *
        Math.floor((app.playerstats.HP/app.playerstats.maxHP*100)) /10000);
    }

    decrement_time()
    {
      if(app.stagetime>0)
        app.stagetime--;
    }

    unpauseStage()
    {
      app.stagetimer=setInterval(app.decrement_time,1000); 
      app.generator=generateEnemies();
    }

    stopStage()
    {
      clearInterval(app.stagetimer);
      clearInterval(app.generator);
      app.stagetimer=false;
      app.generator=false;
    }

    startStage()
    {
      app.totalstagetime = app.stagetime = app.stage * 60;
      app.playerstats.HP = app.playerstats.maxHP;
      app.shotmade=0;
      app.shottotal=0;
      app.playerstats.stageScore=0;
      app.playerstats.accuracy=100;

      app.stagetimer=setInterval(app.decrement_time,1000);

      //remove arrows and enemies
      for(i in app.nodes)
      {
          let obj=app.nodes[i];
          if(obj instanceof Enemy || obj instanceof Arrow)
            app.remove(obj);
      }
      app.enemiesCount=0;

      app.generator=generateEnemies();
    }
  
///////////////////////////////////.................. main loop of the game..........//////////////////////////////////////
    update() 
    {
        let now=Date.now();
        let dt=(now- app.time)/100;
        app.time=now;
 
        app.notify("move",dt); 

        //calculate accuracy
        if(app.shottotal!=0)
          app.playerstats.accuracy=Math.floor(app.shotmade/app.shottotal*100);
        if(app.playerstats.accuracy==0 && app.shotmade!=0)
          app.playerstats.accuracy=1;

        //view
        app.draw(app.ctx);

        if(app.stagetimer)
        {
          app.checkover(); 
        }
          
        requestAnimationFrame(app.update);
    }
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    start() {
  
      //controller
      window.onclick = function (event) 
      {
        let point = {
          x: event.layerX,
          y: event.layerY,
        }
        app.click(point)
      }

      window.onkeydown = function (event) 
      {
        app.keys[event.keyCode]=true; 
        app.key(event); 
      }
      window.onkeyup = function (event) {app.keys[event.keyCode]=false; }
      

    

      for(let i in app.music)
        app.music[i].sound.setAttribute("loop", "true");

      for(let i in app.sounds)
        app.sounds[i].sound.volume =0;
  
      requestAnimationFrame(app.update);
    }

    quit()
    {
      //model
      this.time=Date.now();
      this.keys=[];
      
      this.playerstats={
        dmg: 20,
        speed: 3,
        maxHP: 200,
        def: 0,

        heartcount: 3,
        heartval: 3500,
        HP: 200,

        gold: 0,
        diamonds: 0,
        diacost: 10,
        stageScore: 0,
        totalScore: 0,
        accuracy: 100,
      };
      this.afterstageGold=[150,2000,4000];
      this.upgrade=[100,50,130,200];
      this.upgradeval=[5,1,50,1];
      this.shotmade=0;
      this.shottotal=0;
      this.difficultyScale=1;
      this.stage=1;
      this.stageMAX=3;
      this.enemiesCount=0;

      this.stagetime;
      this.totalstagetime;
      this.decrement_timer=false;
      this.generator=false;

      this.leadnames=[];
      this.leadscores=[];

      this.nick="Unnamed";
    }
}






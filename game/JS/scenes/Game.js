function makeGame()
{
    let background=new Background;
    background.add(new Hearts);
    background.add(new MyImage(520,200,"../graphics/Hero/tower.png"));
    background.add(new MyImage(643,319,"../graphics/Hero/stlp.png"));
    background.add(new HP_bar);
    background.add(new Dia_bar);
    background.add(new ScoreTable);
    background.add(new Stage);

    let bow=new Bow
    let hero=new Hero;
    let pauseimg=new Button("",740,10,48,48,"../graphics/UI/pause.png");
    pauseimg.action=function()
    {
        app.stopStage();
        app.sceneChange(scenePause);
        
        if(app.music[1].playing)
        {
          app.music[1].stop();
          app.music[0].play();
        }
    }

    let soundimg=new Button("",690,10,48,48,"../graphics/UI/sounds.png");
    soundimg.action=function()
    {
      if(app.sounds[0].sound.volume == 0)
      {
        soundimg.sound=true;
        for(let i in app.sounds)
          app.sounds[i].sound.volume =1;
      }
      else
      {
        soundimg.sound=false;
        for(let i in app.sounds)
          app.sounds[i].sound.volume =0;
      }
    }

    let musicimg=new Button("",640,10,48,48,"../graphics/UI/music.png");
    musicimg.action=function()
    {
      if(app.music[1].playing)
      {
        app.music[1].pause();
        musicimg.sound=false;
      } 
        
      else 
      {
        app.music[1].play(); 
        musicimg.sound=true;
      }
    }

    sceneGame.add(background);
    sceneGame.add(bow);
    sceneGame.add(hero);
    sceneGame.add(pauseimg);
    sceneGame.add(soundimg);
    sceneGame.add(musicimg);
}
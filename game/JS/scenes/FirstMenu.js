function makeFirstMenu()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("T o w e r     D e f e n s e",0,0,800,300,55,"#3f2a14","center");
    let musicimg=new Button("",640,10,48,48,"../graphics/UI/music.png");
    musicimg.sound=false;
    musicimg.action=function()
    {
      if(app.music[0].playing)
      {
        app.music[0].pause();
        musicimg.sound=false;
      } 
        
      else 
      {
        app.music[0].play(); 
        musicimg.sound=true;
      }
        
    }
    let playButton=new Button("New game",300,170,200,100,"../graphics/UI/field.png");
    playButton.action=function()
    {
      app.sceneChange(sceneNewGame)
    }
    let instructButton=new Button("Instructions",300,275,200,100,"../graphics/UI/field.png");
    instructButton.action=function()
    {
      app.sceneChange(sceneInstruct);
    }

    let leaderboards=new Button("Leaderboards",300,380,200,100,"../graphics/UI/field.png");
    leaderboards.action=function()
    {
      app.sceneChange(sceneLeaderb);
    }
    

    sceneFirstMenu.add(background);
    sceneFirstMenu.add(menu);
    sceneFirstMenu.add(header);
    sceneFirstMenu.add(musicimg);
    sceneFirstMenu.add(playButton);
    sceneFirstMenu.add(instructButton);
    sceneFirstMenu.add(leaderboards);
    
}
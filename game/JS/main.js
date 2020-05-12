let app;
let leaderboards;

let sceneGame=new Node;
let sceneFirstMenu=new Node;
let sceneInstruct=new Node;
let sceneDefeat=new Node;
let sceneLeaderb=new Node;
let sceneNewGame=new Node;
let scenePause=new Node;
let sceneCompleted=new Node;
let sceneVictory=new Node;
let sceneFailed=new Node;
let sceneUpgradeMenu=new Node;

window.onload = function() 
{
  app = new App("myCanvas");
  //localStorage.clear();
  leaderboards=new Leaderboards; 
  leaderboards.storage2array();
  
  makeFirstMenu();
  makeGame();
  makeInstruct();
  makeDefeat();
  makeLeaderboards();
  makeNewGame();
  makePause();
  makeCompleted();
  makeVictory();
  makeFailed();
  makeUpgradeMenu();
 
  app.time=Date.now();
  
  app.sceneChange(sceneFirstMenu);

  app.start();
}


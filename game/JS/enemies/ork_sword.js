class ork_sword extends Enemy
{
    constructor(y)
    {
        let height = 66;
        
        super(y,height);

        //stats
        this.HP = 200*app.difficultyScale;
        this.dmg = 3 - app.playerstats.def; 
        if(this.dmg<1) this.dmg = 1;
        this.range = 3;
        this.speed = 8;

        //give to player after die
        this.gold = 50;
        this.diamonds = 1;
        this.score = 35;

        this.walksources=[
          "../graphics/sprites/Ork_sword/WALK/WALK_002.png",
          "../graphics/sprites/Ork_sword/WALK/WALK_003.png",
        ];
        this.attacksources=[
            "../graphics/sprites/Ork_sword/ATTAK_003.png",
            "../graphics/sprites/Ork_sword/ATTAK_006.png",
        ];
        this.diesources=[
            "../graphics/sprites/Ork_sword/DIE_002.png",
            "../graphics/sprites/Ork_sword/DIE_006.png",
        ];
    }
}
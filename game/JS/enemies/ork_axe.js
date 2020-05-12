class ork_axe extends Enemy
{
    constructor(y)
    {
        let height = 66;
        
        super(y,height);

        //stats
        this.HP = 700*app.difficultyScale;
        this.dmg = 7 - app.playerstats.def; 
        if(this.dmg<1) this.dmg = 1;
        this.range = 3;
        this.speed = 4;

        //give to player after die
        this.gold = 160;
        this.diamonds = 3;
        this.score = 75;

        this.walksources=[
          "../graphics/sprites/Ork_axe+helm/WALK_002.png",
          "../graphics/sprites/Ork_axe+helm/WALK_003.png",
        ];
        this.attacksources=[
            "../graphics/sprites/Ork_axe+helm/ATTAK_003.png",
            "../graphics/sprites/Ork_axe+helm/ATTAK_006.png",
        ];
        this.diesources=[
            "../graphics/sprites/Ork_axe+helm/DIE_002.png",
            "../graphics/sprites/Ork_axe+helm/DIE_006.png",
        ];
    }
}
class troll_mace extends Enemy
{
    constructor(y)
    {
        let height = 120;
        
        super(y,height);

        //stats
        this.HP = 2700*app.difficultyScale;
        this.dmg= 20 -app.playerstats.def; 
        if(this.dmg<1) this.dmg=1;
        this.range = 3;
        this.speed = 2;

        this.spaceUp = 22;

        //give to player after die
        this.gold = 700;
        this.diamonds = 12;
        this.score = 1500;

        this.walksources=[
          "../graphics/sprites/Troll_mace/WALK_002.png",
          "../graphics/sprites/Troll_mace/WALK_003.png",
        ];
        this.attacksources=[
            "../graphics/sprites/Troll_mace/ATTAK_001.png",
            "../graphics/sprites/Troll_mace/ATTAK_004.png",
        ];
        this.diesources=[
            "../graphics/sprites/Troll_mace/DIE_002.png",
            "../graphics/sprites/Troll_mace/DIE_006.png",
        ];
    }
}
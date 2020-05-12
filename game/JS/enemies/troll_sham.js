class troll_sham extends Enemy
{
    constructor(y)
    {
        let height = 64;
        
        super(y,height);

        //stats
        this.HP = 250*app.difficultyScale;
        this.dmg = 4 -app.playerstats.def; 
        if(this.dmg<1) this.dmg = 1;
        this.range = 250;
        this.speed = 6;

        this.spaceUp = 12;

        //give to player after die
        this.gold = 200;
        this.diamonds = 2;
        this.score = 80;

        this.walksources=[
          "../graphics/sprites/Troll_shaman/WALK_002.png",
          "../graphics/sprites/Troll_shaman/WALK_003.png",
        ];
        this.attacksources=[
            "../graphics/sprites/Troll_shaman/ATTAK_001.png",
            "../graphics/sprites/Troll_shaman/ATTAK_004.png",
        ];
        this.diesources=[
            "../graphics/sprites/Troll_shaman/DIE_002.png",
            "../graphics/sprites/Troll_shaman/DIE_006.png",
        ];
    }
}
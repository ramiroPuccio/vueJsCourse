function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const game =  Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            result:null,
            currentRound: 0,
            battleLog:[],
        }
    },
    methods:{
        playerAttack(){
            const damage = getRandomValue(5,12) 
            this.monsterHealth -= damage;
            this.currentRound ++;
            this.battleLog.push({action:'Player Attack - ', damageDealt:'Damage ' + damage + ' - ', ph: this.playerHealth, mh:this.monsterHealth})
            
            this.monsterAttack();
        },
        playerSpecialAttack(){
            const damage = getRandomValue(10,25) 
            this.monsterHealth -= damage;
            this.battleLog.push({action:'Player Special Attack - ', damageDealt: 'Damage ' + damage + ' - ', ph: this.playerHealth, mh:this.monsterHealth})
            this.currentRound ++;
            this.monsterAttack();
        },
        monsterAttack(){
            const damage = getRandomValue(8,15);
            this.playerHealth -= damage;
            this.battleLog.push({action:'Monster Attack - ', damageDealt: 'Damage ' + damage + ' - ', ph: this.playerHealth, mh:this.monsterHealth})
        },
        playerHeal(){
            const healValue = getRandomValue(8,20);
            if (this.playerHealth + healValue > 100) this.playerHealth = 100;
            else this.playerHealth += healValue;
            this.battleLog.push({action:'Player Heal - ', damageDealt:'Healed by ' + healValue + ' - ', ph: this.playerHealth, mh:this.monsterHealth})

            this.currentRound ++;
            this.monsterAttack();
        },
        surrender(){
            this.playerHealth = 0;
            this.battleLog.push({action:'Player Surrender - ', damageDealt:'', ph: this.playerHealth, mh:this.monsterHealth})
        },
        gameOver(){
            setTimeout(this.resetGame,4000);
        },
        resetGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.battleLog = [];
            this.result = null;
            this.currentRound= 0;
        },
    },
    computed:{
        monsterBarStyle(){
            if(this.monsterHealth < 0){
                return {width: '0%'};
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyle(){
            if(this.playerHealth < 0){
                return {width: '0%'};
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch:{
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                this.result = 'draw';
            } else if (value <= 0){
                this.result = 'monster'
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0){
                this.result = 'draw'

            } else if (value <= 0){
                this.result = 'player'
            }
        },
        result(){
            this.gameOver();
        }
    }
});
game.mount('#game');
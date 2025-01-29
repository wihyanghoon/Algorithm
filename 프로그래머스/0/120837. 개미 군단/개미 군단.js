function solution(hp) {
    const generalAnt = 5;
    const soldierAnt = 3;
    const workerAnt = 1;


    const generals = Math.floor(hp / generalAnt);
    hp %= generalAnt;


    const soldiers = Math.floor(hp / soldierAnt);
    hp %= soldierAnt;


    const workers = hp / workerAnt;


    return generals + soldiers + workers;
}
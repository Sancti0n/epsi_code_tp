const calendrierMatchs = [
    {
        id: 'LFL_KC_SLY',
        jeu: 'League of Legends',
        competition: 'LFL',
        equipeA: 'Karmine Corp',
        equipeB: 'Solary',
        probabiliteA: 0.65, // 65% de chance pour KC
        statut: 'À venir'
    },
    {
        id: 'VCT_VIT_M8',
        jeu: 'Valorant',
        competition: 'VCT EMEA',
        equipeA: 'Team Vitality',
        equipeB: 'Mandatory',
        probabiliteA: 0.55, // 55% de chance pour Vitality
        statut: 'À venir'
    },
    {
        id: 'LFL_GO_BDS',
        jeu: 'League of Legends',
        competition: 'LFL',
        equipeA: 'Gentle Mates',
        equipeB: 'BDS Academy',
        probabiliteA: 0.48, // 48% de chance pour M8, donc BDS est favori
        statut: 'À venir'
    },
    {
        id: 'LFL_KC_M8',
        jeu: 'Valorant',
        competition: 'VCT EMEA',
        equipeA: 'Karmine Corp',
        equipeB: 'Mandatory',
        probabiliteA: 0.52,
        statut: 'À venir'
    }
];

class Match {
    constructor(id, jeu, competition, equipeA, equipeB, probabiliteA, statut) {
        this.id = id,
            this.jeu = jeu,
            this.competition = competition,
            this.equipeA = equipeA,
            this.equipeB = equipeB,
            this.probabiliteA = probabiliteA,
            this.statut = statut
    }

    getFavori() {
        return this.probabiliteA > 0.5 ? this.equipeA : this.equipeB
    }
}

class Plateforme {
    constructor(nom) {
        this.nom = nom,
            this.matchs = new Array()
    }

    chargerMatchs(matchsACcharger) {
        matchsACcharger.forEach((element) => {
            let newMatch = new Match(
                element.id,
                element.jeu,
                element.competition,
                element.equipeA,
                element.equipeB,
                element.probabiliteA
            );
            this.matchs.push(newMatch);
        });
    }

    // [competition] equipeA vs. equipeB - Jeu: jeu
    afficherCalendrier() {
        this.matchs.forEach((element) => {
            console.log("[" + element.competition + "] " + element.equipeA + " vs. " + element.equipeB + " - Jeu: " + element.jeu)
        });
    }

    getMatchsParJeu(jeu) {
        return this.matchs.filter((element) => {
            return element.jeu === jeu;
        });
    }

    getMatchsRisques() {
        return this.matchs.filter((element) => {
            return element.probabiliteA > 0.45 && element.probabiliteA < 0.55;
        });
    }

    getMatchById(id) {
        return this.matchs.find((element) => {
            return element.id === id;
        });
    }
}


// Environnement de test
let esportVision = new Plateforme("Esport Vision");

console.log("1.Test du nom et montre un tableau initialisé et vide");
//console.log(esportVision);
// Plateforme { nom: 'Esport Vision', matchs: [] }


console.log("2.Chargement des élements dans le tableau matchs");
esportVision.chargerMatchs(calendrierMatchs);
//console.log(esportVision)
// Montre les éléments de calendrierMatchs


console.log("3.Un match, les équipes, le jeu");
//esportVision.afficherCalendrier()
// Montre un formatage d'un string de chaque match
/*
[LFL] Karmine Corp vs. Solary - Jeu: League of Legends
[VCT EMEA] Team Vitality vs. Mandatory - Jeu: Valorant
[LFL] Gentle Mates vs. BDS Academy - Jeu: League of Legends
[VCT EMEA] Karmine Corp vs. Mandatory - Jeu: Valorant
*/


console.log("4.Les matchs qui contiennent le jeu passé en paramètre");
//console.log(esportVision.getMatchsParJeu("Valorant"))
// affiche les jeux avec le même paramètre


console.log("5.Matchs affichés selon l'id");
//console.log(esportVision.getMatchById("LFL_KC_M8"))
//console.log(esportVision.getMatchById("LFL_GO_BDS"))
// affiche le ou les matchs qui ont ce paramètre comme id


console.log("6.Matchs avec une probabilité serrée");
//console.log(esportVision.getMatchsRisques())
// affiche les matchs où probabiliteA est supérieur à 0.45 et inférieur à 0.55
// je suis parti du principe que c'était supérieur strict et inférieur strict
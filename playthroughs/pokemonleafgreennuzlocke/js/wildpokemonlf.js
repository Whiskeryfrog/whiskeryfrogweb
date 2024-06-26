const tableHeaders = [
    "Pokémon",
    "Level",
    "Type",
    "Encounter Rate",
    "Insight"
];

function populateTable(tableData, tableId) {
    const table = document.getElementById(tableId);

    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    const headerRow = document.createElement("tr");
    tableHeaders.forEach(header => {
        const headerCell = document.createElement("th");
        headerCell.textContent = header;
        headerRow.appendChild(headerCell);
    });
    tbody.appendChild(headerRow);

    tableData.forEach(data => {
        const rowElement = document.createElement("tr");

        // Combine name, image, and success indicator in a single cell
        const nameCell = document.createElement("td");
        let pokemonName = data.pokemon.name;

        // Add span tags based on ifCaught value
        switch (data.ifCaught) {
            case "success":
                pokemonName = `<span class='succenc'>${pokemonName}</span>`;
                rowElement.classList.add("succenc");
                break;
            case "already":
                pokemonName = `<span class='caughtpokemon'>${pokemonName}</span>`;
                rowElement.classList.add("caughtpokemon");
                break;
            case "failed":
                pokemonName = `<span class='failenc'>${pokemonName}</span>`;
                rowElement.classList.add("failenc");
                break;
            default:
                break;
        }

        const nameContent = document.createElement("div");
        nameContent.innerHTML = pokemonName;

        const pokemonImage = document.createElement("img");
        pokemonImage.classList.add("nopad");
        pokemonImage.setAttribute("src", data.pokemon.image);
        pokemonImage.setAttribute("alt", pokemonName);

        nameCell.appendChild(nameContent);
        nameCell.appendChild(pokemonImage);
        rowElement.appendChild(nameCell);

        // Add level cell
        const levelCell = document.createElement("td");
        levelCell.textContent = data.level;
        rowElement.appendChild(levelCell);

        // Add type cell with image
        const typeCell = document.createElement("td");
        const typeImage = document.createElement("img");
        typeImage.setAttribute("src", data.pokemon.type);
        typeImage.setAttribute("alt", data.pokemon.type);
        typeCell.appendChild(typeImage);
        rowElement.appendChild(typeCell);

        // Add encounter rate cell
        const encounterRateCell = document.createElement("td");
        encounterRateCell.textContent = data.encounterRate;
        rowElement.appendChild(encounterRateCell);

        // Add insight cell
        const insightCell = document.createElement("td");
        insightCell.textContent = data.pokemon.insight;
        rowElement.appendChild(insightCell);

        tbody.appendChild(rowElement);
    });
}

// Function to show all rows
function showAll(className) {
    const tables = document.querySelectorAll(`.${className}`);
    tables.forEach(table => {
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(row => {
            row.style.display = "";
        });
    });
    localStorage.setItem(`tableState_${className}`, 'all');
}

// Function to show only caught rows
function showCaught(className) {
    const tables = document.querySelectorAll(`.${className}`);
    tables.forEach(table => {
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(row => {
            if (row.classList.contains("succenc")) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
    localStorage.setItem(`tableState_${className}`, 'caught');
}

// Function to set table visibility based on saved state
function setTableVisibility(className) {
    const tableState = localStorage.getItem(`tableState_${className}`);
    if (tableState === 'caught') {
        showCaught(className);
    } else {
        showAll(className);
    }
}

document.getElementById("showAll0").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught0").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll1").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught1").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll3").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught3").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll4").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught4").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll5").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught5").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll7").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught7").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll10").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught10").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll11").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught11").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll12").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught12").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll15").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught15").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll16").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught16").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll17").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught17").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll18").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught18").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll21").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught21").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll25").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught25").addEventListener("click", () => showCaught("pokemon-table"));

document.getElementById("showAll27").addEventListener("click", () => showAll("pokemon-table"));
document.getElementById("showCaught27").addEventListener("click", () => showCaught("pokemon-table"));

document.addEventListener('DOMContentLoaded', () => {
    setTableVisibility("pokemon-table");
});

//episode 1
const oaklab = [
    {
        pokemon: bulbasaur0,
        level: "5",
        encounterRate: "Gift",
        ifCaught: "" 
    },
    {
        pokemon: charmander0,
        level: "5",
        encounterRate: "Gift",
        ifCaught: "" 
    },
    {
        pokemon: squirtle0,
        level: "5",
        encounterRate: "Gift",
        ifCaught: "success" 
    }
];

const testroute = [
    {
        pokemon: pidgey0,
        level: "2-5",
        encounterRate: "50%",
        ifCaught: "success" 
    },
    {
        pokemon: rattata0,
        level: "2-4",
        encounterRate: "50%",
        ifCaught: "" 
    }
];

const route1 = [
    {
        pokemon: pidgey0,
        level: "2-5",
        encounterRate: "50%",
        ifCaught: "success" 
    },
    {
        pokemon: rattata0,
        level: "2-4",
        encounterRate: "50%",
        ifCaught: "" 
    }
];

const route2 = [
    {
        pokemon: pidgey0,
        level: "2-5",
        encounterRate: "45%",
        ifCaught: "already" 
    },
    {
        pokemon: rattata0,
        level: "2-5",
        encounterRate: "45%",
        ifCaught: "" 
    },
    {
        pokemon: caterpie0,
        level: "4-5",
        encounterRate: "5%",
        ifCaught: "" 
    },
    {
        pokemon: weedle0,
        level: "4-5",
        encounterRate: "5%",
        ifCaught: "success" 
    }
];

const route22 = [
    {
        pokemon: rattata0,
        level: "2-5",
        encounterRate: "45%",
        ifCaught: "success" 
    },
    {
        pokemon: mankey0,
        level: "2-5",
        encounterRate: "45%",
        ifCaught: "" 
    },
    {
        pokemon: spearow0,
        level: "3-5",
        encounterRate: "10%",
        ifCaught: "" 
    }
];

const viridian = [
    {
        pokemon: caterpie0,
        level: "3-5",
        encounterRate: "40%",
        ifCaught: "success"  
    },
    {
        pokemon: weedle0,
        level: "3-5",
        encounterRate: "40%",
        ifCaught: "already" 
    },
    {
        pokemon: metapod0,
        level: "3-5",
        encounterRate: "10%",
        ifCaught: "" 
    },
    {
        pokemon: kakuna0,
        level: "5",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: pikachu0,
        level: "3-5",
        encounterRate: "5%",
        ifCaught: "" 
    },
];

//episode 2,
//episode 3
const route3 = [
    {
        pokemon: spearow0,
        level: "6-8",
        encounterRate: "35%",
        ifCaught: "" 
    },
    {
        pokemon: pidgey0,
        level: "6-7",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: nidoranf0,
        level: "6-7",
        encounterRate: "14%",
        ifCaught: "success" 
    },
    {
        pokemon: jigglypuff0,
        level: "3-7",
        encounterRate: "10%",
        ifCaught: ""  
    },
    {
        pokemon: mankey0,
        level: "7",
        encounterRate: "10%",
        ifCaught: "" 
    },
    {
        pokemon: nidoranm0,
        level: "6",
        encounterRate: "1%",
        ifCaught: "" 
    }
];

//episode 4
const mtMoon = [
    {
        pokemon: zubat0,
        level: "1f\: 7-10\, B2f\: 8-11",
        encounterRate: "1f\: 69%, B2f\: 49%",
        ifCaught: "success" 
    },
    {
        pokemon: geodude0,
        level: "1f\: 7-9\, B2f\: 9-10",
        encounterRate: "1f\: 25%, B2f\: 30%",
        ifCaught: "" 
    },
    {
        pokemon: paras0,
        level: "1f\: 8\, B1f\: 5-10\, B2f\: 10-12",
        encounterRate: "1f\: 5%\, B1f\: 100%\, B2f\: 15%",
        ifCaught: "" 
    },
    {
        pokemon: clefairy0,
        level: "8",
        encounterRate: "1f\: 1%\, B2f\: 6%",
        ifCaught: ""  
    }
];

const route3PKMNCenter = [
    {
        pokemon: magikarp0,
        level: "5",
        encounterRate: "Gift",
        ifCaught: "success" 
    }
];

const route4 = [
    {
        pokemon: rattata0,
        level: "8-12",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: spearow0,
        level: "8-12",
        encounterRate: "35%",
        ifCaught: "success" 
    },
    {
        pokemon: sandshrew0,
        level: "6-12",
        encounterRate: "25%",
        ifCaught: "" 
    },
    {
        pokemon: mankey0,
        level: "10-12",
        encounterRate: "5%",
        ifCaught: ""  
    }
];

//episode5
const route24 = [
    {
        pokemon: bellsprout0,
        level: "12-14",
        encounterRate: "25%",
        ifCaught: "success" 
    },
    {
        pokemon: caterpie0,
        level: "7",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: weedle0,
        level: "7",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: pidgey0,
        level: "11-13",
        encounterRate: "15%",
        ifCaught: "already"  
    },
    {
        pokemon: abra0,
        level: "8-12",
        encounterRate: "15%",
        ifCaught: ""  
    },
    {
        pokemon: metapod0,
        level: "8",
        encounterRate: "4%",
        ifCaught: "already"  
    },
    {
        pokemon: kakuna0,
        level: "8",
        encounterRate: "1%",
        ifCaught: "already"  
    },
];

const route25 = [
    {
        pokemon: bellsprout0,
        level: "12-14",
        encounterRate: "25%",
        ifCaught: "already" 
    },
    {
        pokemon: caterpie0,
        level: "8",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: weedle0,
        level: "8",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: pidgey0,
        level: "11-13",
        encounterRate: "15%",
        ifCaught: "already"  
    },
    {
        pokemon: abra0,
        level: "9-12",
        encounterRate: "15%",
        ifCaught: "failed"  
    },
    {
        pokemon: metapod0,
        level: "9",
        encounterRate: "4%",
        ifCaught: "already"  
    },
    {
        pokemon: kakuna0,
        level: "9",
        encounterRate: "1%",
        ifCaught: "already"  
    }
];
//episode6
//episode7
const route5 = [
    {
        pokemon: pidgey0,
        level: "13-16",
        encounterRate: "40%",
        ifCaught: "already" 
    },
    {
        pokemon: meowth0,
        level: "10-16",
        encounterRate: "35%",
        ifCaught: "success" 
    },
    {
        pokemon: bellsprout0,
        level: "13-16",
        encounterRate: "25%",
        ifCaught: "already" 
    }
];

const route6 = [
    {
        pokemon: pidgey0,
        level: "13-16",
        encounterRate: "40%",
        ifCaught: "already" 
    },
    {
        pokemon: meowth0,
        level: "10-16",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: bellsprout0,
        level: "13-16",
        encounterRate: "25%",
        ifCaught: "already" 
    }
];

const diglettcave = [
    {
        pokemon: diglett0,
        level: "15-22",
        encounterRate: "95%",
        ifCaught: "success" 
    },
    {
        pokemon: dugtrio0,
        level: "29-31",
        encounterRate: "5%",
        ifCaught: "" 
    }
];

const route11 = [
    {
        pokemon: sandshrew0,
        level: "12-15",
        encounterRate: "40%",
        ifCaught: "success" 
    },
    {
        pokemon: spearow0,
        level: "13-17",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: drowzee0,
        level: "11-15",
        encounterRate: "25%",
        ifCaught: "" 
    }
];
//episode8
//episode9
//episode10
const route9 = [
    {
        pokemon: rattata0,
        level: "14-17",
        encounterRate: "40%",
        ifCaught: "already" 
    },
    {
        pokemon: spearow0,
        level: "13-17",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: sandshrew0,
        level: "11-17",
        encounterRate: "25%",
        ifCaught: "already" 
    }
];

const route10 = [
    {
        pokemon: voltorb0,
        level: "14-17",
        encounterRate: "40%",
        ifCaught: "success" 
    },
    {
        pokemon: spearow0,
        level: "13-17",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: sandshrew0,
        level: "11-17",
        encounterRate: "25%",
        ifCaught: "already" 
    }
];
//episode11
const rocktunnel = [
    {
        pokemon: geodude0,
        level: "15-17",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: zubat0,
        level: "15-16",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: mankey0,
        level: "16-17",
        encounterRate: "15%",
        ifCaught: "" 
    },
    {
        pokemon: machop0,
        level: "1f\: 16-17, B1f\: 17",
        encounterRate: "1f\: 15%\, B1f\: 10%",
        ifCaught: "success"  
    },
    {
        pokemon: onix0,
        level: "13-15",
        encounterRate: "1f\: 5%\, B1f\: 10%",
        ifCaught: ""  
    }
];
//episode12
const route8 = [
    {
        pokemon: pidgey0,
        level: "18-20",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: meowth0,
        level: "18-20",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: sandshrew0,
        level: "17-19",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: vulpix0,
        level: "15-18",
        encounterRate: "20%",
        ifCaught: "success"  
    }
];

const route7 = [
    {
        pokemon: meowth0,
        level: "17-20",
        encounterRate: "40%",
        ifCaught: "already" 
    },
    {
        pokemon: pidgey0,
        level: "19-22",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: sandshrew0,
        level: "19-22",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: vulpix0,
        level: "18-20",
        encounterRate: "10%",
        ifCaught: "already"  
    }
];

//episode13
//episode14
//episode15
const pokemontower = [
    {
        pokemon: ghastly0,
        level: "3f-4f-5f\: 13-19\, 6f\: 14-19\, 7f\: 15-19",
        encounterRate: "3f\: 90%\, 4f-5f\: 86%\, 6f\: 85%\, 7f\: 75%",
        ifCaught: "success" 
    },
    {
        pokemon: cubone0,
        level: "3f-4f-5f\: 15-17\, 6f-7f\: 17-19",
        encounterRate: "3f-4f-5f-6f\: 9%\, 7f: 10%;",
        ifCaught: "" 
    },
    {
        pokemon: haunter0,
        level: "3f-4f-5f\: 20\, 6f\: 21-23\, 7f\: 23-25",
        encounterRate: "3f\: 1%\, 4f-5f\: 5%\, 6f\: 6%\, 7f\: 15%",
        ifCaught: "" 
    }
];
//episode16
const route12 = [
    {
        pokemon: bellsprout0,
        level: "22-26",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: pidgey0,
        level: "23-27",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: venonat0,
        level: "24-26",
        encounterRate: "30%",
        ifCaught: "" 
    },
    {
        pokemon: weepinbell0,
        level: "28-30",
        encounterRate: "5%",
        ifCaught: "already"  
    },
    {
        pokemon: snorlax0,
        level: "30",
        encounterRate: "special",
        ifCaught: "success"  
    },
];

const route12superrod = [
    {
        pokemon: krabby0,
        level: "15-35",
        encounterRate: "84%",
        ifCaught: "" 
    },
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    }
];

const route13 = [
    {
        pokemon: bellsprout0,
        level: "22-26",
        encounterRate: "35%",
        ifCaught: "already" 
    },
    {
        pokemon: venonat0,
        level: "24-26",
        encounterRate: "30%",
        ifCaught: "" 
    },
    {
        pokemon: pidgey0,
        level: "25-27",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: pidgeotto0,
        level: "29",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: weepinbell0,
        level: "28-30",
        encounterRate: "5%",
        ifCaught: "already"  
    },
    {
        pokemon: ditto0,
        level: "25",
        encounterRate: "5%",
        ifCaught: ""  
    },
];

const route13superrod = [
    {
        pokemon: krabby0,
        level: "15-35",
        encounterRate: "84%",
        ifCaught: "" 
    },
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    }
];

//episode17
const safariZoneArea1 = [
    {
        pokemon: nidoranf0,
        level: "22",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: exeggcute0,
        level: "24-25",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: rhyhorn0,
        level: "25",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: venonat0,
        level: "22",
        encounterRate: "15%",
        ifCaught: "" 
    },
    {
        pokemon: nidorina0,
        level: "31",
        encounterRate: "10%",
        ifCaught: "already"  
    },
    {
        pokemon: nidorino0,
        level: "31",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: parasect0,
        level: "30",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: pinsir0,
        level: "23",
        encounterRate: "4%",
        ifCaught: ""  
    },
    {
        pokemon: chansey0,
        level: "23",
        encounterRate: "1%",
        ifCaught: ""  
    },
];
const safariZonesuperrod = [
    {
        pokemon: goldeen0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "" 
    },
    {
        pokemon: seaking0,
        level: "20-30",
        encounterRate: "40%",
        ifCaught: "" 
    },
    {
        pokemon: dratini0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "" 
    },
    {
        pokemon: slowpoke0,
        level: "15-35",
        encounterRate: "4%",
        ifCaught: "" 
    },
    {
        pokemon: dragonair0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    },
];
const fuchsiacitysuperrod = [
    {
        pokemon: goldeen0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "" 
    },
    {
        pokemon: seaking0,
        level: "20-30",
        encounterRate: "40%",
        ifCaught: "success" 
    },
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "15-35",
        encounterRate: "5%",
        ifCaught: "" 
    },
];
const safariZoneArea2 = [
    {
        pokemon: nidoranf0,
        level: "24",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: doduo0,
        level: "26",
        encounterRate: "20%",
        ifCaught: "failed" 
    },
    {
        pokemon: exeggcute0,
        level: "23-25",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: paras0,
        level: "22",
        encounterRate: "15%",
        ifCaught: "" 
    },
    {
        pokemon: nidorina0,
        level: "33",
        encounterRate: "10%",
        ifCaught: "already"  
    },
    {
        pokemon: nidoranm0,
        level: "24",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: parasect0,
        level: "25",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: kangaskhan0,
        level: "25",
        encounterRate: "4%",
        ifCaught: ""  
    },
    {
        pokemon: pinsir0,
        level: "28",
        encounterRate: "1%",
        ifCaught: ""  
    },
];
const safariZoneArea3 = [
    {
        pokemon: nidoranf0,
        level: "30",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: exeggcute0,
        level: "25-27",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: rhyhorn0,
        level: "26",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: paras0,
        level: "23",
        encounterRate: "15%",
        ifCaught: "" 
    },
    {
        pokemon: nidorina0,
        level: "30",
        encounterRate: "10%",
        ifCaught: "already"  
    },
    {
        pokemon: nidorino0,
        level: "30",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: venomoth0,
        level: "32",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: chansey0,
        level: "26",
        encounterRate: "4%",
        ifCaught: ""  
    },
    {
        pokemon: tauros0,
        level: "32",
        encounterRate: "1%",
        ifCaught: ""  
    },
];
const safariZoneArea4 = [
    {
        pokemon: nidoranf0,
        level: "22",
        encounterRate: "20%",
        ifCaught: "already" 
    },
    {
        pokemon: doduo0,
        level: "26",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: exeggcute0,
        level: "25-27",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: venonat0,
        level: "23",
        encounterRate: "15%",
        ifCaught: "" 
    },
    {
        pokemon: nidorina0,
        level: "30",
        encounterRate: "10%",
        ifCaught: "already"  
    },
    {
        pokemon: nidoranm0,
        level: "30",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: venomoth0,
        level: "32",
        encounterRate: "5%",
        ifCaught: ""  
    },
    {
        pokemon: tauros0,
        level: "25",
        encounterRate: "4%",
        ifCaught: ""  
    },
    {
        pokemon: kangaskhan0,
        level: "28",
        encounterRate: "1%",
        ifCaught: ""  
    },
];
const route17 = [
    {
        pokemon: doduo0,
        level: "24-28",
        encounterRate: "35%",
        ifCaught: "success" 
    },
    {
        pokemon: spearow0,
        level: "20-22",
        encounterRate: "30%",
        ifCaught: "already" 
    },
    {
        pokemon: raticate0,
        level: "25-29",
        encounterRate: "25%",
        ifCaught: "already" 
    },
    {
        pokemon: rattata0,
        level: "22",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: fearow0,
        level: "25-27",
        encounterRate: "5%",
        ifCaught: "already"  
    }
];

const vermillionCitysuperrod = [
    {
        pokemon: staryu0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "success" 
    },
    {
        pokemon: krabby0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "" 
    },
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: horsea0,
        level: "25-30",
        encounterRate: "4%",
        ifCaught: "" 
    },
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: ""  
    }
];

const silphco = [
    {
        pokemon: lapras0,
        level: "25",
        encounterRate: "Gift",
        ifCaught: "success" 
    }
];
//episode18
const saffronCity = [
    {
        pokemon: hitmonlee0,
        level: "30",
        encounterRate: "Gift",
        ifCaught: "success" 
    }, 
    {
        pokemon: hitmonchan0,
        level: "30",
        encounterRate: "Gift",
        ifCaught: "" 
    }
];

//episode19
//episode20
//episode21
const route19 = [
    {
        pokemon: tentacool0,
        level: "5-40",
        encounterRate: "100%",
        ifCaught: "success" 
    }, 
];
const route19superrod = [
    {
        pokemon: krabby0,
        level: "15-30",
        encounterRate: "84%",
        ifCaught: "" 
    }, 
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    },
];
const pallettown = [
    {
        pokemon: tentacool0,
        level: "5-40",
        encounterRate: "100%",
        ifCaught: "already" 
    }, 
];
const pallettownsuperrod = [
    {
        pokemon: staryu0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "already" 
    }, 
    {
        pokemon: krabby0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "success" 
    }, 
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    }, 
    {
        pokemon: kingler0,
        level: "25-35",
        encounterRate: "4%",
        ifCaught: "" 
    }, 
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    }, 
];
const route21 = [
    {
        pokemon: tangela0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "success" 
    }
];
const route21surf = [
    {
        pokemon: tentacool0,
        level: "5-40",
        encounterRate: "100%",
        ifCaught: "already" 
    }
];
const route21superrod = [
    {
        pokemon: krabby0,
        level: "15-30",
        encounterRate: "84%",
        ifCaught: "" 
    }, 
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    },
];

const cinnabarisland = [
    {
        pokemon: tentacool0,
        level: "5-40",
        encounterRate: "100%",
        ifCaught: "already" 
    }
];

const cinnabarislandsuperrod = [
    {
        pokemon: staryu0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "already" 
    }, 
    {
        pokemon: krabby0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "success" 
    }, 
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    }, 
    {
        pokemon: kingler0,
        level: "25-35",
        encounterRate: "4%",
        ifCaught: "" 
    }, 
    {
        pokemon: slowpoke0,
        level: "25-35",
        encounterRate: "1%",
        ifCaught: "" 
    }, 
];
const mansion = [
    {
        pokemon: raticate0,
        level: "32-36",
        encounterRate: "30%",
        ifCaught: "already" 
    }, 
    {
        pokemon: grimer0,
        level: "28-30",
        encounterRate: "30%",
        ifCaught: "success" 
    }, 
    {
        pokemon: rattata0,
        level: "26-28",
        encounterRate: "1f-3f\:15%, B1f: 5%",
        ifCaught: "already" 
    }, 
    {
        pokemon: vulpix0,
        level: "30-32",
        encounterRate: "15%",
        ifCaught: "already" 
    }, 
    {
        pokemon: koffing0,
        level: "28",
        encounterRate: "5%",
        ifCaught: "" 
    }, 
    {
        pokemon: muk0,
        level: "32",
        encounterRate: "5%",
        ifCaught: "" 
    }, 
    {
        pokemon: ditto0,
        level: "30",
        encounterRate: "B1f: 10%",
        ifCaught: "" 
    }, 
];
const route20 = [
    {
        pokemon: tentacool0,
        level: "5-40",
        encounterRate: "100%",
        ifCaught: "already" 
    }
];
const seafoamislands = [
    {
        pokemon: slowpoke0,
        level: "26-33",
        encounterRate: "55%",
        ifCaught: "success" 
    }, 
    {
        pokemon: zubat0,
        level: "22-26",
        encounterRate: "34%",
        ifCaught: "already" 
    }, 
    {
        pokemon: golbat0,
        level: "26-30",
        encounterRate: "11%",
        ifCaught: "already" 
    }
];
//episode22
//episode23
//episode24
//episode25
const kindleroad = [
    {
        pokemon: ponyta0,
        level: "31-34",
        encounterRate: "30%",
        ifCaught: "" 
    }, 
    {
        pokemon: spearow0,
        level: "30-32",
        encounterRate: "25%",
        ifCaught: "already" 
    }, 
    {
        pokemon: fearow0,
        level: "36",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: meowth0,
        level: "31",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: geodude0,
        level: "31",
        encounterRate: "10%",
        ifCaught: "failed" 
    },
    {
        pokemon: persian0,
        level: "37-40",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: rapidash0,
        level: "37-40",
        encounterRate: "5%",
        ifCaught: "" 
    },
    {
        pokemon: slowpoke0,
        level: "34",
        encounterRate: "5%",
        ifCaught: "already" 
    },
];
const capebrink = [
    {
        pokemon: bellsprout0,
        level: "30-32",
        encounterRate: "30%",
        ifCaught: "already" 
    }, 
    {
        pokemon: spearow0,
        level: "31",
        encounterRate: "20%",
        ifCaught: "already" 
    }, 
    {
        pokemon: weepinbell0,
        level: "36-38",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: fearow0,
        level: "36",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: meowth0,
        level: "31",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: persian0,
        level: "37-40",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "31",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: slowbro0,
        level: "37-40",
        encounterRate: "5%",
        ifCaught: "already" 
    },
];
const capebrinksuperrod = [
    {
        pokemon: poliwag0,
        level: "15-25",
        encounterRate: "40%",
        ifCaught: "" 
    }, 
    {
        pokemon: poliwhirl0,
        level: "20-30",
        encounterRate: "40%",
        ifCaught: "" 
    }, 
    {
        pokemon: gyarados0,
        level: "15-25",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "15-35",
        encounterRate: "5%",
        ifCaught: "already" 
    }
];
const capebrinkgoodrod = [
    {
        pokemon: poliwag0,
        level: "5-15",
        encounterRate: "60%",
        ifCaught: "success" 
    }, 
    {
        pokemon: goldeen0,
        level: "5-15",
        encounterRate: "20%",
        ifCaught: "already" 
    }, 
    {
        pokemon: magikarp0,
        level: "5-15",
        encounterRate: "20%",
        ifCaught: "already" 
    }
];
const bondbridge = [
    {
        pokemon: pidgey0,
        level: "29-32",
        encounterRate: "30%",
        ifCaught: "already" 
    }, 
    {
        pokemon: bellsprout0,
        level: "31",
        encounterRate: "20%",
        ifCaught: "already" 
    }, 
    {
        pokemon: pidgeotto0,
        level: "34-40",
        encounterRate: "15%",
        ifCaught: "already" 
    },
    {
        pokemon: weepinbell0,
        level: "36",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: meowth0,
        level: "31",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: venonat0,
        level: "34",
        encounterRate: "5%",
        ifCaught: "" 
    },
    {
        pokemon: persian0,
        level: "37-40",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "31",
        encounterRate: "5%",
        ifCaught: "already" 
    },
];
const berryforest = [
    {
        pokemon: pidgeotto0,
        level: "37",
        encounterRate: "20%",
        ifCaught: "already" 
    }, 
    {
        pokemon: weepinbell0,
        level: "35",
        encounterRate: "20%",
        ifCaught: "already" 
    }, 
    {
        pokemon: pidgey0,
        level: "32",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: bellsprout0,
        level: "30",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: venonat0,
        level: "34",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: drowzee0,
        level: "34",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: venomoth0,
        level: "37-40",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: slowpoke0,
        level: "31",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: hypno0,
        level: "Normal: 37-40, Special: 30",
        encounterRate: "Normal: 5%, Special: 100%",
        ifCaught: "success" 
    },
    {
        pokemon: exeggcute0,
        level: "35",
        encounterRate: "5%",
        ifCaught: "" 
    },
];
//episode27
const victoryroad = [
    {
        pokemon: machop0,
        level: "34",
        encounterRate: "20%",
        ifCaught: "already" 
    }, 
    {
        pokemon: geodude0,
        level: "34",
        encounterRate: "20%",
        ifCaught: "" 
    }, 
    {
        pokemon: onix0,
        level: "45-48",
        encounterRate: "20%",
        ifCaught: "" 
    },
    {
        pokemon: zubat0,
        level: "34",
        encounterRate: "10%",
        ifCaught: "already" 
    },
    {
        pokemon: primeape0,
        level: "42",
        encounterRate: "10%",
        ifCaught: "success" 
    },
    {
        pokemon: sandslash0,
        level: "46",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: golbat0,
        level: "46",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: machoke0,
        level: "46",
        encounterRate: "5%",
        ifCaught: "already" 
    },
    {
        pokemon: marowak0,
        level: "46-48",
        encounterRate: "5%",
        ifCaught: "" 
    }
];


//episode26
//episode27
//episode28
//episode29
//episode30
//episodefinale

populateTable(testroute, "testroute");

//episode1
populateTable(oaklab, "oaklab");
populateTable(route1, "route1"); 
populateTable(route2, "route2");
populateTable(route22, "route22");
populateTable(viridian, "viridian");
//episode2
//episode3
populateTable(route3, "route3");
//episode4
populateTable(mtMoon, "mtMoon");
populateTable(route3PKMNCenter, "route3PKMNCenter");
populateTable(route4, "route4");
//episode5
populateTable(route24, "route24");
populateTable(route25, "route25");
//episode6
//episode7
populateTable(route5, "route5");
populateTable(route6, "route6");
populateTable(diglettcave, "diglettcave");
populateTable(route11, "route11");
//episode8
//episode9
//episode10
populateTable(route9, "route9");
populateTable(route10, "route10");
//episode11
populateTable(rocktunnel, "rocktunnel");
//episode12
populateTable(route8, "route8");
populateTable(route7, "route7");
//episode13
//episode14
//episode15
populateTable(pokemontower, "pokemontower");
//episode16
populateTable(route12, "route12");
populateTable(route12superrod, "route12superrod");
populateTable(route13, "route13");
populateTable(route13superrod, "route13superrod");
//episode17
populateTable(safariZoneArea1, "safariZoneArea1");
populateTable(safariZonesuperrod, "safariZonesuperrod");
populateTable(safariZoneArea2, "safariZoneArea2");
populateTable(safariZoneArea3, "safariZoneArea3");
populateTable(safariZoneArea4, "safariZoneArea4");
populateTable(route17, "route17");
populateTable(vermillionCitysuperrod, "vermillionCitysuperrod");
populateTable(fuchsiacitysuperrod, "fuchsiacitysuperrod");
populateTable(silphco, "silphco");
//episode18
populateTable(saffronCity, "saffronCity");
//episode19
//episode20
//episode21
populateTable(route19, "route19");
populateTable(route19superrod, "route19superrod");
populateTable(pallettown, "pallettown");
populateTable(pallettownsuperrod, "pallettownsuperrod");
populateTable(route21, "route21");
populateTable(route21surf, "route21surf");
populateTable(route21superrod, "route21superrod");
populateTable(cinnabarisland, "cinnabarisland");
populateTable(cinnabarislandsuperrod, "cinnabarislandsuperrod");
populateTable(mansion, "mansion");
populateTable(route20, "route20");
populateTable(seafoamislands, "seafoamislands");
//episode22
//episode23
//episode24
//episode25
populateTable(kindleroad, "kindleroad");
populateTable(capebrink, "capebrink");
populateTable(capebrinksuperrod, "capebrinksuperrod");
populateTable(capebrinkgoodrod, "capebrinkgoodrod");
populateTable(bondbridge, "bondbridge");
populateTable(berryforest, "berryforest");
//episode26
//episode27
populateTable(victoryroad, "victoryroad");
//episode28
//episode29
//episode30
//episodefinale

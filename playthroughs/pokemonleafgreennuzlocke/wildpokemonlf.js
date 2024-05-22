function populateTable(tableData, tableId) {
    const table = document.getElementById(tableId);  // Get the table element

    // Check if the table exists
    if (!table) {
        console.error(`Table with ID "${tableId}" not found.`);
        return;  // Exit the function if no table found
    }

    const tbody = table.getElementsByTagName("tbody")[0]; // Get the table body

    // Loop through each row in the data
    tableData.forEach(row => {
        // Create a new table row (<tr>)
        const rowElement = document.createElement("tr");

        // Loop through each cell value in the current row
        row.forEach(cellValue => {
            const cell = document.createElement("td");
            cell.classList.add("nopad");  // Add "nopad" class by default

            // If the cell value is an image path, create an image element
            if (cellValue.startsWith("sprites/")) {
                const image = document.createElement("img");
                image.classList.add("nopad");  // Add "nopad" class to images
                image.setAttribute("src", cellValue);
                cell.appendChild(image);
            } else {
                // Otherwise, set the cell content as HTML (for icons)
                cell.innerHTML = cellValue;
            }

            rowElement.appendChild(cell); // Add the cell to the row
        });

        // Append the completed row to the table body
        tbody.appendChild(rowElement);
    });
}

//episode 1
const oaklab = [
    ["Bulbasaur <i class='fa-solid fa-gift'></i>", "Charmander <i class='fa-solid fa-gift'></i>", "<span class='succenc'>Squirtle <i class='fa-solid fa-gift'></i></span>"],
    ["sprites/firered-leafgreen/1.png", "sprites/firered-leafgreen/4.png", "sprites/firered-leafgreen/7.png"],
    ["Gift - Lv.5", "Gift - Lv.5", "Gift - Lv.5"],
];
const route1 = [
    ["<span class='succenc'>Pidgey <i class='fa-solid fa-seedling'></i><span>", "Rattata <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/19.png"],
    ["50% - Lv.2-5", "50% - Lv.2-4"],
];

const route2 = [
    ["<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "Rattata <i class='fa-solid fa-seedling'></i>", "Caterpie <i class='fa-solid fa-seedling'></i>", "<span class='succenc'>Weedle <i class='fa-solid fa-seedling'></i> </span>"],
    ["sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/13.png"],
    ["45% - Lv.2-5", "45% - Lv.2-5", "5% - Lv.4-5", "5% - Lv.4-5"],
];

const route22 =[
    ["<span class='succenc'>Rattata <i class='fa-solid fa-seedling'></i></span>", "Mankey <i class='fa-solid fa-seedling'></i>", "Spearow <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/56.png", "sprites/firered-leafgreen/21.png"],
    ["45% - Lv.2-5", "45% - Lv.2-5", "10% - Lv.3-5"],
];

const viridian1 =[
    ["<span class='succenc'>Caterpie <i class='fa-solid fa-seedling'></i></span>", "Weedle <i class='fa-solid fa-seedling'></i>", "Metapod <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/10.png", "sprites/firered-leafgreen/13.png", "sprites/firered-leafgreen/11.png"],
    ["40% - Lv.3-5", "40% - Lv.3-5", "10% - Lv.4-6"],
];

const viridian2 =[
    ["Kakuna <i class='fa-solid fa-seedling'></i>", "Pikachu <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/14.png", "sprites/firered-leafgreen/25.png"],
    ["5% - Lv.5", "5% - Lv.3-5"],
];
//episode 2,
//episode 3
const route3_1 =[
    ["Spearow <i class='fa-solid fa-seedling'></i>", "<i class='fa-solid fa-flag'></i> Pidgey <i class='fa-solid fa-seedling'></i>", "<span class='succenc'>Nidoran♀ <i class='fa-solid fa-seedling'></i></span>"],
    ["sprites/firered-leafgreen/21.png", "sprites/firered-leafgreen/16.png", "sprites/firered-leafgreen/29.png"],
    ["35% - Lv 6-8", "30% - Lv 6-7", "14% - Lv 6-7"],
];
const route3_2 =[
    ["Jigglypuff <i class='fa-solid fa-seedling'></i>", " Mankey <i class='fa-solid fa-seedling'></i>", "Nidoran♂ <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/39.png", "sprites/firered-leafgreen/56.png", "sprites/firered-leafgreen/32.png"],
    ["10% - Lv 3-7", "10% - Lv 7", "1% - Lv 6"],
];
//episode 4
const mtMoon1f =[
    ["<span class='succenc'>Zubat <i class='fa-solid fa-mountain'></i></span>", "Geodude <i class='fa-solid fa-mountain'></i>", "Paras <i class='fa-solid fa-mountain'></i>", "Clefairy <i class='fa-solid fa-mountain'></i>"],
    ["sprites/firered-leafgreen/41.png", "sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/46.png", "sprites/firered-leafgreen/35.png"],
    ["69% - Lv 7-10", "25% - Lv 7-9", "5% - Lv 8", "1% - Lv 8"],
];
const mtMoonB1f =[
    ["Paras <i class='fa-solid fa-mountain'></i>"],
    ["sprites/firered-leafgreen/46.png"],
    ["100% - Lv 5-10"],
];
const mtMoonB2f =[
    ["Zubat <i class='fa-solid fa-mountain'></i>", "Geodude <i class='fa-solid fa-mountain'></i>", "Paras <i class='fa-solid fa-mountain'></i>", "Clefairy <i class='fa-solid fa-mountain'></i>"],
    ["sprites/firered-leafgreen/41.png", "sprites/firered-leafgreen/74.png", "sprites/firered-leafgreen/46.png", "sprites/firered-leafgreen/35.png"],
    ["49% - Lv 8-11", "30% - Lv 9-10", "15% - Lv 10-12", "6% - Lv 10-12"],
];
const route3PKMNCenter=[
    ["<span class='succenc'>Magikarp <i class='fa-solid fa-gift'></i></span>"],
    ["sprites/firered-leafgreen/129.png"],
    ["Gift - Lv 5"],
];
const route4=[
    ["<i class='fa-solid fa-flag'></i> Rattata <i class='fa-solid fa-seedling'></i>", "<span class='succenc'>Spearow <i class='fa-solid fa-seedling'></i></span>", "Sandshrew <i class='fa-solid fa-seedling'></i>", "Mankey <i class='fa-solid fa-seedling'></i>"],
    ["sprites/firered-leafgreen/19.png", "sprites/firered-leafgreen/21.png", "sprites/firered-leafgreen/27.png", "sprites/firered-leafgreen/56.png"],
    ["35% - Lv 8-12", "35% - Lv 8-12", "25% - Lv 6-12", "5% - Lv 10-12"],
];
//episode5



//episode1
populateTable(oaklab, "oaklab");
populateTable(route1, "route1"); 
populateTable(route2, "route2");
populateTable(route22, "route22");
populateTable(viridian1, "viridian1");
populateTable(viridian2, "viridian2");
//episode2
//episode3
populateTable(route3_1, "route3_1");
populateTable(route3_2, "route3_2");
//episode4
populateTable(mtMoon1f, "mtMoon1f");
populateTable(mtMoonB1f, "mtMoonB1f");
populateTable(mtMoonB2f, "mtMoonB2f");
populateTable(route3PKMNCenter, "route3PKMNCenter");
populateTable(route4, "route4");
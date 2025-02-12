function calculateExponentialPopulationGrowth() {
    let initialPopulation = parseFloat(prompt("What is the initial population growth?"));
    let growthRate = parseFloat(prompt("What is the growth rate of the population?"));
    let time = parseFloat(prompt("How long would you like it to grow (in hours)?"));

    let population = Math.round(initialPopulation*(Math.pow(Math.E, (growthRate*time))));
    
    let region = prompt("Which region is the monster in?").toUpperCase();
    let name = prompt("Identify the monster's name.").toUpperCase();
    // i think two concats on one line is good enough (❁´◡`❁)
    document.getElementById("result").innerHTML = "After ".concat(time, " hours, the population of ").concat(region, " ", name, " has increased to ", population, "!")
}
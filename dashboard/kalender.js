/**
 * Get liturgy  of the day from akolites/kalender-liturgi
 * 
 * @param {Date} date 
 * @returns Object liturgy of the day
 */
async function getLitDay(date) {
    const monthYear = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}`; //yyyy-MM
    const litDay = await fetch(`https://akolites.github.io/kalender/api/v1/${monthYear}.json`)
        .then(res => res.json()
        ).then(k => k[date.getDate() - 1]);
    return litDay;
};

/**
 * Merge all readings in 'q' parameter to one
 * 
 * @param {Array<URL>} urls 
 * @returns URL 
 */
function mergeReadingURLs(urls) {
    const newURL = urls[0];
    const mergedReadings = urls.map(u => u.searchParams.get("q"));
    newURL.searchParams.set("q", mergedReadings.join(';'));
    return newURL;
};

/**
 * Assign readings of the day by guessing
 * WARNING : Use for general usage like ordinary (harian) / sunday (minggu)
 * Not applicable for Holy Days (Easter/Christmas).
 * 
 * @param {Object} litDay
 * @returns Object readings of the day
 */
function getReadings(litDay) {
    let readings = litDay.readings.links;
    readings = readings.filter(v => !v.text.includes("BcO")); // skip BcO

    let result = {};
    let count = 1;
    readings.forEach(element => {
        if (element.text.includes("MT") ||
            element.text.includes("Mzm")) {
            result["mazmur"] = element;
        } else if (element.text.includes("Mat")
            || element.text.includes("Mrk")
            || element.text.includes("Luk")
            || element.text.includes("Yoh")) {
            result["injil"] = element;
        } else {
            result[`bacaan${count}`] = element;
            count++;
        }
    });

    return result;
}

import dateFormat from "dateformat";

// key = 8f1475dc234043ee913bba153dab06df

//using dateformat package to get the dates
const key = "8f1475dc234043ee913bba153dab06df";
const base_url = "https://api.rawg.io/api/";

let day = new Date();
let CurrentDate = dateFormat(day, "isoDate");
let lastYear = day;
let nextYear = new Date();
lastYear.setFullYear(lastYear.getFullYear() - 1);
lastYear = dateFormat(lastYear, "isoDate");
nextYear.setFullYear(nextYear.getFullYear() + 1);
nextYear = dateFormat(nextYear, "isoDate");

const popular_games = `games?key=${key}&dates=${lastYear},${CurrentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&dates=${CurrentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${key}&dates=${lastYear},${CurrentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

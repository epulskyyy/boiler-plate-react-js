import { loadState } from "./localStorage";

export const config = () => {
  const tokenLogin = loadState().auth.token;
  return {
    headers: {
      Authorization: "Bearer " + tokenLogin,
    },
  };
};

export const convertDate = (item) => {
  const newDate = new Date(item);
  const date = newDate.getDate();
  const months = newDate.getMonth();
  const year = newDate.getFullYear();
  const month = monthName[months];
  let h = newDate.getHours().toString();
  let m = newDate.getMinutes().toString();
  let s = newDate.getSeconds().toString();
  if (h.length < 2) {
    h = `0${h}`;
  }
  if (m.length < 2) {
    m = `0${m}`;
  }
  if (s.length < 2) {
    s = `0${s}`;
  }
  const dTime = h + ":" + m;
  const time = timeConvert(dTime);
  return { date, month, year, dTime, time, full: `${date} ${month} ${year}` };
};

export const monthName = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Des",
];

export const splitDate = (date) => {
  const newDate = date.split("-");
  let char = newDate[1].charAt(0);
  if (char === "0") {
    char = Number(newDate[1].charAt(1)) - 1;
  }
  return {
    full: `${newDate[0]} ${monthName[char]} ${newDate[2]}`,
    monthYear: `${monthName[char]} ${newDate[2]}`,
    month: `${monthName[char]}`,
  };
};
export const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
};

export const numberFormat = (num) => {
  return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

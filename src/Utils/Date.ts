export const formatDateShort = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day} / ${month}`;
};

export const formatDateLong = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = [
    "Янв",
    "Фев",
    "Мар",
    "Фпр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(dateString)
    .toLocaleDateString("en-GB", options)
    .replace(/\//g, " / ");
};

import dayjs from 'dayjs';

export const convertDateTime = timestamp => {
  if (!timestamp) {
    return undefined;
  }
  return dayjs(timestamp).format('HH:mm, DD/MM/YYYY');
};

export const fetchLoadmore = (startingId = 0, listBooking) => {
  let obj = [];

  // eslint-disable-next-line no-plusplus
  for (let i = startingId; i < startingId + 5; i++) {
    if (listBooking[i] === undefined) {break;}

    obj.push(listBooking[i]);
  }
  return sortList(obj);
};

export const sortList = (listBooking) => {
  return listBooking.sort((a,b) => (dayjs(a.created_at).isBefore(b.created_at)) ? 1 : -1);
};

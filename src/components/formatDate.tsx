import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // これimportしないとエラー吐かれる

enum DateFormat {
  YY_MM_DD_dd_HH_mm = 'YYYY/MM/DD(dd) HH:mm',
}

const formatDate = (date: Date, type: DateFormat): string => {
  switch (type) {
    case DateFormat.YY_MM_DD_dd_HH_mm:
      return dayjs(date)
        .locale('ja')
        .format('YYYY/MM/DD(dd) HH:mm'); 
    default:
      return '';
  }
};

export default formatDate;
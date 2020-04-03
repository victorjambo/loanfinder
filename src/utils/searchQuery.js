import lunr from 'lunr';
import data from '../../_data_collector/data';

const idx = lunr(function() {
  this.field('title');
  this.field('description');
  this.field('summary');

  data.forEach(item => this.add(item));
});

export const idxSearch = query => {
  let _data = [];
  const res = idx.search(query);
  if (res.length > 0) {
    res.forEach(item => {
      const result = data.find(i => i.id === item.ref);
      _data.push(result);
    });
    return _data;
  }
  return _data;
};

export const countrySearch = country => {
  return data.filter(i => i.country.includes(country));
};

export default idx;

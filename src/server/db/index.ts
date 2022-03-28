import * as mysql from 'mysql';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirpr',
    password: 'blahblah',
    database: 'chirprapp'
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if(err) return reject(err);
      return resolve(results);
    })
  })
}

export default {
  Chirps
}
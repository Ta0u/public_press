import mysql from 'mysql2/promise'
export async function myFunction(envval, qty) {
  console.log(envval, qty);

  const con = await mysql.createConnection({
    host: 'clsrds2.c44ldp4tqelu.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Pass1234',
    database: 'env1',
  });
  var jsonsy;

  try {
    const [results, fields] = await con.query(
      `select datetime,sen1, sen2, sen3, sen4, sen5, sen6 from entries where entryid >= ((select entryid from entries order by entryid desc limit 1) - ${qty})`
    );
    jsonsy = results
    return jsonsy
  } catch(err) {
    console.log(err);
  }
  }

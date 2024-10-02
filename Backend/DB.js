import * as SQLite from 'expo-sqlite';



export async function setupDB(){

    const db = await SQLite.openDatabaseAsync('my_database.db');
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS cars (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, description TEXT, imageUrl text);'
      );
    });
    
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO cars (name, price, description) values (?, ?, ?);',
        ['Tesla X', 10, 'Car goes wroom wroom'],
        (txObj, resultSet) => console.log('Insert Success', resultSet),
        (txObj, error) => console.log('Insert Error', error)
      );
    });
  
}
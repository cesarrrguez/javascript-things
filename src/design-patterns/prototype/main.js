class Connection {
  constructor(driver, server, database, user, password) {
    this.driver = driver;
    this.server = server;
    this.database = database;
    this.user = user;
    this.password = password;

    this.status = 0;
  }

  getConnection() {
    this.status = 1;
    return `${this.driver}://server=${this.server};database=${this.database};user=${this.user};password=${this.password}`;
  }

  close() {
    this.status = 0;
  }
}

class ConnectionPrototype {
  constructor(proto) {
    this.proto = proto;
    return this.clone();
  }

  clone() {
    const connection = new Connection();
    connection.driver = this.proto.driver;
    connection.server = this.proto.server;
    connection.database = this.proto.database;
    connection.user = this.proto.user;
    connection.password = this.proto.password;

    return connection;
  }
}

const connectionSQLServerPrototype = new Connection('MySQL', 'localhost', 'testDB', 'sa', '123456');
connectionSQLServerPrototype.getConnection();

const connectionSQLServer = new ConnectionPrototype(connectionSQLServerPrototype);

console.log(connectionSQLServerPrototype);
// Connection {
//   driver: 'MySQL',
//   server: 'localhost',
//   database: 'testDB',
//   user: 'sa',
//   password: '123456',
//   status: 1
// }

console.log(connectionSQLServer);
// Connection {
//   driver: 'MySQL',
//   server: 'localhost',
//   database: 'testDB',
//   user: 'sa',
//   password: '123456',
//   status: 0
// }

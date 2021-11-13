export const environment = {
    portApp: process.env.PORT || 3000,

    // DB configuration
    host: process.env.HOSTDB || 'localhost',
    portDB: Number(process.env.PORTDB) || 3306,
    username: process.env.DBUSER || 'root',
    password: process.env.DBPASSWORD || 'admin',
    database: process.env.DATABASE || 'ensolvers',
  };
  
// Update with your config settings.

module.exports = {

  development: {    // ambiente de desenvolvimento
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
      migrations: {
        directory: './src/database/migrations'
      },
      useNullAsDefault: true,
  },

  staging: {  // ambiente de produção para dev (testes)
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: { // ambiente de produção
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

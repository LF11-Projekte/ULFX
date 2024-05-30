const baseConfig =
    process.env.NODE_ENV === "development" ? {
            entities: [`${__dirname}/src/db/entity/**/*.ts`],
            migrations: [`${__dirname}/src/db/migration/**/*.ts`]
        }
        : {
            entities: [`${__dirname}/build/db/entity/**/*.ts`],
            migrations: [`${__dirname}/build/db/migration/**/*.ts`]
        };

const baseOptions = {

    cli: {
        entitiesDir: `${__dirname}/src/db/entity`,
        migrationsDir: `${__dirname}/src/db/migration`
    },

    type: "sqlite",
    name: process.env.DB_NAME || "sqlite.db",
    database: process.env.DB_NAME || "sqlite.db",
    synchronize: true,
    logging: process.env.NODE_ENV === "development",

    ...baseOptions
}

module.exports = [
    Object.assign(baseOptions,{
        synchronize: true,
        logging: process.env.NODE_ENV === "development",
    })
]
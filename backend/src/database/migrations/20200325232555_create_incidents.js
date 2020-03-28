
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function (table){
        table.increments(); // primary key

        table.string("title").notNullable(); // Regular Columns
        table.string("description").notNullable();
        table.decimal("value").notNullable();
        
        table.string("ong_id").notNullable(); // Chave estrangeira

        table.foreign("ong_id").references("id").inTable("ongs"); // relacionamento e referência
    });
};

exports.down = function(knex) {
    return knex.scheme.dropTable("incidents");
};

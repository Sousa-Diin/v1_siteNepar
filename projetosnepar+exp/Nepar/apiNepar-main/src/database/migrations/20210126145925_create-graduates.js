
exports.up = function(knex) {
    return knex.schema.createTable("graduates", (table) => {
        table.uuid('graduate_id').defaultTo(knex.raw('uuid_generate_v4()'));
        table.string("name").notNullable();
        table.text("description").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => knex.schema.dropTable("graduates");

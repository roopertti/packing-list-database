import { Knex } from 'knex'
import { TableName } from '~/types/enums/tableName'

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable(TableName.CATEGORY, (table) => {
      table.bigIncrements().primary()
      table.uuid('uuid').notNullable().index()
      table
        .bigInteger('category_id')
        .references('id')
        .inTable(TableName.CATEGORY)
        .nullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('name', 50).notNullable()
      table.string('icon', 50).nullable()
    })
    .createTable(TableName.ITEM, (table) => {
      table.bigIncrements().primary()
      table.uuid('uuid').notNullable().index()
      table
        .bigInteger('category_id')
        .references('id')
        .inTable(TableName.CATEGORY)
        .nullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('name', 50).notNullable()
    })
    .createTable(TableName.USER_ACCOUNT, (table) => {
      table.bigIncrements().primary()
      table.uuid('uuid').notNullable().index()
      table.string('google_id').notNullable()
      table.string('name', 100).notNullable()
      table.timestamp('last_login').nullable()
      table.timestamp('created').notNullable()
      table.timestamp('updated').nullable()
    })
    .createTable(TableName.TRIP, (table) => {
      table.bigIncrements().primary()
      table.uuid('uuid').notNullable().index()
      table.string('name', 100).notNullable()
      table.text('description').nullable()
      table.timestamp('start').nullable()
      table.timestamp('end').nullable()
      table.double('latitude').nullable()
      table.double('longitude').nullable()
      table.timestamp('created').notNullable()
      table.timestamp('updated').nullable()
    })
    .createTable(TableName.PACKLIST, (table) => {
      table.bigIncrements().primary()
      table.uuid('uuid').notNullable().index()
      table
        .bigInteger('user_id')
        .references('id')
        .inTable(TableName.USER_ACCOUNT)
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .bigInteger('trip_id')
        .references('id')
        .inTable(TableName.TRIP)
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('name', 50).notNullable()
      table.string('slug', 10).notNullable()
      table.string('visibility', 10).notNullable()
      table.text('comment').nullable()
      table.double('estimated_weight').nullable()
      table.integer('version').notNullable()
      table.timestamp('created').notNullable()
      table.timestamp('updated').nullable()
    })
    .createTable(TableName.ITEM_PLACEMENT, (table) => {
      table
        .bigInteger('item_id')
        .references('id')
        .inTable(TableName.ITEM)
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .bigInteger('packlist_id')
        .references('id')
        .inTable(TableName.PACKLIST)
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.primary(['item_id', 'packlist_id'])
      table.integer('amount').notNullable()
      table.string('status', 10).notNullable()
    })
    .createTable(TableName.PARTICIPATION, (table) => {
      table
        .bigInteger('trip_id')
        .references('id')
        .inTable(TableName.TRIP)
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .bigInteger('user_account_id')
        .references('id')
        .inTable(TableName.USER_ACCOUNT)
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.primary(['trip_id', 'user_account_id'])
      table.string('type', 10).notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
  knex.schema
    .dropTableIfExists(TableName.PARTICIPATION)
    .dropTableIfExists(TableName.ITEM_PLACEMENT)
    .dropTableIfExists(TableName.PACKLIST)
    .dropTableIfExists(TableName.TRIP)
    .dropTableIfExists(TableName.USER_ACCOUNT)
    .dropTableIfExists(TableName.ITEM)
    .dropTableIfExists(TableName.CATEGORY)
}

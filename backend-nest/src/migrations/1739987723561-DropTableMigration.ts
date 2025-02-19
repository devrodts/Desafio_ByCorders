import { MigrationInterface, QueryRunner } from "typeorm";

export class DropTableMigration1739987723561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

        public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "type" integer NOT NULL, "date" character varying NOT NULL, "value" numeric NOT NULL, "cpf" character varying NOT NULL, "card" character varying NOT NULL, "time" character varying NOT NULL, "storeOwner" character varying NOT NULL, "storeName" character varying NOT NULL, "nature" character varying NOT NULL, "sign" character varying NOT NULL, CONSTRAINT "PK_89acc23e207fdd638dd47763b0e" PRIMARY KEY ("id"))`);
    }
}

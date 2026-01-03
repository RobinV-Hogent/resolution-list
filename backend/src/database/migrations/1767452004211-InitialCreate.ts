import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCreate1767452004211 implements MigrationInterface {
    name = 'InitialCreate1767452004211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "resolution" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "goal" varchar NOT NULL, "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "resolution"`);
    }

}

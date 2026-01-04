import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCreate1767527787745 implements MigrationInterface {
    name = 'InitialCreate1767527787745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "goal" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" text, "value" decimal(5,2) NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "snapshot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL, "value" decimal(5,2) NOT NULL, "goalId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_snapshot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL, "value" decimal(5,2) NOT NULL, "goalId" integer, CONSTRAINT "FK_1b41b85e0ab30fc2796ecbc13c1" FOREIGN KEY ("goalId") REFERENCES "goal" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_snapshot"("id", "date", "value", "goalId") SELECT "id", "date", "value", "goalId" FROM "snapshot"`);
        await queryRunner.query(`DROP TABLE "snapshot"`);
        await queryRunner.query(`ALTER TABLE "temporary_snapshot" RENAME TO "snapshot"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "snapshot" RENAME TO "temporary_snapshot"`);
        await queryRunner.query(`CREATE TABLE "snapshot" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "date" date NOT NULL, "value" decimal(5,2) NOT NULL, "goalId" integer)`);
        await queryRunner.query(`INSERT INTO "snapshot"("id", "date", "value", "goalId") SELECT "id", "date", "value", "goalId" FROM "temporary_snapshot"`);
        await queryRunner.query(`DROP TABLE "temporary_snapshot"`);
        await queryRunner.query(`DROP TABLE "snapshot"`);
        await queryRunner.query(`DROP TABLE "goal"`);
    }

}

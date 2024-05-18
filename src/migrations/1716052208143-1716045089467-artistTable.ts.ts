import { MigrationInterface, QueryRunner } from 'typeorm'

export class ArtistTable implements MigrationInterface {
  name = '1716045089467ArtistTable'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "artist" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "age" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE, "sessionEndedAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<undefined> {
    await queryRunner.query(`DROP TABLE "artist"`)
  }
}

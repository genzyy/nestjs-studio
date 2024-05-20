import { MigrationInterface, QueryRunner } from 'typeorm'

export class DrumTable implements MigrationInterface {
  name = '1716213225490DrumTable.ts1716213489600'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "drum" ("id" SERIAL NOT NULL, "uuid" character varying NOT NULL, "name" character varying NOT NULL, "collection" character varying NOT NULL, "artistId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_08e3ef688a93c6edfc1e3b9498e" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "drum" ADD CONSTRAINT "FK_dc6b51c9db4ee4e92d4cc20fcea" FOREIGN KEY ("artistId") REFERENCES "artist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "drum" DROP CONSTRAINT "FK_dc6b51c9db4ee4e92d4cc20fcea"`,
    )
    await queryRunner.query(`DROP TABLE "drum"`)
  }
}

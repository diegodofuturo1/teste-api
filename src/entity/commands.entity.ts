import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Operation } from './operation.entity';
import { Stage } from './stage.entity';

@Entity()
export class Command {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Stage, (stage) => stage.commands)
  stage: Stage;

  @ManyToMany(() => Operation, (operation) => operation.commands)
  operations: Operation[];
}

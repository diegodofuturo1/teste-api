import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { operation } from 'src/type/operation.type';
import { Command } from './commands.entity';
import { Stage } from './stage.entity';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @Column()
  type: operation;

  @ManyToOne(() => Stage, (stage) => stage.operations)
  stage: Stage;

  @ManyToMany(() => Command, (command) => command.operations)
  commands: Command[];
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Command } from './commands.entity';
import { Operation } from './operation.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  start: number;

  @Column()
  level: number;

  @Column()
  end: number;

  @Column()
  times: number;

  @OneToMany(() => Command, (command) => command.stage)
  commands: Command[];

  @OneToMany(() => Operation, (operation) => operation.stage)
  operations: Operation[];
}

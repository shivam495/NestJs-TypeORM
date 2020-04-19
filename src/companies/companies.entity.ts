import {Entity, Column} from 'typeorm';
import {BaseEntity} from '../base-entity'

@Entity('companies')
export class Companies extends BaseEntity {
    @Column()
    name: string;
    @Column()
    domain: string;
    @Column()
    description: string;
}
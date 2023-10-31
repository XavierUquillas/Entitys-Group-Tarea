import { OneToOne, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, JoinColumn} from "typeorm";
import { PassportEntity } from "../entities-tarea/passport.entity";

@Entity('passport', {schema:'visa'})

export class PersonEntity{
    @PrimaryGeneratedColumn( 'uuid')
    id: string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createAT:Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAT:Date
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAT:Date

    @OneToOne(() => PassportEntity, passport => passport.persons)
    @JoinColumn()
    passport:PassportEntity;


    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'passport name',
    })
    name: string;

    @Column('varchar', {
        name: 'nationality',
        nullable: true,
        comment: 'passport nationality',
    })
    nationality: string;
}
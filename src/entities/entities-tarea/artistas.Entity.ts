import { ManyToMany, OneToOne, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, JoinTable} from "typeorm";
import { GalerysEntity } from "../entities-tarea/galerias.Entity";

@Entity('artists', {schema:'arte'})

export class ArtistsEntity{
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

    @ManyToMany(() => GalerysEntity, galerys => galerys.artists)
    @JoinTable()
    galerys:GalerysEntity[];


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'artist name',
    })
    title: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: true,
        comment: 'artist lastname',
    })
    lastname: string;
    
    @Column('varchar', {
        name: 'age',
        nullable: true,
        comment: 'artist age',
    })
    age: string;
    

}
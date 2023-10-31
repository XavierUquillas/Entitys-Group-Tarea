import { ManyToMany, OneToOne, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, JoinTable} from "typeorm";
import { ArtistsEntity } from "../entities-tarea/artistas.Entity";

@Entity('galerys', {schema:'arte'})

export class GalerysEntity{
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

    @ManyToMany(() => ArtistsEntity, artists => artists.galerys)
    artists:ArtistsEntity[];


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'Galerys Name',
    })
    title: string;

    @Column('varchar', {
        name: 'Description',
        nullable: true,
        comment: 'Galerys Description',
    })
    Description: string;
    
    @Column('varchar', {
        name: 'address',
        nullable: true,
        comment: 'Galery address',
    })
    address: string;
    

}
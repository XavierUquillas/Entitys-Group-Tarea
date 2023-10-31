import { ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { CategoryEntity } from "../entities-tarea/category.Entity";

@Entity('animes', {schema:'ventas'})

export class AnimeEntity{
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

    @ManyToOne(() => CategoryEntity, category => category.anime)
    category:CategoryEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'anime name',
    })
    title: string;

    @Column('varchar', {
        name: 'synopsis',
        nullable: true,
        comment: 'anime synopsis',
    })
    synopsis: string;
}
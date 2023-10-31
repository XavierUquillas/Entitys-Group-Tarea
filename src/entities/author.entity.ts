import { ManyToMany, OneToOne, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, JoinTable} from "typeorm";
import { BookEntity } from "./book.entity";

@Entity('authors', {schema:'ventas'})

export class AuthorEntity{
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

    @ManyToMany(() => BookEntity, book => book.authors)
    @JoinTable()
    books:BookEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'author name',
    })
    title: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: true,
        comment: 'author lastname',
    })
    lastname: string;
    

}
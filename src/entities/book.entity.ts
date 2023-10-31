import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToMany} from "typeorm";
import { AuthorEntity} from "./author.entity";

@Entity('authors', {schema:'ventas'})

export class BookEntity{
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

    @ManyToMany(() => AuthorEntity, authors => authors.books)
    
    authors:AuthorEntity[];

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'book name',
    })
    name: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: false,
        comment: 'category book',
    })
    lastname: string;

    @Column('string', {
        name: 'identification',
        nullable: true,
        comment: 'book identification',
    })
    identification: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'book description',
    })
    description: string;
}
import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories', {schema:'ventas'})

export class CategoryEntity{
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

    @OneToMany(() => ProductEntity, product => product.category)
    products:ProductEntity[];

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'category name',
    })
    title: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'category description',
    })
    description: string;
}

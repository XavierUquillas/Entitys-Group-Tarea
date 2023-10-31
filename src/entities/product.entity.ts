import { ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products', {schema:'ventas'})

export class ProductEntity{
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

    @ManyToOne(() => CategoryEntity, category => category.products)
    category:CategoryEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'product name',
    })
    title: string;

    @Column('number', {
        name: 'price',
        nullable: false,
        comment: 'product price',
    })
    price: number;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'product description',
    })
    description: string;

    @Column('varchar', {
        name: 'mensaje',
        nullable: true,
        comment: 'product mensaje',
    })
    mensaje: string;

    

    @BeforeInsert()
    @BeforeUpdate()
    async setTitle(){
        if(!this.title){
            return;
        }
        this.title = this.title.toUpperCase();
    }
    
    @BeforeInsert()
    @BeforeUpdate()
    async setdescription(){
        if(!this.description){
            return;
        }
        this.description = this.description.toLowerCase();
    }
    /*
    @BeforeInsert()
    @BeforeUpdate()
    async setemail(){
        if(!this.email){
            return;
        }
        this.email = this.email.toLowerCase(). trim();
    }*/

    /*
    @BeforeInsert()
    @BeforeUpdate()
    async setpassword(){
        if(!this.password){
            return;
        }
        this.password = await Bcrypt.hash(this.setpassword, 15);
    }
    */

    @BeforeInsert()
    @BeforeUpdate()
    async setmensaje(){
        if(!this.mensaje){
            return;
        }
        this.mensaje = this.mensaje.replace(/\b\w/g, (char) => char.toUpperCase());
    }
}

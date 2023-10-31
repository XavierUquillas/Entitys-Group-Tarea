import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { RoleEntity } from "./role.entity";

@Entity('users', {schema:'ventas'})

export class UserEntity{
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

    @OneToOne(() => RoleEntity, role => role.user)
    @JoinColumn()
    role:RoleEntity[];

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'user name',
    })
    name: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: false,
        comment: 'user last name',
    })
    lastname: string;

    @Column('string', {
        name: 'identification',
        nullable: true,
        comment: 'user identification',
    })
    identification: string;

    @Column('string', {
        name: 'address',
        nullable: true,
        comment: 'user address',
    })
    address: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'user description',
    })
    description: string;
}

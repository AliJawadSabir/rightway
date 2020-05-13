import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';
import { Customer } from './customer';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class Order extends Model<Order> {
  /**
   * Adding Columns and their properties of User Table
   */
  @ForeignKey(() => Customer)
  @Column
  customerId: number;

  @Column status: string;

  @Column amount: string;

  @Column trackId: string;

  // @Column instruction: string;
  
  // @Column address: string;

  @Column createdBy: number;

  @Column updatedBy: number;


}
// 
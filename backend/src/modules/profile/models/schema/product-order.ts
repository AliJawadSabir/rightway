import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';
import { Order } from './order';
import { Product } from './product';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class ProductOrder extends Model<ProductOrder> {
  /**
   * Adding Columns and their properties of User Table
   */
  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column quantity: number;

  @Column createdBy: number;

  @Column updatedBy: number;


}
// 
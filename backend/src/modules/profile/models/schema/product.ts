import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Category } from './category';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class Product extends Model<Product> {
  /**
   * Adding Columns and their properties of User Table
   */
  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @Column name: string;

  @Column available: number;

  @Column sold: number;

  @Column price: number;

  @Column description: string;

  // @Column verificationCode: string;

  @Column path: string;

  // @Column isSuperUser: boolean;

  @Column createdBy: number;

  @Column updatedBy: number;

}
// 
import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class Customer extends Model<Customer> {
  /**
   * Adding Columns and their properties of User Table
   */
  @Column fname: string;

  @Column lname: string;

  @Column mobileNumber: string;

  @Column email: string;

  @Column instruction: string;
  
  @Column address: string;

  @Column createdBy: number;

  @Column updatedBy: number;


}
// 
import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class Size extends Model<Size> {
  /**
   * Adding Columns and their properties of User Table
   */
  @Column size: string;

  @Column text: string;

  @Column createdBy: number;

  @Column updatedBy: number;


}
// 
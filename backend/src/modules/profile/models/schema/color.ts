import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class Color extends Model<Color> {
  /**
   * Adding Columns and their properties of User Table
   */
  @Column color: string;

  @Column description: string;

  @Column createdBy: number;

  @Column updatedBy: number;


}
// 
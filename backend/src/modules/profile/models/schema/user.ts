import { Table, Column, Model } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';

@Table({ timestamps: true, freezeTableName: true }) // for adding createdAt and updatedAt Columns
export class User extends Model<User> {
  /**
   * Adding Columns and their properties of User Table
   */
  @Column name: string;

  @Column email: string;

  @Column mobileNumber: string;

  @Column address: string;

  @Column gender: string;

  // @Column verificationCode: string;

  @Column password: string;

  @Column isSuperUser: boolean;

  @Column createdBy: number;

  @Column updatedBy: number;

}
// 
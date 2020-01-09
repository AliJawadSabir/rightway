import { Table, Column, Model, ForeignKey, HasMany, BelongsTo, HasOne } from 'sequelize-typescript';
/**
 * Importing related Models
 */
// import { UserGroup, RoleAssignment, FeaturePermission } from '../..';
// import { CRApplicant } from '../../../campus';

@Table({ timestamps: true }) // for adding createdAt and updatedAt Columns
export class User extends Model<User> {
  /**
   * Adding Columns and their properties of User Table
   */
  @Column firstName: string;

  @Column lastName: string;

  @Column phoneNumber: string;

  @Column address: string;

  @Column gender: string;

  @Column verificationCode: string;

  @Column password: string;

  @Column isSuperUser: boolean;

  @Column isActive: boolean;

  @Column portal: string;

//   @ForeignKey(() => CRApplicant)
//   @Column
//   CRApplicantId: number;

//   @Column deleted: boolean;

  @Column createdBy: number;

  @Column updatedBy: number;

  /**
   * HasMany Relatonship
   */
//   @HasMany(() => UserGroup, {
//     foreignKey: 'userId'
//   })
//   userGroups: UserGroup[];

//   @HasMany(() => RoleAssignment, {
//     foreignKey: 'parentId',
//     constraints: false,
//     scope: {
//       parent: 'user'
//     }
//   })
//   roleAssignments: RoleAssignment[];

//   @HasMany(() => FeaturePermission, {
//     foreignKey: 'parentId',
//     constraints: false,
//     scope: {
//       parent: 'user',
//       status: true
//     }
//   })
//   permissions: FeaturePermission[];

//   @BelongsTo(() => CRApplicant, {
//     foreignKey: 'CRApplicantId'
//   })
//   applicant: CRApplicant;
}
// 